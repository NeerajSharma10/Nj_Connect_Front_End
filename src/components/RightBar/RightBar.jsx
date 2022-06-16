import React from 'react'
import './rightbar.css'
import Profileplus  from '../profileplusname/profileplus'
import {Users} from '../../data.js'

const RightBar = () => {
  return (
    <div className='right-main'>
      <div className='right-main-wrapper'>
        <div className='right-bar-heading'>
          <img src="./assets/gift.png" alt="Not found" />
          <p>Pola Foster and 3 other friends have a birthday today</p>
        </div>
        <img src="/assets/ad.png" alt="" />
        <div className='right-bar-online-friends'>
          <p>Online Friends</p>
        
        </div>
      </div>

      {
        Users.map((user) => (
          <Profileplus name={user.username} image={user.profilePicture}/>
        ))
      }
      
    </div>
  )
}

export default RightBar