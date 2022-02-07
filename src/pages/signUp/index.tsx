import { Link } from "react-router-dom"
import { useContext } from "react"

import { ContextProvider } from "../../contexts/Context";
import { Context } from "../../contexts/Context";

export const SignUp = () => { 

  const { name, age } = useContext(Context);

  return (
    <ContextProvider> 
      <h1>Tela de login de { name } que tem { age }</h1>
      <Link to='/show'> Ir para Show Data </Link>
    </ContextProvider>
  )
}