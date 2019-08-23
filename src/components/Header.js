import React, { useContext } from 'react'

import { NameContext } from '../stores/nameStore'

function Header () {
  const { name } = useContext(NameContext)
  console.log('Header re-rendering')
  return <h1>{name}</h1>
}

export default Header
