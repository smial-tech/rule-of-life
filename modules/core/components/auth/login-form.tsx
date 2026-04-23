import { cn } from "@/modules/core/lib/utils"
import { Button } from "@/modules/core/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/modules/core/components/ui/field"
import { Google } from "../icons/google"
import { GoogleButton } from "./google-button"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Sign in to your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Continue with your Google account to access your dashboard.
          </p>
        </div>
        <GoogleButton />
      </FieldGroup>
    </form>
  )
}
