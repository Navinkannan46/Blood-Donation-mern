import React, { useEffect, useState } from 'react'
import './DonorRequest.css'
import Sidebar from '../sidebar/Sidebar'
import { allUserDonorAPI, requestStatusAPI } from '../../../services/allAPI'
const DonorRequest = () => {
    const [donorsArray, setDonorsArray] = useState([])
    const [searchKey, setSearchKey] = useState({
        state: "", city: "", bloodgroup: ""
    })

    console.log(donorsArray.length);


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
                const result = await allUserDonorAPI(searchKey, reqHeader)
                if (result.status == 200) {
                    setDonorsArray(result.data)
                }
                console.log(result);

            } catch (error) {
                console.log(error);

            }
        } else {
            console.log("No Token Exists");

        }

    }

    const handleButtons = async (id, status) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await requestStatusAPI(id, status, reqHeader)
                if (result.status == 200) {
                    getAlldonors()
                }

            } catch (error) {
                console.log(error);

            }
        } else {
            console.log("No Token Exists");

        }


    }

    return (

        <div className='flex-request2'>

            <Sidebar />
            <div className="donors-request">
                <h2 className="title">All Blood Donors Request</h2>

                {/* Search Filters */}
                <div className="search-filters-request">
                    <div className="form-group">
                        <label>State:</label>
                        <input value={searchKey.state} onChange={(e) => setSearchKey({ ...searchKey, state: e.target.value })} type="text" placeholder="Enter State" />
                    </div>

                    <div className="form-group">
                        <label>City:</label>
                        <input type="text" value={searchKey.city} onChange={(e) => setSearchKey({ ...searchKey, city: e.target.value })} placeholder="Enter city" />
                    </div>

                    <div className="form-group">
                        <label>Blood Group:</label>
                        <select value={searchKey.bloodgroup} onChange={(e) => setSearchKey({ ...searchKey, bloodgroup: e.target.value })}>
                            <option value="" hidden>Blood</option>
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

                </div>

                {/* Donors List Table */}
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
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
                                donorsArray.length > 0 ? (
                                    donorsArray?.map((donor) => (

                                        <tr key={donor?._id} className='request'>
                                            <td>{donor?.name}</td>
                                            <td>{donor?.email}</td>
                                            <td>{donor?.phone}</td>
                                            <td>{donor?.bloodgroup}</td>
                                            <td>{donor?.state}</td>
                                            <td>{donor?.city}</td>
                                            <td>{donor?.address}</td>
                                            <td className='request-btn'>
                                                {donor?.status === "Pending" ? (
                                                    <>
                                                        <button onClick={() => handleButtons(donor?._id, "Approved")} className='check-btn'><i className="fa-solid fa-check"></i></button>
                                                        <button onClick={() => handleButtons(donor?._id, "Rejected")} className='xmark-btn'><i className="fa-solid fa-xmark"></i></button>

                                                    </>
                                                ) : donor?.status === "Approved" ? (
                                                    <button className='check-btn'>Approved</button>
                                                ) : (
                                                    <button className='xmark-btn'>Rejected</button>
                                                )}
                                            </td>
                                        </tr>
                                    )))
                                    :

                                    (
                                        <tr>
                                            <td colSpan="8" style={{ textAlign: "center" }}>No Request found</td>
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

export default DonorRequest


