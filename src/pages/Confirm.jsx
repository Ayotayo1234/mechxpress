import {useEffect, React, useState } from 'react'
import Map from '../components/Map';
import './confirm.css'
import { useSearchParams } from 'react-router-dom'

const Confirm =()=>{  

    const [searchparams] = useSearchParams();
     console.log(`this is the client location; ${searchparams.get('id')}`);
     console.log(`this id the mech location; ${searchparams.get('data')}`);
    const [ clientCoordinates, setClientCoordinates] = useState()
    const [ mechCoordinates, setMechCoordinates] = useState()
    const getClientCoordinate = ()=>{
        // const location = searchparams.get('data','id');
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchparams.get('id')}.json?access_token=pk.eyJ1IjoiYXlvdGF5bzEyMyIsImEiOiJjbGI1MGZxaGowMXZvM3d1bmZidXM4eGFtIn0.7LyHBe1bquOxbAzifQ7rDA`).then(response => response.json())
        .then(data => {
            setClientCoordinates(data.features[0].center)
        })
    }
    const getMechCoordinate = ()=>{
        // const location = "Makoko Nigeria";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchparams.get('data')}.json?access_token=pk.eyJ1IjoiYXlvdGF5bzEyMyIsImEiOiJjbGI1MGZxaGowMXZvM3d1bmZidXM4eGFtIn0.7LyHBe1bquOxbAzifQ7rDA`).then(response => response.json())
        .then(data => {
            setMechCoordinates(data.features[0].center)
        })
    }




    useEffect(()=>{
        getClientCoordinate();
        getMechCoordinate();
    },[])
    
    
return (
        <div className='confirm-wrapper'>
        
            <Map
            clientCoordinates={clientCoordinates}
            mechCoordinates={mechCoordinates} 
             />
            <div className='ride-container'>
               <div className=''></div>
               <div className=" "></div>
            </div>
        </div>
    ) 
}

export default Confirm ;
