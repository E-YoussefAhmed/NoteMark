import { cn } from '@renderer/utils'

const ActionButton = ({ className, children, ...props }: React.ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'px-2 py-1 rounded-md border border-x-zinc-400/50 hover:bg-zinc-600/50',
        'transition-colors duration-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ActionButton
