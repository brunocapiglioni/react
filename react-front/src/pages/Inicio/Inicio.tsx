import "./Inicio.css"
import { useNavigate } from 'react-router-dom'
import { Button } from "../../components/button/Button"


export default function Inicio() {
 
  const navigate = useNavigate()
  
  return (
        <div className="contenedor">
          <Button id = "b1" label="Cuenta" onClick={() => navigate('/cuenta')}></Button>
          <Button id = "b2" label="Carreras" onClick={() => navigate('/carreras')}></Button>
          <Button id = "b3" label="Materias" onClick={() => navigate('/materias')}></Button>
          <Button id = "b4" label="Grupos" onClick={() => navigate('/grupos')}></Button>
          <Button id = "b5" label="Organización" onClick={() => navigate('/org')}></Button>
          <Button id = "b6" label="Consultas" onClick={() => navigate('/consultas')}></Button>       
        </div>
    )
}