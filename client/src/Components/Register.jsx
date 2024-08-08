import React, { useState } from 'react'
import './styles.css'
import { Link, Navigate, useNavigate } from
  'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://my-blog-app-back.vercel.app/register', { username, email, password }).then(res => navigate('/login')).catch(err => console.log(err))

  }

  return (
    <div className='signup_container'>
      <div className='signup_form'>
        <h2>Sign Up </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Username:</label>
            <input type="text"
              placeholder='Enter username'
              onChange={e => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email"
              placeholder='Enter email'
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password"
              placeholder='Enter password'
              onChange={e => setPassword(e.target.value)} />
          </div>
          <button className='signup_btn'>Sign up</button>
        </form>
        <br />
        <p>Already have account</p>
        <Link to='/login'><button>Login </button></Link>
      </div>
    </div>
  )
}

export default Register
