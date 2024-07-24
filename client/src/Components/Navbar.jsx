import React, { useContext } from 'react'
// import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
import {userContext} from '../App'
import axios from 'axios'

const Navbar = () => {

    const user=useContext(userContext)

    const navigate= useNavigate()

    const handleLogout=()=>{
      axios.get('http://localhost:3001/logout').then(res=>{
        if(res.data === "Success")
        navigate('/register')
      }).catch(err=>console.log(err))
    }

  return (
    <div className='navbar-header'>
      <div>Blog App</div>
      <div>
        <Link to='/' className='link'>Home</Link>
        {
          user.username ? 
        <Link to='/create' href="" className='link'>Create</Link>
        :<></>
        }
        
        <a href="" className='link'>Contact</a>
      </div>

      {
        // needs to fix this
        user.username ?
        <div className="">
        <input type="button" value="Logout" onClick={handleLogout}
        className='btn_input' />
      </div>
      :
      <div><h5> <Link to='/register' className='link'>Register/Login</Link></h5>
      </div>
      }
     
      
       
    </div>
  )
}

export default Navbar
