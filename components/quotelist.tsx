import Quote from './quote'
import React from 'react'

const QuoteList = ({ quotes }: { quotes: any }) => {
  return quotes.map((quoteData: { text: string; author: string }, i: any) => (
    <Quote key={`quote-${i}`} quoteData={quoteData} />
  ))
}

export default QuoteList
