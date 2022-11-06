import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Aboutme from './Aboutme'



import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#FF8C00' }} />)
                        : (<FaBars size={30} style={{ color: '#FF8C00' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>HOME</a>
                    </li>
                    <li className='nav-item'>
                        <a href='Aboutme' onClick={closeMenu}>ABOUT/PAGES</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

