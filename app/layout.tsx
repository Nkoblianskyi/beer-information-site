import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BierWissen - Informationsportal für deutsche Bierkultur",
  description:
    "Entdecken Sie die Vielfalt deutscher Biere. Umfassende Informationen über Biersorten, Brautraditionen und die höchsten Alkoholgehalte.",
  keywords: "Bier, Deutschland, Braukunst, Weizenbock, Doppelbock, Alkoholgehalt, Bierkultur",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
