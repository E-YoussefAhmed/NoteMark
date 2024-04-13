import { selectedNoteAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue } from 'jotai'
import React from 'react'

const FloatingNoteTitle = ({ ...props }: React.ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) return null

  return (
    <div className={cn('flex justify-center pt-2')} {...props}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  )
}

export default FloatingNoteTitle
