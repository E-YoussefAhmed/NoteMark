import { forwardRef } from 'react'
import { cn } from '@renderer/utils'

const Content = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex-1 overflow-auto', className)} {...props}>
        {children}
      </div>
    )
  }
)

Content.displayName = 'Content'

export default Content
