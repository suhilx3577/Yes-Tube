import React from 'react'
import { get_time_diff } from '../utils/helpers'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

const EachComment = ({ details }) => {
    const { snippet } = details?.snippet?.topLevelComment
    const time = get_time_diff(snippet.publishedAt)

    return (
        <>
            <div className='flex gap-2 items-center text-white'>
                <div className='w-14 h-14 items-center justify-center rounded-full '>
                    <img className='rounded-full' src={snippet?.authorProfileImageUrl} alt="" />
                </div>
                <div className='w-full '>
                    <div className='flex gap-5 items-center'>
                        <span className='font-bold text-sm'>{snippet?.authorDisplayName}</span>
                        <span className='text-xs'>{time} ago</span>
                    </div>
                    <div className='mb-2'>
                        <p className='text-sm mt-1 pr-2 font-semibold'> {snippet?.textDisplay}</p></div>
                    <div className='text-sm flex items-center gap-4'>
                        <div className='flex flex-row items-center gap-2'>
                            <AiFillLike />{snippet?.likeCount}
                        </div>
                            <AiFillDislike />
                        <button className='h-8 rounded-2xl bg-slate-800 hover:bg-slate-500 w-14'>Reply</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EachComment