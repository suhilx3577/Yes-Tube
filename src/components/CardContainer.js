import React, { useEffect, useState } from 'react'
import Card from './Card'
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
          <Card key={item.id} data={item.snippet} stats={item.statistics}/>
        ))
      }
    </div>
  )
}

export default CardContainer