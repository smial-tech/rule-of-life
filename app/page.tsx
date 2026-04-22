import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <Separator className="mt-8" />

        <div>
          <h2 className="font-medium">Example pages</h2>
          <Button size={'sm'} variant={'link'} render={<Link href={'/dashboard'}>Dashboard</Link>} nativeButton={false}/>
          <Button size={'sm'} variant={'link'} render={<Link href={'/login'}>Login</Link>} nativeButton={false}/>
          <Button size={'sm'} variant={'link'} render={<Link href={'/sign-up'}>Sign up</Link>} nativeButton={false} />
        </div>

      </div>
    </div>
  )
}
