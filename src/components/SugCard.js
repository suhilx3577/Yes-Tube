import React from 'react'

const SugCard = ({data}) => {
    console.log(data)
    return (
        <div className='w-full h-32 bg-red-600 flex flex-row justify-start gap-2'>
            <div className='h-full w-52 rounded-lg bg-pink-300 overflow-hidden'>
                <img src={data?.thumbnails?.maxres?.url} className="w-52 h-full rounded-lg object-fill" alt="" />
            </div>
            <div className='max-w-[100px]'>
                <p className='line-clamp-2 font-bold text-sm overflow-hidden'>{data?.title}</p>
                <p>{data?.channelTitle}</p>
                <div>
                    <p>Views </p>
                    <p>Publish</p>
                </div>
            </div>
        </div>
    )
}

export default SugCard