import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='nav container'>
            <div className='logo'>
                <div className='logo-title'>
                    The<span>Cocktail</span>DB 
                </div>
            </div>
            <ul className='nav_list'>
                <li> 
                    <Link to="/" className='listContent'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='listContent'>About</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar