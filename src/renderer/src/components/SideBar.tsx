import { cn } from '@renderer/utils'

const SideBar = ({ className, children, ...props }: React.ComponentProps<'aside'>) => {
  return (
    <aside className={cn('w-[250px] h-[100vh+10px] overflow-auto', className)} {...props}>
      {children}
    </aside>
  )
}

export default SideBar
