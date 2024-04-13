import { cn, formatDateFromMS } from '@renderer/utils'
import { NoteInfo } from '@shared/models'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & React.ComponentProps<'div'>

const NotePreview = ({
  title,
  laseEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  return (
    <div
      {...props}
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        {formatDateFromMS(laseEditTime)}
      </span>
    </div>
  )
}

export default NotePreview
