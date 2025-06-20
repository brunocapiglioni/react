import "./contenedor.css"
import { useState } from 'react'
import { Button } from "../button/Button";

const endpoints = {
  carreras: 'http://localhost:3000/api/carreras',
}

export const Contenedor = () => {
 
  const [respuesta, setRespuesta] = useState('')

  const llamarAPI = async (ruta: string) => {
    try {
      const res = await fetch(ruta)
      const data = await res.json()
      setRespuesta(JSON.stringify(data) /*|| 'Respuesta genérica'*/)
    } catch (error) {
      setRespuesta('Error al conectarse con el servidor')
    }
  }
  
  return (
        <div className="contenedor">
          <Button id = "b1" label="Cuenta" onClick={() => llamarAPI(endpoints.carreras)}></Button>
          <Button id = "b2" label="Carreras" onClick={() => llamarAPI(endpoints.carreras)}></Button>
          <Button id = "b3" label="Materias" onClick={() => llamarAPI(endpoints.carreras)}></Button>
          <Button id = "b4" label="Grupos" onClick={() => llamarAPI(endpoints.carreras)}></Button>
          <Button id = "b5" label="Organización" onClick={() => llamarAPI(endpoints.carreras)}></Button>
          <Button id = "b6" label="Consultas" onClick={() => llamarAPI(endpoints.carreras)}></Button>
       
          {respuesta && <p>{respuesta}</p>}
        </div>
    )
}