'use client'
import { authClient } from "@/modules/core/hooks/use-auth";
import { Google } from "../icons/google";
import { Button } from "../ui/button";
import { Field } from "../ui/field";

export function GoogleButton() {
  const signInWithGoogle = async () => {
    const paylaod = await authClient.signIn.social({
    provider: "google",
    callbackURL: '/dashboard',
    errorCallbackURL: "/error",
    /**
     * A URL to redirect if the user is newly registered
     */
    newUserCallbackURL: "/dashboard/onboarding",
  })
  }
   return (
    <Field>
      <Button variant="outline" type="button" onClick={signInWithGoogle}>
        <Google className="size-3.5" />
        Login with Google
      </Button>
    </Field>
   )
}