import React, { useState } from 'react'
import './Posts.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {Users} from '../../data.js'

const Post = ({post}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = Users.filter((u) => (u.id === post.id));

  const [like, setLike] = useState(post.like);
  const [isliked, setisliked] = useState(false);
  const likeHandler = () => {
    setLike(isliked ? like-1 : like+1);
    setisliked(!isliked);
  }

  return (
    <div className='main-post'>
        <div className='post-wrapper'>
            <div className='post-heading-main'>
                <div className='post-heading-part1'>
                    <img src={PF+user[0].profilePicture} alt="" />
                    <span className='post-heading-name-profile-1'>{user[0].username}</span>
                    <span className='post-heading-name-profile-2'>{post.date}</span>
                </div>
                <div>
                    <MoreVertIcon/>
                </div>
            </div>
            <p>{post.desc ? post.desc : "Hey Its Awesome as it is default Njconnect Text"}</p>
            <img src={PF+post.photo} alt="" />
            <div className='post-heading-main'>
                <div>
                    <img src={`${PF}like.png`} alt="" onClick={likeHandler}/>
                    <img src={`${PF}heart.png`} alt="" onClick={likeHandler}/>
                    <span>{like} People Liked It</span>
                </div>
                <div>
                    <p>{post.comment} Comments</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post