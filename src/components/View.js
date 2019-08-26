import React from 'react'

import Input from './Input'

function View ({ list, pickItem, addItem, isFetchingList }) {
  console.log('View re-rendering')
  return (
    <div>
      {isFetchingList ? (
        <p>Loading</p>
      ) : (
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <a onClick={event => event.preventDefault() || pickItem(index)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
      <Input placeholder='Add item' onPress={addItem} />
    </div>
  )
}

export default View
