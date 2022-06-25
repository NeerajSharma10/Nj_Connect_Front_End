import React from 'react'
import { useRef } from 'react'
import "./login.css"
import { loginCall } from '../../apiCalls'
import { useContext } from 'react'
import {AuthContext} from '../../context/AuthContext'
import {CircularProgress} from '@mui/material'

const Login = () => {

  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch);
    console.log(user);
  }



  return (
    <div className='loginMain'>
        <div className='loginLeft'>
            <div style={{position:"relative",top:"-60px",paddingLeft: "1.7vmax"}}>
                <p style={{fontSize:"50px",fontWeight: "600"}}>NjConnect</p>
                <p style={{fontSize:"25px",paddingTop: "1vmax"}}>Connect with your friends and the world outside your area with NjConnect.</p>
            </div>
            
        </div>
        <form className='loginRight' onSubmit={handleClick}>
          <input  placeholder='Email' type = "email" required ref={email}></input>
          <input  placeholder='Password' type = "password" required  ref={password}></input>
          <button className='loginButton' type='submit' disabled={isFetching}>{isFetching? <CircularProgress color="inherit" size="25px"/> : "Log In"} </button>
          <a href="" className='loginForgetPassword' >Forget Password?</a>
          <button className='loginnewAccount' type='submit' disabled={isFetching}>{isFetching? <CircularProgress color="inherit" size="25px"/> : "Create a New Account"}</button>
        </form>

    </div>
  )
}

export default Login