import React from 'react'
import { Nothing_You_Could_Do } from 'next/font/google'

const titleFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })

function Chapter({ chapterTitle, chapterQuote, chapterContent }) {
  return (
    <main className='flex h-screen flex-col items-center gap-6 px-3 pt-8 md:justify-center'>
      <h1 className={`text-4xl font-bold ${titleFont.className}`}>
        {chapterTitle}
      </h1>
      <div className='text-center text-sm italic leading-6 tracking-wider text-battleship-gray-500'>
        {chapterQuote.map((line, key) => (
          <p key={key}>{line}</p>
        ))}
      </div>

      <div className='max-w-prose'>
        {chapterContent.map((paragraph, key) => (
          <p key={key} className='pb-3'>
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  )
}

export default Chapter
