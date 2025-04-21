import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './component.css'
import { registerAPI } from '../services/allAPI'

const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: "", email: "", password: ""
    })
    
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault()
        if (registerData.username && registerData.email && registerData.password) {
            try {
                const result = await registerAPI(registerData)
                console.log(result);
                if (result.status == 200) {
                    navigate('/login')
                    setRegisterData({username: "", email:"", password: ""})
                }else{
                    if(result.response.status==406){
                        alert(result.response.data)
                    }
                }

            } catch (error) {
                console.log(error);

            }

        } else {
            alert("All fields are required")
        }

    }
    return (
        <div className='main'>
            <div className="auth-container">
                <h2>Register User</h2>
                <form>
                    <div>
                        <label >Username</label>
                        <input value={registerData.username} onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })} type="text" id="username" placeholder="Enter your username" required />

                    </div>
                    <div>
                        <label >Email</label>
                        <input value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} type="email" id="email" placeholder="Enter your email" required />

                    </div>
                    <div>
                        <label >Password</label>
                        <input value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} type="password" id="password" placeholder="Enter your password" required />

                    </div>
                    <button onClick={handleRegister} type="submit">Register</button>

                    <div className='my-5'>
                        <p>Already A user? Please click here to <Link to={'/login'}>Login</Link></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register