import React from 'react'

const Replies = ({details}) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex gap-2 items-center'>
                <div className='w-10 h-10 items-center justify-center rounded-full '>
                    <img className='rounded-full' src={details?.authorProfileImageUrl} alt="" />
                </div>
                <div className='w-full'>
                    <div>
                        <span className='font-bold text-sm'>{details?.authorDisplayName}</span><span>time</span>
                    </div>
                    <div className='mb-2'>
                        <p className='text-sm'> {details?.textDisplay}</p></div>
                    <div>{details?.likeCount}-likes and dislike</div>
                </div>
            </div>
        </div>
    )
}

export default Replies