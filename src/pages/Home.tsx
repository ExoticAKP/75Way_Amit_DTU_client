import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <text className='welcomeText'><h1>Welcome to our App</h1></text>
    <div className='homeView'>
    <Link to={'/login'}><button type="button" className="loginBtn">Log In</button></Link>
    <Link to={'/register'}><button type="button" className="registerBtn">Register</button></Link>
    </div>
    </>
  )
}

export default Home