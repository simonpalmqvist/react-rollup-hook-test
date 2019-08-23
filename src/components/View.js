import React from 'react'

function View ({ name, setName }) {
  console.log('View re-rendering')
  return <input value={name} onChange={evt => setName(evt.target.value)} />
}
export default View
