import React, { useState } from 'react'

function Input ({ onPress, placeholder }) {
  console.log('Input re-rendering')
  const [text, setText] = useState('')

  return (
    <input
      placeholder={placeholder}
      value={text}
      onChange={event => setText(event.target.value)}
      onKeyPress={event => {
        if (event.key === 'Enter' && !!text) {
          onPress(text)
          setText('')
        }
      }}
    />
  )
}

export default React.memo(Input)
