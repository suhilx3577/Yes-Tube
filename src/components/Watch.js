import React, { useEffect } from 'react'
import MajorWatch from './MajorWatch'
import MinorWatch from './MinorWatch'
import { useSearchParams } from 'react-router-dom'

const Watch = () => {

  return (
    <div className='overflow-x-hidden'>
      <div className='h-16'>
        Fixing Navbar 
      </div>
      <div className='bg-slate-500 px-16 py-2 w-screen h-screen grid grid-cols-10'>
        <MajorWatch/>
        <MinorWatch/>
      </div>
    </div>
  )
}

export default Watch;