import React from 'react'
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react';
import './map.css'
mapboxgl.accessToken = 'pk.eyJ1IjoiYXlvdGF5bzEyMyIsImEiOiJjbGI1aXBoMTUwNno1M3BxdXo0emplcXI2In0.V8rTOaKi6Gc-yeRW321TaQ';

const Map = (props) => {
// console.log(props);
    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [3.91311,7.40324],
          zoom: 6,
          });
          
          if(props.clientCoordinates){
            addToMap(map, props.clientCoordinates)
          }

          if(props.mechCoordinates){
            addToMap(map, props.mechCoordinates)
          }

          if(props.clientCoordinates && props.mechCoordinates){
            map.fitBounds([
              props.mechCoordinates,
              props.clientCoordinates
            ],{
              padding:40
            })
          }
      },[props.clientCoordinates, props.mechCoordinates])

      const addToMap = (map, coordinates)=>{
        const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map)
      }
      
      
  return (
    <div className='map' id='map'>
        
    </div>
  )
}

export default Map