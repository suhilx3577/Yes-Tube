import React, { useEffect } from 'react'
import MajorWatch from './MajorWatch'
import MinorWatch from './MinorWatch'

const Watch = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='h-16'>
        Fixing Navbar 
      </div>
      <div className=' w-screen h-screen bg-slate-800 px-6 lg:px-16 py-2 flex flex-row gap-5 items-center flex-wrap xl:grid grid-cols-12'>
        <MajorWatch/>
        <MinorWatch/>
      </div>
    </div>
  )
}

export default Watch;