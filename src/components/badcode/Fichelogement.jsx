import { useParams } from "react-router-dom"
import LogementSolution from "../LogementSolution"


export default function Fichelogement({ image, title, location, hostname, hostpicture, theme, description, equipement }) {
  const { id } = useParams()
  return (
    <>

      <h1>Article {id}</h1>
      <LogementSolution />
    </>
  )
}