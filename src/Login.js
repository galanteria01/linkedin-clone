import React, { useEffect, useState } from 'react'
import './Login.css';
import {mAuth} from './firebase';
import { useDispatch } from 'react-redux';
import { login,logout } from './features/userSlice'
const Login = (props) => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [picture,setPicture] = useState("");
    const dispatch = useDispatch();


    const register = () => {
        if(!name){
            return alert("Please enter the Full name");
        }
            mAuth.createUserWithEmailAndPassword(email,pass)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: picture,
                })
            
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: picture
                }))
            })
        }).catch((error) => alert(error.message))
        
    };
    const loginToApp = (e) => {
        e.preventDefault();
        mAuth.signInWithEmailAndPassword(email,pass)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        }).catch((error) => alert(error));
    };
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
                    <span className="login__register" onClick={register}>
                        Register Now
                    </span>
            </p>
        </div>
    )
}

export default Login
