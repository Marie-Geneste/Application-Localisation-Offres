import React, { useState } from 'react'
import './style.scss'
import { func } from 'prop-types';

function List({ name, hoveredMarker, id, setHoveredList, setHoveredMarker }) {
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


  return (
    <div className='list'>
      <div className={classList}
          onMouseEnter={onSelectedList}
          onMouseLeave={onUnselectedList}>
        {name}
      </div> 
    </div>
  )
}

export default List