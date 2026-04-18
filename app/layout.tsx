import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
})

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes"
})

export const metadata: Metadata = {
  title: 'Асемгул - Қыз Ұзату',
  description: 'Асемгулдің қыз ұзату тойына шақыру',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#f8f6f1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kk" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body className="font-serif antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
