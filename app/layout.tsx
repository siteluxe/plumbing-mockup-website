import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Vanguard Plumbing | Trusted Plumbers in Plano, TX',
  description:
    'Vanguard Plumbing provides fast, reliable, and affordable plumbing services in Plano, TX and all surrounding counties. Call (555) 408-2930 for a free estimate.',
  keywords: 'plumbing, Plano TX, plumber, Collin County, Denton County, Dallas County, emergency plumbing',
}

export const viewport: Viewport = {
  themeColor: '#0f2044',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-white scroll-smooth`}>
      <body className="antialiased font-sans overflow-x-hidden max-w-[100vw]">{children}</body>
    </html>
  )
}
