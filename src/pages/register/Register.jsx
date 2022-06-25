import React from 'react'
import { useRef} from 'react'
import "./register.css"
import axios from 'axios'
import {useNavigate} from 'react-router'

const Register = () => {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if(password.current.value != passwordAgain.current.value){
      password.current.setCustomValidity("Passwords Do not Match Please Retry !")
    }else{

      const user = {
        username : username.current.value,
        email : email.current.value,
        password : password.current.value,
        passwordAgain : passwordAgain.current.value
      }
      try{
        await axios.post('http://localhost:4000/api/auth/register',user);
        navigate('/login');
      }catch(err){
        console.log(err);
      }
    }
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
          <input type="text"  required placeholder='Username' ref={username} />
          <input type="email" required placeholder='Email' ref={email} /> 
          <input type="password" required  placeholder='Password' ref={password} />
          <input type="password" required placeholder='Password Again' ref={passwordAgain} />
          <button className='loginButton' type='submit'>Sign Up</button>
          <button className='loginnewAccount'>Log into Account</button>
        </form>

    </div>
  )
}

export default Register