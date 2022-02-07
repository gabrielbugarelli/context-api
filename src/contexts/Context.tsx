import { createContext } from 'react';

type ContextType = {
  name: string
  age: number
}

const initialState = {
  name: 'Gabriel',
  age: 21
}

//Cria o contexto
export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC = ({ children }) => {
  return (
    <Context.Provider value={initialState}>
      {children}
    </Context.Provider>
  )
}