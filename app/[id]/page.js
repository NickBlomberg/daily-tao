import Chapter from '../components/Chapter'

import data from '../../data.json'

export default function ChapterById({ params }) {
  return <Chapter {...data[params.id]} />
}
