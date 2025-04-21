import React, { useEffect, useState } from 'react'
import './AllDonors.css'
import { useNavigate } from 'react-router-dom'
import { allUserDonorAPI } from '../../services/allAPI'
const AllDonors = () => {
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
                const result = await allUserDonorAPI(searchKey, reqHeader)
                setDonorsArray(result.data)
                console.log(result);

            } catch (error) {
                console.log(error);

            }
        }

    }
    return (

        <div className='container1'>
            <div className="donors-container">
                <h2 className="title">Find Blood Donors</h2>

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
                        <select value={searchKey.bloodgroup} onChange={(e) => setSearchKey({ ...searchKey, bloodgroup: e.target.value })}>
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

                    {/* <button className="search-btn">Search</button> */}
                    <button onClick={() => navigate('/')} className="search-btn">Go Back</button>
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
                                <th>Diseases</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                donorsArray?.map(donor => (
                                    <tr key={donor?._id} >
                                        <td>{donor?.name}</td>
                                        <td>{donor?.email}</td>
                                        <td>*****</td>
                                        <td>{donor?.bloodgroup}</td>
                                        <td>{donor?.state}</td>
                                        <td>{donor?.city}</td>
                                        <td>*****</td>
                                        <td>{donor?.diseases}</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >

    )
}

export default AllDonors