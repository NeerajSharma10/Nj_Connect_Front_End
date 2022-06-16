import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'
import './Home.css'

const Homep = () => {
  return (
    <>
      <NavBar/>
      <div className='Bcontainer'>
        <SideBar/>
        <Feed/>
        <RightBar/>  
      </div>
      
    </>
    
  )
}

export default Homep