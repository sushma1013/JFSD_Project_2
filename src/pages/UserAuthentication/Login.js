import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent form submission

        const credentials = {
            username: username,
            password: password
        };

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', credentials);
            console.log(response.data); 
            const token = response.data;
                alert('Login Successful')
                setUsername('')
                setPassword('')
                navigate('/home')
                window.location.reload()
                localStorage.setItem('token',token)
            
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            alert("Invalid user")
        }
    };

    return (
        


<div className="signup-page  pt-3 " >
<div className="container">
  <div className="row">
      <div className="col-12  d-flex flex-row justify-content-center  mt-3  ">
        
        <div className="signup-container shadow-lg ">
            <h1 className="sign-up-heading fade-in">Welcome</h1>
            <p className="sign-up-dis fade-in">Sign in with your valuable details </p>
            <form onSubmit={handleLogin}  className="mt-4">
              
              <div className="mb-1 mt-2">
                <label className="sign-up-label fade-in" >Username</label>
                <div>
                <input
                required className="sign-up-input fade-in" type="texxt" name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
            />
                </div>
              </div>
              
              <div className="mb-1 mt-2">
                <label className="sign-up-label fade-in" >Password</label>
                <div>
                <input
                className="sign-up-input fade-in" type="password" name="password"
              
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
                </div>
              </div>
              
              <div className="mt-5">
                <button className="signup-btn fade-in" type="submit" value="Signup">LOGIN</button>
                <p className="sign-up-dis mt-2 fade-in">Don't have an account? <Link style={{"textDecoration":"none"}} to="/register"><span className="sigin-link" >Sign up</span></Link></p>
              </div>
            </form>
        </div>
        <div className=" d-md-block d-none ">
          <img className="signup-img fade-in" src="https://img.freepik.com/premium-photo/illustration-showcasing-series-handshakes_1112757-16273.jpg?semt=ais_hybrid" alt="" />
        </div>
        </div>
      
  </div>
</div>
</div>


    );
};

export default Login;
