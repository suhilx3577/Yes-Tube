import React,{useState,useEffect} from 'react'
import FixedBar from './FixedBar'
import MainContainer from './MainContainer'
import { useDispatch, useSelector } from 'react-redux'
import { changeContainer } from '../utils/containerSlice'

const FrontContainer = () => {
  const dispatch = useDispatch();
  const[data,setData] = useState(null)
  const cdata = useSelector((state)=>state.container.cdata)


  async function fetchData (){
    const d = await fetch(process.env.YOUTUBE_API_URLANDKEY);
    const j = await d.json();
    console.log(j.items[0])
    dispatch(changeContainer(j.items))
    setData(j.items)

  }
  console.log('rendered front container')
  useEffect(()=>{
    if(cdata==null) fetchData()
  },[cdata])

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