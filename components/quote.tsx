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
      <p className="my-4">- {author}</p>
      <div className="font-bold italic">Share</div>
    </div>
  )
}

export default Quote
