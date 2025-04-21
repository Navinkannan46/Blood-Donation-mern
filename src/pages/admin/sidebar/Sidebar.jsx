import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
const Sidebar = () => {

    return (
        <div className='sidebar ' id='sidebar'>
            <h2>Admin Dashboard</h2>

            <div className='sidebar-links'>
                <div >
                    <Link className='sidebar-link' to={'/admin/dashboard'}>
                        <p>Dashbaord</p>
                    </Link>
                </div>
                <div>
                    <Link className='sidebar-link' to={'/admin/request'}>
                        <p>Requests</p>
                    </Link>
                </div>

                <div>
                    <Link className='sidebar-link' to={'/admin/donors'}>
                        <p>Donors</p>
                    </Link>
                </div>
                <div>
                    <Link className='sidebar-link' to={'/admin/seeker'}>
                        <p>Seeker</p>
                    </Link>
                </div>
                <div>
                    <Link className='sidebar-link' to={'/admin/users'}>
                        <p>Users</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Sidebar