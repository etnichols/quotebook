import React from 'react'

const Icon = ({
  name,
  color,
  width,
  height,
}: {
  name: string
  color: string
  width: string
  height: string
}) => {
  const renderGraphic = () => {
    switch (name) {
      case 'arrow-back':
        return (
          <>
            <path
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.25 6.75L4.75 12L10.25 17.25"
            ></path>
            <path
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.25 12H5"
            ></path>
          </>
        )
      case 'arrow-forward':
        return (
          <>
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13.75 6.75L19.25 12L13.75 17.25"
            ></path>
            <path
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 12H4.75"
            ></path>
          </>
        )
      case 'copy':
        return (
          <>
            <path
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"
            ></path>
            <rect
              width="10.5"
              height="10.5"
              x="8.75"
              y="8.75"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              rx="2"
            ></rect>
          </>
        )
      case 'share':
        return (
          <>
            <path
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V14.75"
            ></path>
            <path
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.25 9.25V4.75H14.75"
            ></path>
            <path
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 5L11.75 12.25"
            ></path>
          </>
        )
      case 'star-outline':
        return (
          <>
            <path
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
            ></path>
          </>
        )
      case 'star-filled':
        return (
          <>
            <path
              stroke={color}
              fill={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
            ></path>
          </>
        )
    }
  }

  return (
    <svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      {renderGraphic()}
    </svg>
  )
}

export default Icon
