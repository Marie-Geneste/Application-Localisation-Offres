import React from 'react'
import './style.scss'

function List({ name}) {
  return (
    <div className='list'>
      <div className='list-item'>
        {name}
      </div> 
    </div>
  )
}

export default List