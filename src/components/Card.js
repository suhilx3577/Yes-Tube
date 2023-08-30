import React from 'react'
import { get_time_diff } from '../utils/helpers';

const Card = ({data,stats}) => {

    const pub = get_time_diff(data?.publishedAt)

  return (
    <div className=' w-[85vw] h-[75vw] sm:w-[75vw] sm:h-[65vw] md:w-[43vw] md:h-[39vw] lg:w-[27vw] lg:h-[23vw] border-white bg-slate-800 text-white hover:cursor-pointer' >
        <div className='w-full bg-slate-800 h-[60%] rounded-lg'>
           <img  className="w-full h-full rounded-lg" src={data.thumbnails.medium.url} alt="" />
        </div>
        <div className='h-[40%] py-2 w-full bg-slate-800 flex gap-2'>
            <div className=' w-[6vmax] h-[6vmax] lg:w-[3vw] lg:h-[3vw] bg-slate-800  rounded-full'>
                <img src={data?.thumbnails?.default?.url} className='w-full h-full rounded-full' alt="" />
            </div>
            <div className='p-1 w-full '>
                <h1 className='h-10 w-[100%] text-sm  font-bold overflow-hidden'>
                    {data?.title}
                </h1>
                <p className='text-sm font-semibold text-gray-300'>{data?.channelTitle}</p>
                <span className='flex gap-2 text-xs'>
                {
                    stats && 
                    <p className=' text-gray-300'>{Math.floor(stats?.likeCount/1000) +'K Likes'}</p>
                }
                { pub && <p className=' text-gray-300'>{pub +' ago'}</p> }
                </span>
            </div>
        </div>
    </div>
  )
}

export default Card