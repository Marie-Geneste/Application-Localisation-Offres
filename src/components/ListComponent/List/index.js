import React, { useState, useEffect } from 'react'
import './style.scss'
import heart from '/public/images/icone-de-coeur-noir-1.png'

function List({ handleAddFav, favoriteNameRef, name, hoveredMarker, id, setHoveredList, setHoveredMarker }) {
  let classList = '';
  const [isSelected, setSelected] = useState(false)
  
  hoveredMarker === id || isSelected  ? classList = 'list-item hovered' : classList = 'list-item';

  function onSelectedList() {
    setHoveredMarker(null)
    setHoveredList(id)
    setSelected(true)
  }

  function onUnselectedList() {
    setSelected(false)
  }

  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFav () {
    setIsFavorite(!isFavorite);
    console.log("ID", id)
    handleAddFav(id, name);
  }


  return (
    <div className='list'>
      <div className={classList}
          onMouseEnter={onSelectedList}
          onMouseLeave={onUnselectedList}
          ref={favoriteNameRef}>
        {name}
      <img className={`heart ${isFavorite ? 'favorite' : ''}`} src={heart} onClick={toggleFav}/>
      </div> 
    </div>
  )
}

export default List