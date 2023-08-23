import React from 'react'
import { Link  } from 'react-router-dom'
import SugCard from './SugCard';
import { useSelector } from 'react-redux';
import useRelatedVideo from '../hooks/useRelatedVideo';

const MinorWatch = () => {
  
  // const cid = useSelector(store=>store.container.channelId)
  const query = useSelector(store=>store.container.ch_query)
  const [cList] = useRelatedVideo(query)
  return (
    <div className='col-span-4 bg-slate-800 flex overflow-hidden flex-col gap-3'>

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