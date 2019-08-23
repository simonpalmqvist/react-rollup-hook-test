import React, { useContext } from 'react'

import { ItemContext } from '../stores/itemStore'

function Header () {
  const { item } = useContext(ItemContext)
  console.log('Header re-rendering')
  return <h1>{item || 'Pick an item'}</h1>
}

export default Header
