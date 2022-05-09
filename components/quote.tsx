import Control from './control'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const Quote = ({
  quoteData,
}: {
  quoteData: { text: string; author: string }
}) => {
  const { text, author } = quoteData
  return (
    <div className="bg-white text-center text-base p-8 m-4 md:w-5/12 md:mx-auto rounded-md quote-modal leading-8 drop-shadow-md">
      <div className="mb-4">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <hr />
      <p className="mt-4 mb-8">- {author}</p>
      <div className="flex flex-row justify-around">
        <Control
          width={'30'}
          height={'30'}
          icon="star"
          color="#3A3B3C"
          onClickFunction={() => {
            console.log('star!')
          }}
        />
        <Control
          width={'30'}
          height={'30'}
          icon="copy"
          color="#3A3B3C"
          onClickFunction={() => {
            console.log('copy!')
          }}
        />
        <Control
          width={'30'}
          height={'30'}
          icon="share"
          color="#3A3B3C"
          onClickFunction={() => {
            console.log('share!')
          }}
        />
      </div>
    </div>
  )
}

export default Quote
