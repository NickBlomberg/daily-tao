import data from '../data.json'

const currentDayNumber = Math.ceil(
  (new Date().valueOf() - new Date(new Date().getFullYear(), 0, 1).valueOf()) /
    (24 * 60 * 60 * 1000),
)

const { chapterNumber, chapterTitle, chapterQuote, chapterContent } =
  data[currentDayNumber]

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-6 px-3 pt-8 md:pt-32'>
      <h1 className='text-2xl font-bold'>{chapterTitle}</h1>
      <div className='italic'>
        {chapterQuote.map((line, key) => (
          <p key={key} className='text-gray-500'>
            {line}
          </p>
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
