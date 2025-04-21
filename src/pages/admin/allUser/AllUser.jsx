import React, { useEffect, useState } from 'react'
import './AllUser.css'
import Sidebar from '../sidebar/Sidebar'
import { deleteUserAPI, getAllUserAPI } from '../../../services/allAPI'

const AllUser = () => {
    const [usersArray, setUsersArray] = useState([])
    const [searchKey, setSearchKey] = useState("")

    useEffect(() => {
        getAllUser()
    }, [searchKey])

    const getAllUser = async () => {
        const token = sessionStorage.getItem("token")

        if (!token) {
            alert("No Token Exists")
        }
        const reqHeader = { "Authorization": `Bearer ${token}` }
        try {
            const result = await getAllUserAPI(searchKey, reqHeader)
            setUsersArray(result?.data)

        } catch (error) {
            console.log(error);

        }
    }
    const handleDelete = async (id) => {
        const token = sessionStorage.getItem("token")

        if (!token) {
            alert("No Token Exists")
        }
        const reqHeader = { "Authorization": `Bearer ${token}` }
        try {
            await deleteUserAPI(id, reqHeader)
            getAllUser()
        } catch (error) {
            console.log(error);

        }
    }

    return (

        <div className='flex-dashboard'>

            <Sidebar />
            <div className="donors-containers">
                <h2 className="title">All Users</h2>

                {/* Search Filters */}
                <div className="search-filters">
                    <div className="form-group">
                        <label>Name:</label>
                        <input value={searchKey} onChange={(e) => setSearchKey( e.target.value )} type="text" placeholder="Enter Name" />
                    </div>
                </div>

                {/* Users List Table */}
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersArray.length > 0 ? (
                                    usersArray?.map((item, i) => (
                                        <tr key={item._id}>
                                            <td>{i + 1} </td>
                                            <td>{item?.username}</td>
                                            <td>{item?.email}</td>
                                            <td className='user-btn'>
                                                <button onClick={() => handleDelete(item?._id)} className='trash-btn'><i className="fa-solid fa-trash"></i></button>
                                            </td>

                                        </tr>

                                    )))
                                    :
                                    (
                                        <tr>
                                            <td colSpan="8" style={{ textAlign: "center" }}>No User found</td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default AllUser