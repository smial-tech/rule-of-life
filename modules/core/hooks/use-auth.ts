import { createAuthClient } from "better-auth/react"
import { env } from "node:process"
export const authClient = createAuthClient({
    baseURL: env.BETTER_AUTH_URL,
})