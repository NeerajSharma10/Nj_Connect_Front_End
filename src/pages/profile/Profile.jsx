import React, { useEffect, useState,useContext } from 'react'
import "./profile.css"
import {Link} from 'react-router-dom'
import NavBar from '../../components/Nav/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import Feed from "../../components/Feed/Feed"
import axios from 'axios'
import {useParams} from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import {Add,Remove} from '@mui/icons-material'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [users,setUsers] = useState({});

  const [friends,setFriends] = useState([]);

  const username = useParams().username;
  const {user:currentUser,dispatch} = useContext(AuthContext);

  const [followed,setFollowed] = useState(currentUser.followingPeople.includes(users?.id));

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:4000/api/users?username=${username}`);
      setUsers(res.data); 
    };
    fetchUser();

    const getFriends = async () => {
        try{
            const friendList = await axios.get('http://localhost:4000/api/users/friends/' + users._id);
            setFriends(friendList.data);
        }catch(err){
            console.log(err);
        }
    }
    getFriends();

  },[username,users._id])



  

  useEffect(()=>{
    setFollowed(currentUser.followingPeople.includes(users?.id));
  },[currentUser,users.id]);

  const handleClick = async()=>{
    try{
        if(followed){
            console.log(users._id + " " + currentUser._id);
            await axios.put('http://localhost:4000/users/' + users._id + '/unfollow/' , {userId:currentUser._id});
            dispatch({type:"UNFOLLOW",payload:users._id});
        }else{
            // console.log(users._id + " " + currentUser._id);
            await axios.put('http://localhost:4000/users/' + users._id + '/follow/' , {userId:currentUser._id});
            dispatch({type:"FOLLOW",payload:users._id});
        }
    }catch(err){
        console.log(err);
    }
    setFollowed(!followed);
  }


  return (
    <>
      <NavBar/>
        
        <div className='PContainer'>
            <SideBar/>
            <div className='ProfileRight'>
                <div className='profilePic'>
                    <img src={users.coverPicture || PF + "backgroundim.jpg"} alt="Not found" />
                    <div className='profilepiclast'>
                        <img style={{width: "12.7vmax",height:"12.7vmax",borderRadius:"10vmax",border: "5px solid whitesmoke"}} src={users.profilePicture ?  PF + users.profilePicture : PF + "person/4.jpeg"} alt="Not found" />
                        <h1 style={{marginTop:"0.7vmax"}}>{users.username}</h1>
                        <p style={{fontSize: "16px",color:"gray",fontWeight:"300"}}>{users.desc}</p>
                    </div>
                    
                </div>
                <div className='profileData'>
                    <Feed username={username}/>

                    
                    <div className='profileExtra'>
                        {users.username !== currentUser.username && (
                            <button className='rightBarFollowButton' onClick={handleClick}>
                                { followed ? "Unfollow" : "Follow"}
                                { followed ? <Remove/> : <Add/>}
                            </button>
                        )}
                        <p style={{paddingTop:"0.9vmax",fontSize: "22px",fontWeight:"500"}}>User Information</p>
                        <p style={{paddingTop:"0.35vmax",fontSize: "18px", color:"gray",fontWeight:"350"}}>{`City : ${users.city}`}</p>
                        <p style={{paddingTop:"0.35vmax",fontSize: "18px",color:"gray",fontWeight:"350"}}>{`From : ${users.from}`}</p>
                        <p style={{paddingTop:"0.35vmax",fontSize: "18px" , color:"gray",fontWeight:"350"}}>{`Relationship : ${users.relationship == 1 ? "Single" : "Married"}`}</p>
                        <p style={{paddingTop:"1.5vmax",paddingBottom: "0.3vmax",fontSize: "22px",fontWeight:"500"}}>User Friends</p>

                        <div className='profileimages'>
                            
                            {
                                
                                friends.map((friend) => (
                                    <Link to={'/profile/' + friend.username} style={{textDecoration:"none"}}>
                                        <div >
                                            
                                            <img className='profileImageUnder' src={friend.profilePicture ? PF + friend.profilePicture : PF + 'person/4.jpeg'} alt="" />
                                            <p className='profileImageUnderp'>{friend.username}</p>
                                        </div>
                                    </Link>
                                ))
                        
                            }   

                        </div>

                    </div>
                </div>
            </div>

        </div>
        
        
        
        
      
    </>
  )
}

export default Profile