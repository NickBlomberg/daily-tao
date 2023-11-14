'use client'

import Chapter from './components/Chapter'

import data from '../data.json'

const currentDayNumber = Math.ceil(
  (new Date().valueOf() - new Date(new Date().getFullYear(), 0, 1).valueOf()) /
    (24 * 60 * 60 * 1000),
)

export default function Home() {
  return <Chapter {...data[currentDayNumber]} />
}
