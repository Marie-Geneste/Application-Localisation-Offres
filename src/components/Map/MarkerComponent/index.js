import React, { useEffect, useRef } from 'react'
import {
    Marker,
    Popup
  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'; // Importez le CSS de Leaflet
import L from 'leaflet';


function MarkerComponent({ id, position, name, setHoveredMarker, hoveredList}) {

    const markerRef = useRef();

    const bottleIcon = new L.Icon({
        iconUrl: './images/bouteille.png', // Spécifiez le chemin vers votre image d'icône
        iconSize: [35, 35], // Spécifiez la taille de l'icône
        iconAnchor: [15, 30], // Spécifiez l'ancre de l'icône (position du pointeur)
        popupAnchor: [0, -30], // Spécifiez l'ancre du popup (position par rapport à l'icône)
        });

    useEffect(() => {
        if(hoveredList === id){
            markerRef.current.openPopup();
        }
        }, [hoveredList]);

  return (
    <div className='marker'>
        <Marker key={id} position={position} icon={bottleIcon} ref={markerRef}
                      eventHandlers={{
                        mouseover: (event) => event.target.openPopup() && setHoveredMarker(id),
                      }}
                      
              >
                  <Popup>
                    {name}
                  </Popup>
              
              </Marker>
    </div>
  )
}

export default MarkerComponent