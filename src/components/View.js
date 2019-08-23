import React from 'react'

function View ({ list, pickItem, addItem }) {
  console.log('View re-rendering')
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <a onClick={event => event.preventDefault() || pickItem(index)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <input
        placeholder='Add item'
        onKeyPress={event =>
          event.key === 'Enter' &&
          event.target.value &&
          addItem(event.target.value)
        }
      />
    </div>
  )
}

export default View
