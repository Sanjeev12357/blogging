import type React from "react"
import { Bangers, Rubik } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ConfettiEffect } from "@/components/confetti-effect"

// Font optimization for multiple fonts
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

export const metadata = {
  title: "Funky Blog",
  description: "A funky, cartoonish personal blog with bold style",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${bangers.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ConfettiEffect />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}