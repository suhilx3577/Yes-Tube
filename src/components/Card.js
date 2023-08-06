import React from 'react'

const Card = () => {
  return (
    <div className='w-[349px] h-[319px] border-white bg-slate-50 py-1' >
        <div className='w-full bg-slate-400 h-[180px] rounded-lg'>
            img
        </div>
        <div className='h-[100px] bg-amber-400 flex'>
            <div className='w-[48px] bg-green-300'> img </div>
            <div>
                <h1 className='h-9'>
                    this is title sadfljsal;dkfjl;askjd
                </h1>
                <p>Channel Name</p>
                <span className='flex gap-2'>
                    <p>views</p>
                    <p>day</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Card