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
    <html lang='en' className='h-full'>
      <body
        className={`${montserrat.className} relative h-screen bg-battleship-gray-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
