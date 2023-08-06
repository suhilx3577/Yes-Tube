import React from 'react'
import ButtonList from './ButtonList'
import CardContainer from './CardContainer'

const MainContainer = () => {
  return (
    <div className='bg-slate-800 w-full max-h-min'>
        <ButtonList/>
        <CardContainer/>
    </div>
  )
}

export default MainContainer