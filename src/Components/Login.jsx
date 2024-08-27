
import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const [user,setUser]=useState('')
  const [password,setPassword]=useState('')
  const [token,setToken]=useState('')

  const navigate=useNavigate()
  

  useEffect(()=>{

    axios.patch('https://chatify-api.up.railway.app/csrf')
    .then(response=>{
      setToken(response.data.csrfToken)
      console.info('token hämtat')
    })
    .catch(error=>{
      console.error('token ej hämtat',error)
    })

  },[])

  const loggin = ()=>{

  }


  return (
    <div>
      <h1>login</h1>
      <input 
      type="text" 
      placeholder='username'
      value={user}
      onChange={(e)=> setUser (e.target.value)}
      />
      <br />
      <input 
      type="text" 
      placeholder='password'
      value={password}
      onChange={(e)=> setPassword (e.target.value)}
      />
      <br />
      <button onClick={loggin}>logga in</button>
      <br />
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Login
