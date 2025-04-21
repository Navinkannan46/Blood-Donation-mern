import React, { useEffect, useState } from 'react'
import './Seeker.css'
import Sidebar from '../sidebar/Sidebar'
import { deleteSeekerAPI, getAllSeekerAPI } from '../../../services/allAPI'
const Seeker = () => {
  const [donorsArray, setDonorsArray] = useState([])
  const [searchKey, setSearchKey] = useState({
    state: "", city: "", bloodgroup: ""
  })
  useEffect(() => {
    getAllSeekers()
  }, [searchKey])


  const getAllSeekers = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllSeekerAPI(searchKey, reqHeader)
        setDonorsArray(result.data)
        console.log(result);


      } catch (error) {
        console.log(error);

      }
    } else {
      alert("No Token Exists")
    }

  }
  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token")

    if (!token) {
      alert("No Token Exists")
    }
    const reqHeader = { "Authorization": `Bearer ${token}` }
    try {
      await deleteSeekerAPI(id, reqHeader)
      getAllSeekers()
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className='flex-dashboard'>

      <Sidebar />
      <div className="donors-containers">
        <h2 className="title">All Seekers</h2>

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

          <button className="search-btn">Search</button>
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
                donorsArray.length > 0 ? (
                  donorsArray?.map((donor, i) => (
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
                        <button onClick={() => handleDelete(donor?._id)} className='trash-btn'><i className="fa-solid fa-trash"></i></button>
                      </td>
                    </tr>
                  )))
                  :
                  (
                    <tr>
                      <td colSpan="8" style={{ textAlign: "center" }}>No Seeker found</td>
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

export default Seeker