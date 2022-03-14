import React from 'react'
import ReactMarkdown from 'react-markdown'

const Quote = ({ quoteData }) => {
  const { quote, author } = quoteData

  return (
    <div className="bg-white text-center text-base p-8 m-4 md:w-5/12 md:mx-auto rounded-md quote-modal leading-8">
      <ReactMarkdown>{`"${quote}"`}</ReactMarkdown>
      <br />
      <hr />
      <p className="my-4">- {author}</p>
    </div>
  )
}

export default Quote