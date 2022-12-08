import React from 'react'
import { Link } from 'react-router-dom'
import './signin.css'

const Signin = () => {
  return (
    <div className='signin'>
        <div className="signin-img">

        </div>
        <form action="" method="post">
            <input type="text"  placeholder='Enter email'/>
            <input type="text" placeholder='Password' />
            <Link className='form-btn' to='/home'><button type="submit">Login</button></Link>
            <small>Don't have an account? <Link to='/signup'>Register</Link></small>
                <div className="logo sign-img"></div>
        </form>
        
    </div>
  )
}

export default Signin