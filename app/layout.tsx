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
  title: "Creative Canvas | Personal Blog",
  description: "A vibrant personal blog with insights on technology, design, and life's adventures",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.svg' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Creative Canvas | Personal Blog',
    description: 'A vibrant personal blog with insights on technology, design, and life\'s adventures',
    url: 'https://creative-canvas.blog',
    siteName: 'Creative Canvas',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Canvas | Personal Blog',
    description: 'A vibrant personal blog with insights on technology, design, and life\'s adventures',
    images: ['/twitter-image.png'],
  },
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