import React from 'react'
import { Link } from "react-scroll";
const Navbar = () => {
  return (
   <nav className='navbar'>
      <div className='logo'>
        CodeSoft
      </div>
      <ul className='nav-links'>
        {["Home", "Courses", "Skills", "Projects", "About", "Contact"].map(item => (
          <li key={item}>
            <Link to={item.toLowerCase()} smooth duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
   </nav>
  )
}

export default Navbar
