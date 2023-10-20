import React from 'react'
import './style.scss'
import List from './List'

function ListComponent({ datas, hoveredMarker, setHoveredList, setHoveredMarker }) {
  return (
    <div className='list-container'>
      <h2 className='list-title'>Repérez votre bar !</h2>
      {
        datas.map((data) => (
          <List key={data.id} {...data} hoveredMarker={hoveredMarker} setHoveredList = {setHoveredList} setHoveredMarker={setHoveredMarker}/>
        ))
      }
    </div>
  )
}

export default ListComponent