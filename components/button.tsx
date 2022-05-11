import Icon from './icon'
import React from 'react'

const Button = ({
  iconName,
  iconColor,
  width,
  height,
  onClick,
}: {
  width: string
  height: string
  onClick: any
  iconName: string
  iconColor?: string
}) => (
  <button
    className="rounded-full transition duration-500 ease-in inline-block p-1 my-0 mx-10 border-0 bg-transparent"
    onClick={onClick}
  >
    <Icon
      name={iconName}
      width={width}
      height={height}
      color={iconColor || 'black'}
    />
  </button>
)

export default Button
