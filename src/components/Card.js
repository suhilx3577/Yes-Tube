import React from 'react'
import { get_time_diff } from '../utils/helpers';

const Card = ({data,stats}) => {

    const pub = get_time_diff(data?.publishedAt)

  return (
    <div className='w-[349px] h-[319px] border-white bg-slate-800 text-white hover:cursor-pointer' >
        <div className='w-full bg-slate-800 h-[180px] rounded-lg'>
           <img  className="w-full h-full rounded-lg" src={data.thumbnails.medium.url} alt="" />
        </div>
        <div className='h-[100px] py-2 w-full bg-slate-800 flex gap-2'>
            <div className=' w-[48px] h-[48px] bg-slate-800  rounded-full'>
                <img src={data?.thumbnails?.default?.url} className='w-full h-full rounded-full' alt="" />
            </div>
            <div className='p-1'>
                <h1 className='h-10 w-[276px] text-sm  font-bold overflow-hidden'>
                    {data?.title}
                </h1>
                <p className='text-sm text-gray-300'>{data?.channelTitle}</p>
                <span className='flex gap-2'>
                {
                    stats && 
                    <p className='text-sm text-gray-300'>{Math.floor(stats?.likeCount/1000) +'K Likes'}</p>
                }
                {
                    pub && 
                    <p className='text-sm text-gray-300'>{pub +' ago'}</p>
                }
                </span>
            </div>
        </div>
    </div>
  )
}

export default Card