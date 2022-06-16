import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TodayIcon from '@mui/icons-material/Today';
import SchoolIcon from '@mui/icons-material/School';

import Friends from '../friends/friends';
import {Users} from '../../data';

const SideBar = () => {
  return (
    <div className='sidebar-main'>

      <div>
        <RssFeedIcon/>
        <span>Feed</span>
      </div>
      <div>
        <ChatIcon/>
        <span>Chats</span>
      </div>
      <div>
        <SlowMotionVideoIcon/>
        <span>Videos</span>
      </div>
      <div>
        <PeopleIcon/>
        <span>Groups</span>
      </div>
      <div>
        <CollectionsBookmarkIcon/>
        <span>Bookmarks</span>
      </div>
      <div>
        <HelpOutlineIcon/>
        <span>Questions</span>
      </div>
      <div>
        <WorkOutlineIcon/>
        <span>Jobs</span>
      </div>
      <div>
        <TodayIcon/>
        <span>Events</span>
      </div>
      <div>
        <SchoolIcon/>
        <span>Courses</span>
      </div>
      
      <button className='sidebarbutton'>Show More</button>
      
      <hr style={{margin : "1vmax",opacity: "0.5"}}></hr>
      {
        Users.map((user) => (
          <Friends s_user={user}/>
        ))
      }
      
    </div>
  )
}

export default SideBar