import React from 'react'
import './profileplus_.css'
const profileplus = ({name,image}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='profile-plus-main'>
      <img src={PF+image} alt="" />
      <div></div>
      <p>{name}</p>
    </div>
  )
}

export default profileplus