const fs = require('fs')
const cheerio = require('cheerio')
const EPub = require('epub')

const EPUB_FILE_PATH =
  './Ming-Dao Deng - 365 Tao_ Daily Meditations-Harper (1992).epub'
const book = new EPub(EPUB_FILE_PATH)

const data = {}

const processChapter = item => {
  return new Promise((resolve, reject) => {
    book.getChapter(item.id, (error, text) => {
      if (error) {
        reject(`Error getting content for item ${item.id}: ${error}`)
      }

      const $ = cheerio.load(text)

      const chapterNumber = $('h1.chnumber').last().text()
      const chapterTitle = $('h1.chtitle').last().text()

      const quoteDiv = $('div.blockquote')
      const chapterQuote = quoteDiv
        .find('p')
        .map((index, element) => $(element).text())
        .get()

      const chapterContent = quoteDiv
        .nextAll('p')
        .map((index, element) => $(element).text())
        .get()

      resolve({
        chapterNumber,
        chapterTitle,
        chapterQuote,
        chapterContent,
      })
    })
  })
}

const processAllChapters = async () => {
  const FIRST_CHAPTER = 7
  const LAST_CHAPTER = 372

  const promises = book.flow
    .slice(FIRST_CHAPTER, LAST_CHAPTER)
    .map(processChapter)

  try {
    const chaptersData = await Promise.all(promises)

    chaptersData.forEach((chapterData, index) => {
      data[chapterData.chapterNumber] = chapterData
    })
  } catch (error) {
    console.error(error)
  }
}

const main = async () => {
  return new Promise((resolve, reject) => {
    book.on('end', async () => {
      try {
        await processAllChapters()
        resolve()
      } catch (error) {
        reject(error)
      }
    })

    book.parse()
  })
}

main()
  .then(() => {
    const OUTPUT_FILE = 'data.json'
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2), 'utf-8')
  })
  .catch(error => {
    console.error('Error processing EPUB:', error)
  })
