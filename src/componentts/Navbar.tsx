import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
        <nav >

        
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
            </ul>
        
            
        </nav>
    </header>
)
}
