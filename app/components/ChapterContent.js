import React from 'react'

function ChapterContent({ value }) {
  return (
    <div className='max-w-prose'>
      {value.map((paragraph, key) => (
        <p key={key} className='pb-3'>
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default ChapterContent
