import React, {
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect
} from 'react'

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

export const useAsync = (
  stuff,
  { callOnMount = false } = { callOnMount: false }
) => {
  const [isDoingStuff, setIsDoingStuff] = useState(callOnMount)
  const doStuff = useCallback(() => setIsDoingStuff(true), [])

  useEffect(
    () => {
      if (isDoingStuff) {
        const doAsync = async () => {
          await stuff()
          setIsDoingStuff(false)
        }
        doAsync()
      }
    },
    [isDoingStuff]
  )

  return [isDoingStuff, doStuff]
}
