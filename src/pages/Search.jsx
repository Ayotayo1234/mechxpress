import React, { useState } from 'react'
import './search.css'
import arrow from '../pages/img/arrowback.svg'
import  {Link } from 'react-router-dom'
import { createSearchParams, useNavigate } from 'react-router-dom'



const Search = () => {
    const [client, setClient] = useState('')
    const [mech, setMech] = useState('')
    // const data = [client, mech]
    const navigate = useNavigate();

    const inputLocation = (id, data) => {
        navigate({
            pathname: '/confirm',
            search: createSearchParams({
                id: client,
                data: mech 
            }).toString()
        })
    }
    

  return (
    <div className='search-wrapper'>
        <Link to='/home'>
        <div className="search-button-container">
            <img src={arrow} alt  />
        </div>
        </Link>
        
        <div className="search-input-container">
            <div className="formtioicons">
                <img className='circle-dot' src="https://cdn-icons-png.flaticon.com/512/0/14.png" alt="" />
                <div className="line"></div>
                <img className='circle-dot' src="https://cdn-icons-png.flaticon.com/512/0/14.png" alt="" />
            </div>
            <div className="inputboxes">
                <input
                 type="text"
                 placeholder='Your Location'
                 value={client}
                 onChange={(e)=> setClient(e.target.value)} />

                <input
                 type="text"
                 placeholder='mech Location'
                 value={mech}
                 onChange={(e)=> setMech(e.target.value)}
                  />
            </div>
            <img className='plus' src="https://img.freepik.com/free-icon/zoom_318-932246.jpg?size=338&ext=jpg&ga=GA1.2.611315496.1669974463&semt=sph" alt="" />
        </div>
        
        <div className="searchbutton" onClick={inputLocation}> 
                Confirm Location
            </div>
        
    </div>
  )
}

export default Search