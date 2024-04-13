import { useRef } from 'react'

import {
  Content,
  RootLayout,
  SideBar,
  ActionButtonsRow,
  NotePreviewList,
  FloatingNoteTitle
} from '@/components'
import MarkdownEditor from './components/MarkdownEditor'

function App(): JSX.Element {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <RootLayout>
      <SideBar className="p-2">
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
      </SideBar>
      <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
        <FloatingNoteTitle />
        <MarkdownEditor />
      </Content>
    </RootLayout>
  )
}

export default App
