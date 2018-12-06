import React from 'react'
import { css as emoCSS } from 'emotion'
const css = (...args) => ({ className: emoCSS(...args) })

const Button = props => {
  const text = props.text

  return (
    <button
      onClick={props.buttonHandler}
      {...css({
        height: '40px',
        display: 'block',
        backgroundColor: 'var(--yellow)',
        borderRadius: '5px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.6rem',
        letterSpacing: '1px',
        margin: '0 20px',
        transform: 'translateY(50%)',
        cursor: 'pointer',

        '@media (min-width: 700px)': {
          position: 'static',
          display: 'inline',
          padding: '10px',
          margin: '0',
        },
      })}
    >
      {text}
    </button>
  )
}

export default Button
