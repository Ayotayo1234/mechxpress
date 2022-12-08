import React from 'react'
import './search.css'
import arrow from '../pages/img/arrowback.svg'
import  {Link } from 'react-router-dom'

const Search = () => {
  return (
    <div className='search-wrapper'>
        <Link to='/home'>
        <div className="search-button-container">
            <img src={arrow} alt="" />
        </div>
        </Link>
        <div className="search-input-container">
            <div className="formtioicons">
                <img className='circle-dot' src="https://cdn-icons-png.flaticon.com/512/0/14.png" alt="" />
                <div className="line"></div>
                <img className='circle-dot' src="https://cdn-icons-png.flaticon.com/512/0/14.png" alt="" />
            </div>
            <div className="inputboxes">
                <input type="text" placeholder='Your Location' />
                {/* <input type="text" placeholder='Workshop'/> */}
            </div>
            <img className='plus' src="https://img.freepik.com/free-icon/zoom_318-932246.jpg?size=338&ext=jpg&ga=GA1.2.611315496.1669974463&semt=sph" alt="" />
        </div>
        <div className="searchbutton">
            Confirm Location
        </div>
    </div>
  )
}

export default Search