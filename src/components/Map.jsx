import React from 'react'
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react';
import './map.css'
mapboxgl.accessToken = 'pk.eyJ1IjoiYXlvdGF5bzEyMyIsImEiOiJjbGI1aXBoMTUwNno1M3BxdXo0emplcXI2In0.V8rTOaKi6Gc-yeRW321TaQ';

const Map = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [9.0820, 8.6753 ],
          zoom: 5,
          });
      })
  return (
    <div className='map' id='map'>
        
    </div>
  )
}

export default Map