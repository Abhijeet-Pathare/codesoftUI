import React from 'react'
import { Link } from "react-scroll";
import './css/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <a href="#home" className="logo">Codesoft UI</a>
      <ul className="nav-links">
        <li><a href="#courses">Courses</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
