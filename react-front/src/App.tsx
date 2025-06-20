import { useEffect, useState } from 'react'
import './App.css'
import { Contenedor, NavBar } from './components'

function App() {
/*
  const[mensaje, setMensaje] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
  }, [])
*/
  return (
    <>
      <header>
        <NavBar>
        </NavBar>
      </header>
      <main>
        <Contenedor>
        </Contenedor>
      </main>
    </>
  )
}

export default App
