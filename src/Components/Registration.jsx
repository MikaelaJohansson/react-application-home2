
import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {


  const [user,setUser]= useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [csrfToken,setCsrfToken]=useState('')

  const navigate = useNavigate();

  useEffect(() => {
    axios.patch('https://chatify-api.up.railway.app/csrf')
      .then(response => {
        setCsrfToken(response.data.csrfToken);
        console.info('token hämtat')
      })
      .catch(error => {
        
        console.error(`Fel vid hämtning av CSRF-token: User ${user}`, error);
      });
  }, []);

  const handleRegistartion = async ()=>{

    try{
     const response= await axios.post('https://chatify-api.up.railway.app/auth/register ',{
        username:user,
        email:email,
        password:password,
        avatar:'https://i.pravatar.cc/200',
        csrfToken
      })

      if(response.status === 201){
        alert('registreing lyckad')
        console.info('registreing lyckad')
        navigate('/Login')
        
      }else{
        console.error('registrering misslyckades')
      }
    }catch(error){
      console.error('Ett fel inträffade vid registrering:', error);
    }
  }

  return (
    <div>
      <h1>Skapa konto</h1>
      <input 
      type="text" 
      placeholder='Användarnamn'
      value={user}
      onChange={(e)=> setUser (e.target.value)}
      />
      <br />
      <input 
      type='email' 
      placeholder='email'
      value={email}
      onChange={(e)=> setEmail (e.target.value)}
      />
      <br />
      <input 
      type="password"
      placeholder='lösenord'
      value={password}
      onChange={(e)=> setPassword (e.target.value)}
      />
      <br />
      <button onClick={handleRegistartion} >skicka in</button>
      <br />
      <Link to={'/Login'}>Redan konto?</Link>
    </div>
  )
}

export default Registration


