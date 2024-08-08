import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Home from './Components/Home'
import axios from 'axios'
import Create from './Components/Create'
import Post from './Components/Post'
import EditPost from './Components/EditPost'


export const userContext= createContext()



function App() {

  const [users, setUser]=useState({})

  //to access the cookies
axios.defaults.withCredentials=true
  useEffect(()=>{
    axios.get('https://my-blog-app-back.vercel.app/').then(user=>
     { setUser (user.data)}
    
      )
    .catch(err=> console.log(err))
  },[])

  return (
    <userContext.Provider value={users}>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}></Route>  
    <Route path='/register' element={<Register/>}></Route>
   </Routes>
   <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/post/:id' element={<Post/>}></Route>
    <Route path='/editpost/:id' element={<EditPost/>}></Route>
  
   </Routes>

   </BrowserRouter>
   </userContext.Provider>
  )
}

export default App
