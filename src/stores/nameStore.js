import { useState } from 'react'

import { createStore } from '../ooh'

export const [NameContext, NameProvider] = createStore(() => {
  const [name, setName] = useState('Simon')
  return { name, setName, quote: 'Hehehe' }
})
