import React from 'react'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function CustomChevron({ direction, chapterNumber }) {
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />

  return (
    <Link
      href={chapterNumber.toString()}
      className={`text-battleship-gray-400 md:absolute md:bottom-3 md:top-1/2 ${
        direction === 'left' ? 'left-3' : 'right-3'
      }`}
    >
      {icon}
    </Link>
  )
}

export default CustomChevron
