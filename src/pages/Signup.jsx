import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import PhoneNumberInput from '../components/PhoneNumberInput';
import FlagSelector from '../components/FlagSelector';
import { AddressAutofill } from '@mapbox/search-js-react';

const Signup = () => {

  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const handleSelectCountryCode = (code) => {
    setSelectedCountryCode(code);
  };



  return (
    <div className='signup'>
      <div className='text'>
        Let's start with creating your account
      </div>

      <form action="" method="post">
            <div className="labels">
              <label htmlFor="firstName">First Name</label>
              <input type="text"  placeholder='enter first name here'/>
            </div>
            <div className="labels">
              <label htmlFor="lastName">Last Name</label>
              <input type="text"  placeholder='enter last name here'/>
            </div>
            <div className="labels">
              <label htmlFor="email">Email</label>
            
              <input type="email"  placeholder='enter email here'/>
            </div>
            <div className="labels">
            <div className="phoneTab">
      <FlagSelector onSelectCountryCode={handleSelectCountryCode} />
      <PhoneNumberInput selectedCountryCode={selectedCountryCode} />
    </div>
            </div>
            <div className="labels">
              <label htmlFor="Password">Password</label>
              <input type="text" placeholder='enter password here' />
            </div>

            <div className="labels">
              <label htmlFor="address">address</label>
              <AddressAutofill accessToken={'pk.eyJ1IjoiYXlvdGF5bzEyMyIsImEiOiJjbGI1aXBoMTUwNno1M3BxdXo0emplcXI2In0.V8rTOaKi6Gc-yeRW321TaQ'}>
<input
placeholder='enter your city'
autoComplete="country-name"
// value={value}
// onChange={(e) => setValue(e.target.value)}
/>
</AddressAutofill>
              {/* <input type="text"  placeholder='enter your city'/> */}
            </div>
            
           
            <Link className='form-btn' to='/ '><button type="submit">Register</button></Link>
            <small>Already have an account? <Link to='/'>Login</Link></small>
                {/* <div className="logo sign-img"></div> */}
        </form>
      




    </div>
  )
}

export default Signup