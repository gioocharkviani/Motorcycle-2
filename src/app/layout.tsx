import './globals.css'
import type { Metadata } from 'next'

//components
import Header from '@/components/header/header'

import {  } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Motorcycle Shop app by Giorgi Charkvinai',
  description: 'Motorcycle Shop app by Giorgi Charkvinai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
