import React from 'react'
import ButtonList from './ButtonList'
import CardContainer from './CardContainer'

const MainContainer = () => {
  return (
    <>
    <div className='ml-2 bg-slate-800 mt-16 w-full max-h-min'>
        <ButtonList/>
        <CardContainer/>
    </div>
    </>
  )
}

export default MainContainer