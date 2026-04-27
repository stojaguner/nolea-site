import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Noléa — Protection, before it\'s needed.',
  description: 'Noléa is a refined skincare concept focused on supporting children\'s skin exposed to chlorinated water through a restrained, evidence-led approach.',
  openGraph: {
    title: 'Noléa — Protection, before it\'s needed.',
    description: 'A refined approach to supporting children\'s skin exposed to chlorinated water.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}
