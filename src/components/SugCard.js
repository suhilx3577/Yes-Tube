import React from 'react'
import { get_time_diff } from '../utils/helpers'


const SugCard = ({data}) => {
    const date = get_time_diff(data?.publishTime)
    return (
        <div className='w-full h-32 bg-slate-800 flex flex-row justify-start gap-2'>
            <div className='h-full w-52 rounded-lg bg-gray-600 overflow-hidden'>
                <img src={data?.thumbnails?.high?.url} className="w-52 h-full scale-y-150 rounded-lg object-fill" alt="" />
            </div>
            <div className='max-w-[150px] py-2'>
                <p className='line-clamp-2 font-bold text-white text-sm overflow-hidden'>{data?.title}</p>
                <p className='text-sm mt-2 text-gray-400 font-bold' >{data?.channelTitle}</p>
                <p className='text-xs  text-gray-500 font-semibold' >{date} ago</p>
            </div>
        </div>
    )
}

export default SugCard