import React, {useState} from 'react'
import './style.scss'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'; // Importez le CSS de Leaflet
import L from 'leaflet';


const Map = ({ datas, setHoveredMarker, hoveredList }) => {

  const bottleIcon = new L.Icon({
    iconUrl: './images/bouteille.png', // Spécifiez le chemin vers votre image d'icône
    iconSize: [35, 35], // Spécifiez la taille de l'icône
    iconAnchor: [15, 30], // Spécifiez l'ancre de l'icône (position du pointeur)
    popupAnchor: [0, -30], // Spécifiez l'ancre du popup (position par rapport à l'icône)
  });

  return (
    <div className='map-container'>
        <MapContainer className='map' center={[43.295, -0.370]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {datas.map((data) => (
              <Marker key={data.id} position={data.position} icon={bottleIcon}
                      eventHandlers={{
                        mouseover: (event) => event.target.openPopup() && setHoveredMarker(data.id)
                        
                      }}
                      
              >
                  <Popup>
                    {data.name}
                  </Popup>
              
              </Marker>
            ))}
        </MapContainer>
    </div>
  )
}

export default Map