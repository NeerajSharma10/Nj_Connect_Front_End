import React from 'react'
import "./profile.css"

import NavBar from '../../components/Nav/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import Feed from "../../components/Feed/Feed"


const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <NavBar/>
        
        <div className='PContainer'>
            <SideBar/>
            <div className='ProfileRight'>
                <div className='profilePic'>
                    <img src={`${PF}backgroundim.jpg`} alt="Not found" />
                    <div className='profilepiclast'>
                        <img style={{width: "12.7vmax",height:"12.7vmax",borderRadius:"10vmax",border: "5px solid whitesmoke"}} src={`${PF}person/4.jpeg`} alt="Not found" />
                        <h1 style={{marginTop:"0.7vmax"}}>Sophie Singh</h1>
                        <p style={{fontSize: "16px",color:"gray",fontWeight:"300"}}>Hello Guys !</p>
                    </div>
                    
                </div>
                <div className='profileData'>
                    <Feed/>
                    <div className='profileExtra'>
                        <p style={{paddingTop:"0.9vmax",fontSize: "22px",fontWeight:"500"}}>User Information</p>
                        <p style={{paddingTop:"0.35vmax",fontSize: "18px", color:"gray",fontWeight:"350"}}>City : Delhi</p>
                        <p style={{paddingTop:"0.35vmax",fontSize: "18px",color:"gray",fontWeight:"350"}}>From : India</p>
                        <p style={{paddingTop:"0.35vmax",fontSize: "18px" , color:"gray",fontWeight:"350"}}>Relationship : Single</p>
                        <p style={{paddingTop:"1.5vmax",paddingBottom: "0.3vmax",fontSize: "22px",fontWeight:"500"}}>User Friends</p>

                        <div className='profileimages'>
                            <div>
                                <img src={`${PF}person/1.jpeg`} alt="" />
                                <p>Santa Mario</p>
                            </div>
                            <div>
                                <img src={`${PF}person/2.jpeg`} alt="" />
                                <p>Santa Mario</p>
                            </div>
                            <div>
                                <img src={`${PF}person/3.jpeg`} alt="" />
                                <p>Santa Mario</p>
                            </div>
                            <div>
                                <img src={`${PF}person/4.jpeg`} alt="" />
                                <p>Santa Mario</p>
                            </div>
                            <div>
                                <img src={`${PF}person/5.jpeg`} alt="" />
                                <p>Santa Mario</p>
                            </div>
                            <div>
                                <img src={`${PF}person/6.jpeg`} alt="" />
                                <p>Santa Mario</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        
        
        
        
      
    </>
  )
}

export default Profile