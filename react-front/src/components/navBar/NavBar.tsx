import './navBar.css'
import React, { useState } from "react"
//import { BurguerButton } from '../burguerButton/BurguerButton.tsx'

export const NavBar = () => {

  const [ispen, setIspen] = useState(false)
  const toggleMenu = () => {
    setIspen(!ispen)
  }

  return (
    <>
      <nav>
        <div className="links-container">
          <div className={`nav-links ${ispen ? 'active' : ''}`}>
            <a href="home-link">Home</a>
            <a href="#">Buscar</a>
            <a href="#">Iniciar</a>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${ispen ? 'change' : ""}`}></div>
            <div className={`bar ${ispen ? 'change' : ""}`}></div>
            <div className={`bar ${ispen ? 'change' : ""}`}></div>
          </div>
        </div>
      </nav>
    </>
  )
}


/*
<nav>
<input type="checkbox" id="sidebar-active">
<label for="sidebar-active" class="open-sidebar-button">
  <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
</label>

<label id="overlay" for="sidebar-active"></label>
<div class="links-container">
  <label for="sidebar-active" class="close-sidebar-button">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
  </label>

  <a href="home-link">Home</a>
  <a href="#">Buscar</a>
  <a href="#">Iniciar</a>
</div>
</nav>
*/