import React, { useContext } from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const NavBar = () => {

  const {user} = useContext(AuthContext);



  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='topbar'>
        <div className='heading'>
          <Link to="/" style={{textDecoration:"none"}}>
            <p className='headingInner'>N<img src={`${PF}j-icon-12.jpg`} alt="" />Connect
              </p>
          </Link>
        </div>
        
        <div className='searchBar'>
          <div>
            <SearchIcon className='SearchIcon'/>
            <input placeholder="Search for friend, video or post"></input>
          </div>
          
        </div>
        <div className='links'>
          <span>Homepage</span>
          <span>Timeline</span>
        </div>
        <div className='notifications'>
          <div>
            <PersonIcon fontSize="large"/>
            <span>1</span>
          </div>
          <div>
            <ChatIcon fontSize="large"/>
            <span>2</span>
          </div>
          <div>
            <NotificationsNoneIcon fontSize="large"/>
            <span>3</span>
          </div>
          
        </div>
        <Link to={`profile/${user.username}`}>
          <img className='proimage' src={user.profilePicture ? PF + user.profilePicture : PF + "person/avatar.jpg"} alt="Not found" />
        </Link>
    </div>
  )
}

export default NavBar