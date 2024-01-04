import type { Metadata } from 'next'
import './globals.css'
import {Navbar, Footer} from '@/components'

export const metadata: Metadata = {
  title: 'Car Store',
  description: 'Discover the best cars for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  )
}
