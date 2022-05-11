import Quote from './quote'
import React from 'react'

const QuoteModal = ({ quoteData }: { quoteData: any }) => {
  return (
    <>
      <Quote quoteData={quoteData} />
    </>
  )
}

export default QuoteModal
