import React from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from '../../data.js' 
const Feed = () => {
  return (
    <div className='feed-main'>
      <Share/>
      {
        Posts.map((item) => (
          <Post post={item}/>
        ))
      }
    </div>
  )
}

export default Feed