import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div className='loginMain'>
        <div className='loginLeft'>
            <div style={{position:"relative",top:"-60px",paddingLeft: "1.7vmax"}}>
                <p style={{fontSize:"50px",fontWeight: "600"}}>NjConnect</p>
                <p style={{fontSize:"25px",paddingTop: "1vmax"}}>Connect with your friends and the world outside your area with NjConnect.</p>
            </div>
            
        </div>
        <div className='loginRight'>
          <input type="text" name="name" value="" placeholder='Email'></input>
          <input type="text" name="name" value="" placeholder='Password'></input>
          <button className='loginButton'>Log In</button>
          <a href="" className='loginForgetPassword' >Forget Password?</a>
          <button className='loginnewAccount'>Create a New Account</button>
        </div>

    </div>
  )
}

export default Login