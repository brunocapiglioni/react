import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navBar/NavBar.tsx'
import Inicio from './pages/Inicio/Inicio.tsx'
import Carreras from './pages/Carreras.tsx'

function App() {

  return (
    <Router>        
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/carreras" element={<Carreras/>}/>
      </Routes>
    </Router>
  )
}

export default App
