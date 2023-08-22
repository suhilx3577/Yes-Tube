import React,{useState,useEffect} from 'react'
import FixedBar from './FixedBar'
import MainContainer from './MainContainer'
import { useDispatch, useSelector } from 'react-redux'
import { changeContainer } from '../utils/containerSlice'
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