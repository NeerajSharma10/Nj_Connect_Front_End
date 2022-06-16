import React from 'react'
import './share.css'

import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='main-share'>
        <div className='shar-wrapper'>
            <div className='shar-profile'>
                <img src={`${PF}person/5.jpeg`} alt="" />
                <span>Whats in your mind Sophia</span>
            </div>
            <hr></hr>
            <div className='shar-tags'>
                <div className='shar-tags-left'>
                    <PermMediaIcon className='sharicon' htmlColor='tomato' /> <span>Photo or Video</span>
                    <LabelIcon className='sharicon' color="primary"/> <span>Tag</span>
                    <LocationOnIcon  className='sharicon' htmlColor='green'/> <span>Location</span>
                    <EmojiEmotionsIcon className='sharicon' htmlColor='goldenrod'/> <span>Feelings</span>
                </div>
                <button>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share