import React from 'react'
import './style.scss'
import {
    MapContainer,
    TileLayer,
  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'; // Importez le CSS de Leaflet
import MarkerComponent from './MarkerComponent';


const Map = ({ datas, setHoveredMarker, hoveredList }) => {

  return (
    <div className='map-container'>
        <MapContainer className='map' center={[43.295, -0.370]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {datas.map((data) => (
              <MarkerComponent key={data.id} {...data} setHoveredMarker={setHoveredMarker} hoveredList={hoveredList}/>
            ))}
        </MapContainer>
    </div>
  )
}

export default Map