import { cn } from '@renderer/utils'
import NotePreview from './NotePreview'
import { useNotesList } from '@/hooks/useNotesList'
import { isEmpty } from 'lodash'

type NotePreviewListProps = React.ComponentProps<'ul'> & {
  onSelect: () => void
}

const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
          key={note.title + note.laseEditTime}
          {...note}
        />
      ))}
    </ul>
  )
}

export default NotePreviewList
