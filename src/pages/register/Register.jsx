import React from 'react'
import "./register.css"
const Register = () => {
  return (
    <div className='loginMain'>
        <div className='loginLeft'>
            <div style={{position:"relative",top:"-60px",paddingLeft: "1.7vmax"}}>
                <p style={{fontSize:"50px",fontWeight: "600"}}>NjConnect</p>
                <p style={{fontSize:"25px",paddingTop: "1vmax"}}>Connect with your friends and the world outside your area with NjConnect.</p>
            </div>
            
        </div>
        <div className='loginRight'>
          <input type="text" name="name" value="" placeholder='Username'></input>
          <input type="text" name="name" value="" placeholder='Email'></input>
          <input type="text" name="name" value="" placeholder='Password'></input>
          <input type="text" name="name" value="" placeholder='Password Again'></input>
          <button className='loginButton'>Sign Up</button>
          <button className='loginnewAccount'>Log into Account</button>
        </div>

    </div>
  )
}

export default Register