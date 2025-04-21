import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false)

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])
  

  const handleLogout = () => {
    sessionStorage.clear()
    setIsLogin(false)
  }
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h2>BLOOD CENTER</h2>
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          {
            isLogin ?
              <Link to={'/allDonor'}>FIND DONOR</Link>
              :
              <Link to={''}>FIND DONOR</Link>
          }

          <a href="#footer">CONTACTS</a>
          {
            isLogin ?
              <div className="dropdown">
                <button onClick={() => setDropdownMenu(!dropdownMenu)} className="dropbtn" >ACCOUNT <i className="fa-solid fa-angle-down"></i></button>
                <div className={`dropdown-content ${dropdownMenu ? "menus" : ""}`} >
                  <Link className='link' to={'/profile'}>PROFILE</Link>
                  <button onClick={handleLogout} className='logout'>LOGOUT</button>

                </div>
              </div>
              :
              <div className="dropdown">
                <button onClick={() => setDropdownMenu(!dropdownMenu)} className="dropbtn" >ACCOUNT <i className="fa-solid fa-angle-down"></i></button>
                <div className={`dropdown-content ${dropdownMenu ? "menus" : ""}`} >
                  <Link className='link' to={'/register'}>Register</Link>
                  <Link className='link' to={'/login'}> Login</Link>
                </div>
              </div>
          }
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
    </div>
  )
}

export default Navbar