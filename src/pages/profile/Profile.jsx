import React, { useEffect, useState } from 'react'
import './Profile.css'
import {  getProfileAPI } from '../../services/allAPI'
import { useNavigate } from 'react-router-dom'
const Donor = () => {
    const [donorDetails, setDonorDetails] = useState({})

    const navigate = useNavigate()


    useEffect(() => {
        const getDonorProfile = async () => {
            const token = sessionStorage.getItem("token")
            if (!token) return;
            if (token) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                try {
                    const result = await getProfileAPI(reqHeader)
                    if (result.status == 200) {
                        setDonorDetails(result.data)
                    }

                } catch (error) {
                    console.error("Error fetching profile:", error);

                }

            }
        }

        getDonorProfile()
    }, [])

    return (
        <>
            <div className="container">
                <h2 className='title'>Profile</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input value={donorDetails?.name || ""} disabled type="text" id="name" readOnly />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={donorDetails?.email || ""} disabled type="email" id="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input value={donorDetails?.phone || ""} disabled type="number" id="phone" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input value={donorDetails?.age || ""} disabled type="number" id="age" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="weight">Weight (kg)</label>
                            <input value={donorDetails?.weight || ""} disabled type="number" id="weight" />
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="blood-group">Blood Group</label>
                        <input value={donorDetails?.bloodgroup || ""} disabled type="text" id="bloodgroup" />

                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input value={donorDetails?.state || ""} disabled type="text" id="state" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input value={donorDetails?.city || ""} disabled type="text" id="city" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea id="address" rows="3" value={donorDetails?.address || ""} disabled></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="diseases">Any Diseases?</label>
                        <textarea id="diseases" rows="2" value={donorDetails?.diseases || ""} disabled ></textarea>
                    </div>

                    <button onClick={() => navigate("/edit/profile")} className='submit-btn' type="button">Edit Profile</button><br />
                    <button onClick={() => navigate("/")} className='submit-btn' type="button">Back</button>
                </form>

            </div>
        </>
    )
}

export default Donor