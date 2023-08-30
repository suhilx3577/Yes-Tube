import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CardContainer = () => {

  const data =  useSelector((state)=>state.container.cdata)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2'>
      {
        data &&
        data?.map((item)=>(
          // <Link key={item.id} to={`/watch?v=${item.id}&c=${item?.snippet?.channelId}`}>
          // <div className='mx-auto'>
          <Link className='mx-auto' key={item?.id?.videoId ? item?.id?.videoId : item?.id} to={`/watch?v=${item?.id?.videoId ? item?.id?.videoId : item?.id}`}>
            <Card key={item?.id} data={item?.snippet} stats={item?.statistics}/> 
          </Link>
          // </div>
        ))
      }
    </div>
  )
}

export default CardContainer