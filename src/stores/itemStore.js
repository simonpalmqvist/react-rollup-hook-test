import { useState, useCallback } from 'react'

import { createStore } from '../ooh'

export const [ItemContext, ItemProvider] = createStore(() => {
  const [list, setList] = useState(['test', 'test2'])
  const [itemId, pickItem] = useState()
  const addItem = useCallback(item => setList([...list, item]), [list])

  return { list, addItem, pickItem, item: list[itemId] }
})
