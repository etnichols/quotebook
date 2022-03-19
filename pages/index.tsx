import React, { useEffect, useState } from 'react'

import { List } from 'immutable'
import type { NextPage } from 'next'
import QuoteModal from '../components/quotemodal'
import quotes from './quotes'
import { shuffle } from '../utils/shuffle'

const shuffled = List(shuffle(quotes))

const Home: NextPage = () => {
  // https://color.adobe.com/Vintage-Ralph-Lauren-color-theme-2216979
  const colors: any = List([
    '#703030',
    '#2F343B',
    '#7E827A',
    '#E3CDA4',
    '#C77966',
  ])

  const init = shuffled.get(0)
  const [currentQuote, setCurrentQuote] = useState(init)
  const [index, setIndex] = useState(0)
  const [viewMode, setViewMode] = useState('MODAL')

  const randomColor = () => {
    return colors.get(Math.floor(Math.random() * colors.size))
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

  return (
    <>
      <main
        className="text-center content-center overflow-auto h-screen"
        style={{
          backgroundColor: randomColor(),
          transition: 'background-color 1s ease',
        }}
      >
        <h1 className="text-white text-3xl h-16 p-12 app-header">Quotebook</h1>
        <QuoteModal
          quoteData={currentQuote}
          handleBackButton={handleBackButton}
          handleNextButton={handleNextButton}
        />
        {/* <QuoteList quotes={shuffled.slice(0, 10)} /> */}
      </main>
      {/* <footer className={styles.footer}>Quotebook</footer> */}
    </>
  )
}

export default Home
