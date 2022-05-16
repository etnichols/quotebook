import React, { useState } from 'react'

import Button from './button'
import ReactMarkdown from 'react-markdown'
import { isMobile } from 'react-device-detect'
import toast from 'react-hot-toast'

const Quote = ({
  quoteData,
}: {
  quoteData: { text: string; author: string }
}) => {
  const [starred, setStarred] = useState(false)
  const { text, author } = quoteData
  return (
    <div className="bg-white text-center text-base p-8 m-4 md:w-5/12 md:mx-auto rounded-md quote-modal leading-8 drop-shadow-md">
      <div className="mb-4">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <hr />
      <p className="mt-4 mb-8">- {author}</p>
      <div className="flex flex-row justify-around">
        <Button
          width={'30'}
          height={'30'}
          iconName="copy"
          iconColor="#3A3B3C"
          onClick={() => {
            navigator.clipboard
              .writeText(
                `Check out this quote on quotebook.xyz: ${window.location.href}`
              )
              .then(
                () => void toast.success('Link copied to clipboard'),
                () => void toast.success('Could not copy :(')
              )
          }}
        />
        <Button
          width={'30'}
          height={'30'}
          iconName={`${starred ? 'star-filled' : 'star-outline'}`}
          iconColor="#3A3B3C"
          onClick={() => {
            setStarred(!starred)
          }}
        />
        {isMobile && (
          <Button
            width={'30'}
            height={'30'}
            iconName="share"
            iconColor="#3A3B3C"
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    title: document.title,
                    text: `Check out this quote on quotebook.xyz:`,
                    url: window.location.href,
                  })
                  .then(() => console.log('Successful share! 🎉'))
                  .catch((err) => console.error(err))
              }
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Quote
