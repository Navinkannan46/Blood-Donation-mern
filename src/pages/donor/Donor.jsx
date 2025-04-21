import React, { useState } from 'react'
import './Donor.css'
import { useNavigate } from 'react-router-dom'
import { donorRegisterAPI, seekerRegisterAPI } from '../../services/allAPI'
const Donor = ({ seeker }) => {
    const [registerData, setRegisterData] = useState({
        name: "", email: "", phone: "", age: "", weight: "", gender: "", bloodgroup: "", state: "", city: "", address: "", diseases: ""
    })
    const navigate = useNavigate()
    const handleDonorRegisterSubmit = async (e) => {
        e.preventDefault()
        if (registerData.name && registerData.email && registerData.phone && registerData.age && registerData.weight && registerData.gender && registerData.bloodgroup && registerData.state && registerData.city && registerData.address && registerData.diseases) {
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                try {
                    const result = await donorRegisterAPI(registerData, reqHeader)
                    if (result.status == 200) {
                        alert("success")
                        navigate('/')
                        setRegisterData({ name: "", email: "", phone: "", age: "", weight: "", gender: "", bloodgroup: "", state: "", city: "", address: "", diseases: "" })
                    } else {
                        if (result.response.status == 406) {
                            alert(result.response.data)
                            setRegisterData({ name: "", email: "", phone: "", age: "", weight: "", gender: "", bloodgroup: "", state: "", city: "", address: "", diseases: "" })
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                alert("No Token Exists")
            }
        } else {
            alert("All Fields are required")
        }
    }
    const handleSeekerRegisterSubmit = async (e) => {
        e.preventDefault()
        if (registerData.name && registerData.email && registerData.phone && registerData.age && registerData.weight && registerData.gender && registerData.bloodgroup && registerData.state && registerData.city && registerData.address && registerData.diseases) {
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                try {
                    const result = await seekerRegisterAPI(registerData, reqHeader)
                    if (result.status == 200) {
                        alert("success")
                        navigate('/')
                        setRegisterData({ name: "", email: "", phone: "", age: "", weight: "", gender: "", bloodgroup: "", state: "", city: "", address: "", diseases: "" })
                    } else {
                        if (result.response.status == 406) {
                            alert(result.response.data)
                            setRegisterData({ name: "", email: "", phone: "", age: "", weight: "", gender: "", bloodgroup: "", state: "", city: "", address: "", diseases: "" })
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                alert("No Token Exists")
            }
        } else {
            alert("All Fields are required")
        }


    }
    return (
        <>
            <div className="container">
                <h2 className='title'>{seeker ? "Registration" : "Blood Donation Registration"} </h2>
                <form >
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" value={registerData.name} onChange={e => setRegisterData({ ...registerData, name: e.target.value })} id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={registerData.email} onChange={e => setRegisterData({ ...registerData, email: e.target.value })} id="email" placeholder="Enter your email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="number" value={registerData.phone} onChange={e => setRegisterData({ ...registerData, phone: e.target.value })} id="phone" placeholder="Enter your phone number" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" value={registerData.age} onChange={e => setRegisterData({ ...registerData, age: e.target.value })} id="age" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="weight">Weight (kg)</label>
                            <input type="number" value={registerData.weight} onChange={e => setRegisterData({ ...registerData, weight: e.target.value })} id="weight" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select value={registerData.gender} onChange={e => setRegisterData({ ...registerData, gender: e.target.value })} id="gender" required>
                                <option value="" hidden >Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="blood-group">Blood Group</label>
                            <select value={registerData.bloodgroup} onChange={e => setRegisterData({ ...registerData, bloodgroup: e.target.value })} id="blood-group" required>
                                <option value="" hidden>Select</option>
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

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input type="text" value={registerData.state} onChange={e => setRegisterData({ ...registerData, state: e.target.value })} id="state" placeholder="Enter your state" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" value={registerData.city} onChange={e => setRegisterData({ ...registerData, city: e.target.value })} id="city" placeholder="Enter your city" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea value={registerData.address} onChange={e => setRegisterData({ ...registerData, address: e.target.value })} id="address" rows="3" placeholder="Enter your address" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="diseases">Any Diseases?</label>
                        <textarea value={registerData.diseases} onChange={e => setRegisterData({ ...registerData, diseases: e.target.value })} id="diseases" rows="2" placeholder="Mention any medical conditions" required></textarea>
                    </div>
                    {
                        seeker ?
                            <>
                                <button className='submit-btn' type='submit' onClick={handleSeekerRegisterSubmit}>Register </button><br />
                            </>
                            : <>
                                <button className='submit-btn' type='submit' onClick={handleDonorRegisterSubmit}>Register </button><br />
                            </>
                    }
                    <button className='submit-btn' type='button' onClick={() => navigate('/')}>Back </button>
                </form>
            </div >
        </>
    )
}

export default Donor