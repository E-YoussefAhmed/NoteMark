import NewNoteButton from './NewNoteButton'
import DeleteNoteButton from './DeleteNoteButton'

const ActionButtonsRow = ({ ...props }: React.ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}

export default ActionButtonsRow
