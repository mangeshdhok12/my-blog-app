import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import axios from 'axios'

const Login = () => {

  const[email, setEmail]= useState()
  const[password, setPassword]= useState()


  const handleSubmit=(e)=>{
 
    e.preventDefault()
    axios.post('https://my-blog-app-back.vercel.app/login',  {email, password,   withCredentials: true}).then(res=>{
      if(res.data === "Success"){
          window.location.href="/"
      }
    }).catch(err=>console.log(err))
  }

  return (
    <div className='signup_container'>
    <div className='signup_form'>
      <h2>Login </h2>
      <form onSubmit={handleSubmit}>
        
          <div>
              <label htmlFor="email">Email:</label><br />
              <input type="email"
                placeholder='Enter email'
                onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div>
              <label htmlFor="password">Password:</label>
              <input type="password"
                placeholder='Enter password'
                onChange={(e)=>setPassword(e.target.value)} /> 
          </div>
              <button  className='signup_btn'>Login</button>
      </form>
      <br />
      <p>If dont have account</p>
      <Link to='/register  '><button>Signup </button></Link>
    </div>
  </div>
  )
}

export default Login
