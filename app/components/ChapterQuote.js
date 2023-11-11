import React from 'react'

function ChapterQuote({ value }) {
  return (
    <blockquote className='text-center text-sm italic leading-6 tracking-wider text-battleship-gray-500'>
      {value.map((line, key) => (
        <p key={key}>{line}</p>
      ))}
    </blockquote>
  )
}

export default ChapterQuote
