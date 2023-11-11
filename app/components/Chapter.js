import React from 'react'
import { Nothing_You_Could_Do } from 'next/font/google'
import ChapterQuote from './ChapterQuote'
import ChapterContent from './ChapterContent'
import CustomChevron from './CustomChevron'

const titleFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })

function Chapter({
  chapterNumber,
  chapterTitle,
  chapterQuote,
  chapterContent,
}) {
  const prevChapterNumber = parseInt(chapterNumber) - 1
  const nextChapterNumber = parseInt(chapterNumber) + 1

  return (
    <main className='flex h-screen flex-col items-center gap-6 px-3 pt-8 md:justify-center'>
      <h1 className={`text-4xl font-bold ${titleFont.className}`}>
        {chapterTitle}
      </h1>

      <ChapterQuote value={chapterQuote} />
      <ChapterContent value={chapterContent} />

      <CustomChevron direction='left' chapterNumber={prevChapterNumber} />

      <CustomChevron direction='right' chapterNumber={nextChapterNumber} />
    </main>
  )
}

export default Chapter
