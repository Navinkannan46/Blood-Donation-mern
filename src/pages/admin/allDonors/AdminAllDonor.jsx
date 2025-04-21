import React, { useEffect, useState } from 'react'
import './AdminAllDonor.css'
import Sidebar from '../sidebar/Sidebar'
import { approveDonorAPI, deleteDonorAPI } from '../../../services/allAPI'
import { useNavigate } from 'react-router-dom'

const AdminAllDonor = () => {
    const [donorsArray, setDonorsArray] = useState([])
    const [searchKey, setSearchKey] = useState({
        state: "", city: "", bloodgroup: ""
    })
    const navigate = useNavigate()
    useEffect(() => {
        getAlldonors()
    }, [searchKey])

    const getAlldonors = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await approveDonorAPI(searchKey, reqHeader)
                setDonorsArray(result.data)

            } catch (error) {
                console.log(error);

            }
        } else {
            alert("No Token Exists")
        }

    }

    const handleDelete = async (id) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                await deleteDonorAPI(id, reqHeader)
                getAlldonors()

            } catch (error) {
                console.log(error);

            }
        } else {
            alert("No Token Exists")
        }

    }
    return (
        <div className='flex-dashboard'>

            <Sidebar />

            <div className="donors-containers">
                <h2 className="title">All Blood Donors</h2>

                {/* Search Filters */}
                <div className="search-filters">
                    <div className="form-group">
                        <label>State:</label>
                        <input value={searchKey.state} onChange={(e) => setSearchKey({ ...searchKey, state: e.target.value })} type="text" placeholder="Enter State" />
                    </div>

                    <div className="form-group">
                        <label>City:</label>
                        <input value={searchKey.city} onChange={(e) => setSearchKey({ ...searchKey, city: e.target.value })} type="text" placeholder="Enter city" />
                    </div>

                    <div className="form-group">
                        <label>Blood Group:</label>
                        <select value={searchKey.bloodgroup} onChange={(e) => setSearchKey({ ...searchKey, bloodgroup: e.target.value })} >
                            <option value="" hidden>Select Blood Group</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="O">O</option>
                            <option value="O-">O-</option>
                            <option value="AB">AB</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                    <button onClick={() => navigate("/admin/add-user")} className='add-user'>Add</button>
                </div>

                {/* Donors List Table */}
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Blood Group</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                donorsArray.length > 0 ?
                                    (donorsArray?.map((donor, i) => (
                                        <tr key={donor._id}>
                                            <td>{i + 1}</td>
                                            <td>{donor?.name}</td>
                                            <td>{donor?.email}</td>
                                            <td>{donor?.phone}</td>
                                            <td>{donor?.bloodgroup}</td>
                                            <td>{donor?.state}</td>
                                            <td>{donor?.city}</td>
                                            <td>{donor?.address}</td>
                                            <td className='donor-btn'>
                                                <button onClick={() => navigate(`/edit-datas/${donor?._id}`)} className='eit-btn'><i className="fa-solid fa-pen-to-square"></i></button>
                                                <button onClick={() => handleDelete(donor?._id)} className='trash-btn'><i className="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )))
                                    : (
                                        <tr>
                                            <td colSpan="8" style={{ textAlign: "center" }}>No donors found</td>
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

export default AdminAllDonor