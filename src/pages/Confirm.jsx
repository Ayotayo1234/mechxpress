import {useEffect, React, useState } from 'react'
import Map from '../components/Map';
import './confirm.css'

const Confirm =()=>{
    const [ pickupCoordinate,setPickupCoordinate] = useState('')
      

            const getPickupCoordinate = () =>{
                const location = 'lagos nigeria'
                const key = 'a203d077f8ebf9472010c673430c7b15'
                fetch(`http://api.positionstack.com/v1/forward?access_key=${key}&query=${location}`).then(response => response.json())
                    .then(area => {
                        console.log(area.data[0].longitude)
                        setPickupCoordinate(`${area.data[0].latitude}, ${area.data[0].longitude}`)
                    })
                }
                useEffect(()=>{
                    getPickupCoordinate();
                }, [])
  


//my api key is 'a203d077f8ebf9472010c673430c7b15'

return (
        <div className='confirm-wrapper'>
        
            <Map
            pickupCoordinate={pickupCoordinate} 
             />
            <div className='ride-container'>
               <div className=''></div>
               <div className=" "></div>
            </div>
        </div>
    ) 
}

export default Confirm
