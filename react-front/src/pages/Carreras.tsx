import { useEffect, useState } from 'react'

interface Carrera {
  nombreCarrera: string
  descripcion: string
  id: number
}

export default function Carreras() {
  const [carreras, setCarreras] = useState<Carrera[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/carreras')
      .then(res => res.json())
      .then(data => {
        console.log("Respuesta recibida", data)
        setCarreras(data.data)
      })
      .catch(err => console.log("Error al obtener carreras", err))
  }, [])
  return (
    <div>
      <h1>Carreras</h1>
      <ul>
        {carreras.map((carrera) => (
          <li key={carrera.id}>{carrera.nombreCarrera}</li>
        ))}
      </ul>
    </div>
  )
}
