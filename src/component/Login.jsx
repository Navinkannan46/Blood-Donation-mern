import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './component.css'
import { loginAPI } from '../services/allAPI'

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "", password: ""
    })

    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()


        if (loginData.email && loginData.password) {
            try {
                const result = await loginAPI(loginData)
                if (result.status == 200) {
                    sessionStorage.setItem("user", JSON.stringify(result.data.user))
                    sessionStorage.setItem("token", result.data.token)
                    if (result.data.user.role == "User") {
                        setLoginData({ email: "", password: "" })
                        navigate("/")
                    } else {
                        navigate('/admin/dashboard')
                        setLoginData({ email: "", password: "" })

                    }

                } else {
                    if (result.response.status == 406) {
                        alert(result.response.data)
                        setLoginData({ email: "", password: "" })

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
                <h2>Login </h2>
                <form>

                    <label>Email</label>
                    <input type="email" value={loginData.email} id="email" onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} placeholder="Enter your email" required />

                    <label>Password</label>
                    <input type="password" value={loginData.password} id="password" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} placeholder="Enter your password" required />

                    <button onClick={handleLogin} type="submit">Login</button>
                    <div>
                        <p>Already A user? Please click here to <Link to={'/register'}>register</Link></p>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login