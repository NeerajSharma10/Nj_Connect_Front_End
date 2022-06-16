import React from 'react'
import './Friends.css'
const friends = ({s_user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='friends-css-main'>
        <img src={PF+s_user.profilePicture} alt="not found" />
        <span>{s_user.username}</span>
    </div>
  )
}

export default friends