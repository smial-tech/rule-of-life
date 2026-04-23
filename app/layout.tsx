import { Geist, Geist_Mono, Figtree } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { ThemeProvider } from "@/modules/core/components/layout/theme-provider"
import { cn } from "@/modules/core/lib/utils";
import { QueryProvider } from "@/modules/core/api/client"
import { Metadata } from "next"

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Smial - Rule of Life",
  description: "Smial - Rule of Life es plataforma donde los usuarios construyen, siguen y reflexionan sobre su propia Regla de Vida inspirada en la tradición benedictina (Ora et labora) y la estructura de 8 hábitos de The Common Rule.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", figtree.variable)}
    >
      <body>
        <QueryProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </QueryProvider>
      </body>
    </html>
  )
}
