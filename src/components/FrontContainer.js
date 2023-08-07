import React from 'react'
import FixedBar from './FixedBar'
import MainContainer from './MainContainer'

const FrontContainer = () => {
  return (
    <div className='flex flex-row overflow-x-hidden'>
      <FixedBar/>
      <MainContainer/>
    </div>
  )
}

export default FrontContainer