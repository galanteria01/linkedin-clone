import React, { useState } from 'react'
import './Login.css';

const Login = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [picture,setPicture] = useState("");

    const register = (e) => {
        e.preventDefault();
    };
    const loginToApp = () => {};
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="linkedin image"/>
            <form>
                <input 
                value = {name} 
                type="text" 
                placeholder="Full Name (required if registering)"
                onChange={(e) => (setName(e.target.value))}
                />
                <input 
                value={picture}
                onChange={(e) => (setPicture(e.target.value))}
                type = "text" 
                placeholder="Profile picture URL (optional)" />
                <input 
                value = {email} 
                type="email" 
                placeholder="Email address"
                onChange={(e) => (setEmail(e.target.value))}
                />
                <input 
                value = {pass} 
                type="password" 
                placeholder="Password"
                onChange={(e) => (setPass(e.target.value))}
                 />
                <button 
                type="submit" 
                onClick={loginToApp}>Sign In</button>
            </form>
            <p>
                Not a member?{"  "}
                    <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
