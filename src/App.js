import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { List } from 'immutable'

import Control from './components/Control'

import quotes from './quotes'
import colors from './colors'

const shuffled = List(shuffle(quotes))
const bgcolors = List(colors)

const App = (props) => {
  const init = shuffled.get(0)
  const [currentQuote, setCurrentQuote] = useState(init)
  const [index, setIndex] = useState(0)

  const randomColor = () => {
    return bgcolors.get(Math.floor(Math.random() * colors.length))
  }

  const handleNextButton = () => {
    // Wrap to beginning if user hits the end of the quote array.
    const next = index === shuffled.size - 1 ? 0 : index + 1
    setIndex(next)
  }

  const handleBackButton = () => {
    // Guard against users who scroll backwards immediately,
    // and makes it all the way through the array.
    const next = index === -1 * (shuffled.size - 1) ? 0 : index - 1
    setIndex(next)
  }

  useEffect(() => {
    const nextQuote = shuffled.get(index)
    setCurrentQuote(nextQuote)
  }, [index])

  const { quote, author } = currentQuote

  let quoteWithQuotes = '\"' + quote + '\"'

  return (
    <div
      className="text-center content-center overflow-auto h-screen"
      style={{
        backgroundColor: randomColor(),
        transition: 'background-color 1s ease',
      }}
    >
      <h1 className="text-white text-2xl h-16 p-12 app-header">Quotebook</h1>
      <div className="bg-white text-center text-base p-8 m-4 md:w-5/12 md:mx-auto rounded-md quote-modal">
        <ReactMarkdown>{quoteWithQuotes}</ReactMarkdown>
        <br />
        <hr />
        <p className="my-4">- {author}</p>
      </div>
      <div className="text-center p-12">
        <Control
          width="40"
          height="40"
          icon="arrow-back"
          onClickFunction={handleBackButton}
        />
        <Control
          width={'40'}
          height={'40'}
          icon="arrow-forward"
          onClickFunction={handleNextButton}
        />
      </div>
    </div>
  )
}

function shuffle(arr) {
  let curIndex = arr.length,
    tempVal,
    randIndex

  while (0 !== curIndex) {
    // Pick remaining element.
    randIndex = Math.floor(Math.random() * curIndex)
    curIndex -= 1

    // Swap with current.
    tempVal = arr[curIndex]
    arr[curIndex] = arr[randIndex]
    arr[randIndex] = tempVal
  }

  return arr
}

export default App
