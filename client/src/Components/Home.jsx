import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Home = () => {
const [posts, setPosts]=useState([])
useEffect(()=>{
    axios.get('https://mern-blog-app-mocha-pi.vercel.app/getposts').then(posts=>setPosts(posts.data))
    .catch(err=> console.log(err))
},[])

  return (
    <div className='posts_container'>
      {posts.map(post=>(
        <Link  to={`/post/${post._id}` } className="post">
      
          <img src={`https://mern-blog-app-mocha-pi.vercel.app/Images/${post.file}`} alt="" />
          <div className="post_text">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          
        
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Home
