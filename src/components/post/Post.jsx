import React, { useEffect, useState,useContext } from 'react'
import './Posts.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios  from 'axios';
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
// import {Users} from '../../data.js'

const Post = ({post}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext);

  const [like, setLike] = useState(post.likes.length);
  const [isliked, setisliked] = useState(false);
  const likeHandler = () => {

    try{
      axios.put('http://localhost:4000/api/posts/'+post._id+'like',{user_Id:currentUser._id})
    }catch(err){


    }


    setLike(isliked ? like-1 : like+1);
    setisliked(!isliked);
  }

  const [users,setUsers] = useState({});
  
  useEffect(() => {
    setisliked(post.likes.includes(currentUser._id));
  },[currentUser._id,post.likes])

  useEffect(() => {

    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:4000/api/users?userId=${post.userId}`);
      setUsers(res.data);
    };
    fetchUser();


  },[post.userId])

  return (
    <div className='main-post'>
        <div className='post-wrapper'>
            <div className='post-heading-main'>
                <div className='post-heading-part1'>
                    <Link to={`profile/${users.username}`}>
                        <img className = "post-heading-mainimgs" src={users.profilePicture ? PF + users.profilePicture : PF+'person/avatar.jpg'} alt="" />
                    </Link>
                    <span className='post-heading-name-profile-1'>{users.username}</span>
                    <span className='post-heading-name-profile-2'>{format(post.createdAt)}</span>
                </div>
                <div>
                    <MoreVertIcon/>
                </div>
            </div>
            <p>{post.desc ? post.desc : "Hey Its Awesome as it is default Njconnect Text"}</p>
            <img src={post.img ? PF+post.img : PF + 'backgroundim.jpg'} alt="" />
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