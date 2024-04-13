import { cn } from '@renderer/utils'

const RootLayout = ({ className, children, ...props }: React.ComponentProps<'main'>) => {
  return (
    <main className={cn('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export default RootLayout
