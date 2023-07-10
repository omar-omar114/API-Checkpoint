//import mapboxgl from "mapbox-gl";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import './UserList.css';
import logo from './marker.png';


const Localisation = (props) => {
    const params = useParams()
    const findUser = props.data.find(e => e.id === parseInt(params.userId))
    const latitude = parseFloat(findUser.address.geo.lat).toFixed(4);
    const longitude = parseFloat(findUser.address.geo.lng).toFixed(4);
    
mapboxgl.accessToken = 'pk.eyJ1IjoiMGthemNyYXp5dGVhY2hlciIsImEiOiJja3JraG84N3AzbjE4MnBwOGU2YThqcmc2In0.aky7RLumDuqZv9kTCRZa3Q'

  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

   const [lng, setLng] = useState(longitude);
   const [lat, setLat] = useState(latitude);

   //const [lng, setLng] = useState(-7.603869);
   //const [lat, setLat] = useState(33.589886);
  const [zoom, setZoom] = useState(9);


  useEffect(()=> {
      if (map.current) return false;
      //this is to avoid re-rendering empty arrays
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      })
  },[])

  return(
    
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
    <div ref={mapContainer} className="map-container" />
    <img src={logo} alt ='' width='40px' height='40px'
    style={{position:'absolute'}}/>
    </div>
    
  )
}

export default Localisation;