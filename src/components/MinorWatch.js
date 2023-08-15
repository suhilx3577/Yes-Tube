import React ,{useEffect , useState}from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SugCard from './SugCard';
import { useSelector } from 'react-redux';
import useRelatedVideo from '../hooks/useRelatedVideo';

const MinorWatch = () => {
  
  const cid = useSelector(store=>store.container.channelId)
  console.log('Channel id in store from minor is : '+cid)

  const [cList] = useRelatedVideo(cid)
  return (
    <div className='col-span-4 bg-slate-800 flex flex-col gap-3'>

     { 
      cList && cList.map((c)=>(
        <Link key={c.id.videoId ? c.id?.videoId : c.id.channelId } to={`/watch?v=${c.id.videoId}`}>
          <SugCard data={c.snippet}/>
        </Link>
      ))
     }
    </div>
  )
}

export default MinorWatch