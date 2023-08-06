import React from 'react'
import Card from './Card'
const CardContainer = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardContainer