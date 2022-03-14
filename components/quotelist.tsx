import Quote from './Quote'
import React from 'react'

const QuoteList = ({ quotes }) => {
  return quotes.map((quoteData) => <Quote quoteData={quoteData} />)
}

export default QuoteList