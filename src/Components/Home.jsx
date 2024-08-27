import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <Link to={'/Registration'}>Till registrering</Link>
      <br />
      <Link to={'/Login'}>logga in</Link>
      
    </div>
  )
}

export default Home
