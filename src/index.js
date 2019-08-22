import React, { useState, useContext, useMemo } from 'react'
import ReactDOM from 'react-dom'

function createStore (updateValue) {
  const Context = React.createContext({})

  return [
    Context,
    ({ children }) => (
      <Context.Provider value={updateValue()}>{children}</Context.Provider>
    )
  ]
}

const withContext = (Context, values) => Component => props => {
  const state = useContext(Context)

  const newProps = {}

  values.forEach(value => {
    newProps[value] = state[value]
  })

  return useMemo(
    () => <Component {...props} {...newProps} />,
    Object.values(newProps)
  )
}

const [NameContext, NameProvider] = createStore(() => {
  const [name, setName] = useState('Simon')
  return { name, setName, quote: 'Hehehe' }
})

function Header () {
  const { name } = useContext(NameContext)
  console.log('Header re-rendering')
  return <h1>{name}</h1>
}

function View ({ name, setName }) {
  console.log('View re-rendering')
  return <input value={name} onChange={evt => setName(evt.target.value)} />
}

const ViewContainer = withContext(NameContext, ['name', 'setName'])(View)

const View2 = ({ quote }) => {
  console.log('View2 re-rendering')
  return <p>{quote}</p>
}

const View2Container = withContext(NameContext, ['quote'])(View2)

function App () {
  return (
    <NameProvider>
      <Header />
      <ViewContainer />
      <View2Container />
    </NameProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
