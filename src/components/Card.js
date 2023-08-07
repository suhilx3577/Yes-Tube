import React, { useEffect } from 'react'
import { get_time_diff } from '../utils/helpers';

const Card = ({data,stats}) => {
    // console.log(data)
    // useEffect(()=>{
    //     // const data = fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key='+process.env.YOUTUBE_API_KEY)
    // },[])

    const pub = get_time_diff(data.publishedAt)
    console.log(pub)

  return (
    <div className='w-[349px] h-[319px] border-white bg-slate-800 text-white hover:cursor-pointer' >
        <div className='w-full bg-slate-800 h-[180px] rounded-lg'>
           <img  className="w-full h-full rounded-lg" src={data.thumbnails.medium.url} alt="" />
        </div>
        <div className='h-[100px] py-2 w-full bg-slate-800 flex gap-2'>
            <div className=' w-[48px] h-[48px] bg-slate-800  rounded-full'>
                <img src={data.thumbnails.default.url} className='w-full h-full rounded-full' alt="" />
            </div>
            <div className='p-1'>
                <h1 className='h-10 w-[276px] text-sm  font-bold overflow-hidden'>
                    {data.title}
                </h1>
                <p className='text-sm text-gray-300'>{data.channelTitle}</p>
                <span className='flex gap-2'>
                    <p className='text-sm text-gray-300'>{Math.floor(stats.likeCount/1000) +'K Likes'}</p>
                    <p className='text-sm text-gray-300'>{pub +' ago'}</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Card