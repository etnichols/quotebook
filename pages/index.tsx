import React, { useEffect, useState } from 'react'

import Button from '../components/button'
import { List } from 'immutable'
import type { NextPage } from 'next'
import QUOTES from '../data/quotes'
import Quote from '../components/quote'
import QuoteList from '../components/quotelist'
import { shuffle } from '../utils/shuffle'

const shuffled = List(shuffle(QUOTES))

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
    setCurrentQuote(shuffled.get(index))
  }, [index])

  return (
    <>
      <main
        className="text-center content-center overflow-auto h-screen pb-16"
        style={{
          backgroundColor: randomColor(),
          transition: 'background-color 1s ease',
        }}
      >
        <h1 className="text-white text-3xl my-8 drop-shadow-sm underline">Quotebook</h1>
        <div className="flex flex-row justify-around">
          <button
            onClick={() => setViewMode(viewMode === 'LIST' ? 'MODAL' : 'LIST')}
            className="flex mb-4 text-white"
          >
            {viewMode === 'MODAL' ? 'See all' : 'Single quote view'}
          </button>
          <button
            onClick={() => setViewMode(viewMode === 'LIST' ? 'MODAL' : 'LIST')}
            className="flex mb-4 text-white"
          >
            Starred
          </button>
        </div>
        {viewMode === 'MODAL' ? (
          <>
            <Quote quoteData={currentQuote} />
            <div className="text-center p-8">
              <Button
                width="40"
                height="40"
                iconName="arrow-back"
                iconColor="white"
                onClick={handleBackButton}
              />
              <Button
                width={'40'}
                height={'40'}
                iconName="arrow-forward"
                iconColor="white"
                onClick={handleNextButton}
              />
            </div>
          </>
        ) : (
          <QuoteList quotes={shuffled.slice(0, 10)} />
        )}
      </main>
      {/* <footer className={styles.footer}>Quotebook</footer> */}
    </>
  )
}

export default Home
