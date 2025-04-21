import React, { useEffect, useState } from 'react'
import './EditProfile.css'
import { getProfileAPI, updateProfileAPI } from '../../services/allAPI'
import { useNavigate } from 'react-router-dom'
const EditProfile = () => {
    const [donorDetails, setDonorDetails] = useState()
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const navigate = useNavigate()

    useEffect(() => {
        getDonorProfile()
    }, [])

    const getDonorProfile = async () => {
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await getProfileAPI(reqHeader)
                if (result.status == 200) {
                    setDonorDetails(result.data)
                    console.log(result.data);

                }

            } catch (error) {
                console.log(error);

            }

        } else {
            alert("No Token Exists")
        }
    }
    const handleUpdate = async (e) => {
        e.preventDefault()
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await updateProfileAPI(donorDetails, reqHeader)
                if (result.data.modifiedCount !== 0) {
                    navigate('/profile')
                }
            } catch (error) {
                console.log(error);

            }

        } else {
            alert("No Token Exists")
        }
    }
    return (
        <div className="container">
            <h2 className='title'>Profile</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input value={donorDetails?.name || ""} onChange={e => setDonorDetails({ ...donorDetails, name: e.target.value })} type="text" id="name" />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={donorDetails?.email || ""} onChange={e => setDonorDetails({ ...donorDetails, email: e.target.value })} type="email" id="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input value={donorDetails?.phone || ""} onChange={e => setDonorDetails({ ...donorDetails, phone: e.target.value })} type="number" id="phone" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input value={donorDetails?.age || ""} onChange={e => setDonorDetails({ ...donorDetails, age: e.target.value })} type="number" max="65" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="weight">Weight (kg)</label>
                        <input value={donorDetails?.weight || ""} onChange={e => setDonorDetails({ ...donorDetails, weight: e.target.value })} type="number" />
                    </div>
                </div>


                <div className="form-group">
                    <label>Blood Group:</label>
                    <select id="bloodgroup" value={donorDetails?.bloodgroup || ""} onChange={e => setDonorDetails({ ...donorDetails, bloodgroup: e.target.value })}>
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

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input value={donorDetails?.state || ""} onChange={e => setDonorDetails({ ...donorDetails, state: e.target.value })} type="text" id="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input value={donorDetails?.city || ""} onChange={e => setDonorDetails({ ...donorDetails, city: e.target.value })} type="text" id="city" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea id="address" rows="3" value={donorDetails?.address || ""} onChange={e => setDonorDetails({ ...donorDetails, address: e.target.value })} ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="diseases">Any Diseases?</label>
                    <textarea id="diseases" rows="2" value={donorDetails?.diseases || ""} onChange={e => setDonorDetails({ ...donorDetails, diseases: e.target.value })} ></textarea>
                </div>

                <button onClick={handleUpdate} className='submit-btn'>Update</button><br />
                <button onClick={() => navigate("/profile")} className='submit-btn'>Back</button>
            </form>
        </div>

    )
}

export default EditProfile