import React, { useEffect } from 'react'
import MajorWatch from './MajorWatch'
import MinorWatch from './MinorWatch'

const Watch = () => {
  // console.log('Watch Rendered')
  return (
    <div className='overflow-x-hidden'>
      <div className='h-16'>
        Fixing Navbar 
      </div>
      <div className='bg-slate-800 px-16 py-2 w-screen h-screen grid grid-cols-12'>
        <MajorWatch/>
        <MinorWatch/>
      </div>
    </div>
  )
}

export default Watch;