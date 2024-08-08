import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles.css'
import { userContext } from '../App'

const Post = () => {
    const {id}= useParams()
    const [post, setPost]= useState({})
    const user = useContext(userContext)
    
    useEffect(()=>{
axios.get('https://my-blog-app-back.vercel.app/getpostbyid'+id).then(result=> setPost(result.data)).catch(err=> console.log(err))
    },[])

    const handleDelete=()=>{
      axios.delete('https://my-blog-app-back.vercel.app/deletebyid'+id).then(res => {
        if (res.data === "Success") {
            window.location.href = "/"
        }
    }).catch(err => console.log(err))    }

  return (
    <div className='post_container'>
      <div className='post_post'>
        <img src={`https://my-blog-app-back.vercel.app/Images/${post.file}`} alt="" />
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
      {
        user.email === post.email ?
     <>   <Link to={`/editpost/${post._id}`}>Edit</Link>
     <button onClick={handleDelete} >Delete</button></>
        :
        <></>
      }
    
    </div>
  )
}

export default Post
