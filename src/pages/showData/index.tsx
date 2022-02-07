import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../contexts/Context"

export const ShowData = () => {

  const context = useContext(Context);
  
  console.log(context.name);

  return (
    <>
      <h1>Página Show Data</h1>
      <Link to="/">Voltar para página inicial</Link>
    </>
  )
}