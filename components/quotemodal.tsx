import Control from './Control'
import Quote from './Quote'
import React from 'react'

const QuoteModal = ({ quoteData, handleBackButton, handleNextButton }) => {
  return (
    <>
      <Quote quoteData={quoteData} />
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
    </>
  )
}

export default QuoteModal