import React from 'react'
import './AdminNavbar.css'
import { useNavigate } from 'react-router-dom'
const AdminNavbar = ({ isOpen, setIsOpen }) => {
    const navigate=useNavigate()
    const handleLogout = () => {
        sessionStorage.clear()
     navigate("/")
      }
    return (
        <div className='nav-request'>
            <button className='menu' onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-bars"></i></button>
            <h2 className='admin-h2'>BLOOD CENTER</h2>
            <button onClick={handleLogout} className='admin-logout'>LOGOUT</button>
        </div>
    )
}

export default AdminNavbar