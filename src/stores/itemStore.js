import { useState, useCallback } from 'react'

import { createStore, useAsync } from '../ooh'

const asyncTimeout = time =>
  new Promise(resolve => setTimeout(() => resolve(), time))

export const [ItemContext, ItemProvider] = createStore(() => {
  const [list, setList] = useState([])

  const [itemId, pickItem] = useState()

  const addItem = useCallback(item => setList([...list, item]), [list])

  const [isFetchingList] = useAsync(
    async () => {
      await asyncTimeout(3000)
      setList(['test', 'test1'])
    },
    { callOnMount: true }
  )

  return { list, addItem, pickItem, item: list[itemId], isFetchingList }
})
