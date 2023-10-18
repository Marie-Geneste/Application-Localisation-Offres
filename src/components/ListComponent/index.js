import React from 'react'
import './style.scss'
import List from './List'

function ListComponent({ datas }) {
  return (
    <div className='list-container'>
      <h2 className='list-title'>Repérez votre bar !</h2>
      {
        datas.map((data) => (
          <List key={data.id} {...data} />
        ))
      }
    </div>
  )
}

export default ListComponent