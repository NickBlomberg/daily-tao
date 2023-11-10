import { Analytics } from '@vercel/analytics/react'
import './globals.css'

import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Daily Tao',
  description: 'Daily meditations inspired by Taoist wisdom',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.className} min-h-screen bg-battleship-gray-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
