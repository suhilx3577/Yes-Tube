import React,{useState,useEffect} from 'react'
import FixedBar from './FixedBar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'
import useFetchContainer from '../hooks/useFetchContainer'

const FrontContainer = () => {
  
  const cdata = useSelector((state)=>state.container.cdata)
  useFetchContainer(cdata);

  return (
    <>
        <div className='flex flex-row overflow-x-hidden'>
          <FixedBar />
          <MainContainer />
        </div>

    </>
  )
}

export default FrontContainer