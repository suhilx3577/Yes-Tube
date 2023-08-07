import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
const CardContainer = () => {

  const [ data, setData] = useState('')

  async function fetchData (){
    const d = await fetch(process.env.YOUTUBE_API_URLANDKEY);
    const j = await d.json();
    setData(j.items)
    console.log(j.items)

  }
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className='grid grid-cols-3 gap-2 mt-2'>
      {
        data &&
        data?.map((item)=>(
          <Link key={item.id} to={`/watch?v=${item.id}&c=${item?.snippet?.channelId}`}>
          <Card key={item.id} data={item.snippet} stats={item.statistics}/> 
          </Link>
        ))
      }
    </div>
  )
}

export default CardContainer