import React,{useState,useEffect} from 'react'
import FixedBar from './FixedBar'
import MainContainer from './MainContainer'
import { useDispatch, useSelector } from 'react-redux'
import { changeContainer } from '../utils/containerSlice'
import useFetchContainer from '../hooks/useFetchContainer'

const FrontContainer = () => {
  
  const cdata = useSelector((state)=>state.container.cdata)
  
  useFetchContainer(cdata);
  
  // const dispatch = useDispatch();
  // async function fetchData (){
  //   const d = await fetch(process.env.YOUTUBE_API_URL+process.env.YOUTUBE_API_KEY);
  //   const j = await d.json();
  //   dispatch(changeContainer(j.items))

  // }
  // useEffect(()=>{
  //   if(cdata==null) fetchData()
  // },[cdata])

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