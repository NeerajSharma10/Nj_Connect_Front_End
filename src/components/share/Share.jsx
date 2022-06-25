import React, { useState } from 'react'
import './share.css'

import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CancelIcon from '@mui/icons-material/Cancel';
import {AuthContext} from '../../context/AuthContext'
import { useContext,useRef } from 'react';
import axios, { CanceledError } from 'axios'

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const {user} = useContext(AuthContext);
  
  const desc = useRef();

  const [file,setFile] = useState(null);

  const submitHandler = async (e) =>{
    e.preventDefault();
    const newPost = {
        userId : user._id,
        desc:desc.current.value
    }
    
    if(file){
        
        const data = new FormData();
        const fileName = file.name;
        data.append("name", fileName);
        data.append("file", file);
        newPost.img = fileName;
        try{
            await axios.post('http://localhost:4000/api/upload',data);
        }catch(err){
            console.log(err);
        }
    }

    try{
        await axios.post('http://localhost:4000/api/posts/create',newPost);
        window.location.reload();
    }catch(err){
        console.log(err);

    }

  }

  return (
    <div className='main-share'>
        <div className='shar-wrapper'>
            <div className='shar-profile'>
                <img src={user.profilePicture ? PF + user.profilePicture : PF + 'person/avatar.jpg'} alt="" />
                <input type="text" ref = {desc} className='shartextJust' placeholder={`Whats in your mind ${user.username}`} />
            </div>
            <hr></hr>

            

            {file && (
                <div className="shareimageConatiner">
                    <img className="sharImgs" src={URL.createObjectURL(file)} alt="Hell"/>
                    <CancelIcon className='shareCancel' onClick = {()=>setFile(null)}/>

                </div>

            )}



            <form className='shar-tags' onSubmit={submitHandler}>
                <div className='shar-tags-left'>
                    <label htmlFor="file">
                        <PermMediaIcon className='sharicon' htmlColor='tomato' /> <span className='hellkkkkk'>Photo or Video</span>
                        <input type="file" style={{display:"none"}} id='file' accept='.jpeg,.jpg,.png' onChange={(e) => setFile(e.target.files[0])}/>
                    </label>
                    <LabelIcon className='sharicon' color="primary"/> <span>Tag</span>
                    <LocationOnIcon  className='sharicon' htmlColor='green'/> <span>Location</span>
                    <EmojiEmotionsIcon className='sharicon' htmlColor='goldenrod'/> <span>Feelings</span>
                </div>
                <button type='submit'>Share</button>
            </form>
        </div>
    </div>
  )
}

export default Share