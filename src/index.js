import React from 'react'
import ReactDOM from 'react-dom'

import { NameProvider } from './stores/nameStore'
import { ItemProvider } from './stores/itemStore'

import Header from './containers/Header'
import View from './containers/View'
import View2 from './containers/View2'

function App () {
  return (
    <NameProvider>
      <ItemProvider>
        <Header />
        <View />
        <View2 />
      </ItemProvider>
    </NameProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
