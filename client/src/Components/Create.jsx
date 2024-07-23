import React, { useContext, useState } from 'react'
import './styles.css'
import axios from 'axios'
import {userContext} from '../App'

const Create = () => {
  const [title, setTitle]=useState();
  const [description, setDescription]=useState()
  const [file, setFile]=useState()

  const user= useContext(userContext)

   const handleSubmit=(e)=>{

    e.preventDefault()
    const formData= new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('email', user.email)
    formData.append('file', file)

    axios.post('https://mern-blog-app-mocha-pi.vercel.app/create',formData).then(res=>{
      if(res.data ==="Success"){
        window.location.href="/"
      }
    }).catch(err=>console.log(err))
   }

  return (
    <div className='post_container'>
      <div className='post_form'>
        <form >
            <h2>Create Post</h2>
            <input type="text" placeholder='Enter Title' 
            onChange={e=>setTitle(e.target.value)}/>
            <textarea name="desc" id="desc" cols="30" rows="10"
            placeholder='Enter Description'
            onChange={ e=>setDescription(e.target.value)}>

            </textarea>
            <input type="file" className='file'
            placeholder='Select File' 
            onChange={e=>setFile(e.target.files[0])} 
           />
            <button onClick={handleSubmit}>Post</button>
        </form>
      </div>
    </div>
  )
}

export default Create
