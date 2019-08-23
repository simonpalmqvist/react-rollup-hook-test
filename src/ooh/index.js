import React, { useContext, useMemo } from 'react'

export function createStore (updateValue) {
  const Context = React.createContext({})

  return [
    Context,
    ({ children }) => (
      <Context.Provider value={updateValue()}>{children}</Context.Provider>
    )
  ]
}

export const withContext = (Context, stateToProps) => Component => props => {
  const state = useContext(Context)
  const newProps = stateToProps(state)

  return useMemo(
    () => <Component {...props} {...newProps} />,
    Object.values(newProps)
  )
}
