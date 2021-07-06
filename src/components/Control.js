import React from 'react';

const Control = ({icon, width, height, onClickFunction}) => {
  const renderGraphic = () => {
    switch(icon){
      case 'arrow-back':
        return (
          <g><path d="M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z"></path></g>
        )
      case 'arrow-forward':
        return (
          <g><path d="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z"></path></g>
        )
    }
  }

  return (
    <button className="rounded-full transition duration-500 ease-in inline-block p-1 my-0 mx-10 border-0 bg-transparent" onClick={onClickFunction}>
      <svg
        className="inline-control"
        style={{fill: '#FFF'}}
        width={width}
        height={height}
        viewBox="0 0 24 24">
        {renderGraphic()}
      </svg>
    </button>
  )
}

export default Control
