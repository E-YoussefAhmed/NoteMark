import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { createNote, deleteNote, getNotes, readNote, writeNote } from '@/lib'
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

let mainWindow: BrowserWindow | null = null

const gotTheLock = app.requestSingleInstanceLock()

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    center: true,
    title: 'NoteMark',
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    if (mainWindow) mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (_, __, ___, additionalData) => {
    console.log(additionalData)

    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

  app.whenReady().then(() => {
    electronApp.setAppUserModelId('com.electron')

    app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window)
    })

    ipcMain.handle('getNotes', (_, ...args: Parameters<GetNotes>) => getNotes(...args))
    ipcMain.handle('readNote', (_, ...args: Parameters<ReadNote>) => readNote(...args))
    ipcMain.handle('writeNote', (_, ...args: Parameters<WriteNote>) => writeNote(...args))
    ipcMain.handle('createNote', (_, ...args: Parameters<CreateNote>) => createNote(...args))
    ipcMain.handle('deleteNote', (_, ...args: Parameters<DeleteNote>) => deleteNote(...args))

    createWindow()

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
}
