import React from 'react'
import ReactDOM from 'react-dom'

import { NameProvider } from './stores/nameStore'

import Header from './components/Header'
import View from './containers/View'
import View2 from './containers/View2'

function App () {
  return (
    <NameProvider>
      <Header />
      <View />
      <View2 />
    </NameProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
