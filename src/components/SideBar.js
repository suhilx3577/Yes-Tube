import React from 'react'
import { basic, explore,last } from '../utils/icons'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';

import { changeContainer } from '../utils/containerSlice';
import { Link } from 'react-router-dom';


const SideBar = () => {
  const dispatch = useDispatch();
  function handleClick (item ){
    if(item) dispatch(changeContainer(null))
  }

  return (
    <div className='bg-slate-800 px-2 flex flex-col min-h-screen gap-2 pb-20'>
      {
        basic.map((item) => (
          <Link key = {item.id} to={item?.link}>
          <div onClick={()=>handleClick(item?.link)} className=' hover:bg-slate-500 text-white rounded-lg flex p-2 px-4 gap-5 items-center' >
            {item.icon}
            <p className='text-sm'>{item.name}</p>
          </div>
          </Link>
        ))
      }

      <p className=' border my-2 border-b-black min-w-full'></p>

      <div className='px-4 flex flex-col gap-2 text-white'>
        <p className='text-sm line-clamp-2'> Sign in to like Videos, Comment and Subscribe</p>
        <button className='flex gap-2 rounded-3xl border w-28 hover:bg-slate-500 border-white px-2 py-2 items-center'>
          <AccountCircleIcon />
          <span>Sign in</span>
        </button>
      </div>

      <p className='my-2 border border-b-black min-w-full'></p>

      <div className='flex flex-col gap-2'>
        <h1 className='px-4 text-white font-semibold ' >Explore</h1>
        {
          explore.map((item) => (
            <div key={item.id} className=' hover:bg-slate-500 text-white rounded-lg flex p-2 px-4 gap-5 items-center' >
              {item.icon}
              <p className='text-sm'>{item.name}</p>
            </div>
          ))
        }
      </div>
      <p className='my-2 border border-b-black min-w-full'></p>

      <div>
        {
          last.map((item)=>(
            <div key={item.id} className=' hover:bg-slate-500 text-white rounded-lg flex p-2 px-4 gap-5 items-center' >
              {item.icon}
              <p className='text-sm'>{item.name}</p>
            </div>
          ))
        }
      </div>
      <p className='my-2 border border-b-black min-w-full'></p>

      <div className='px-4 flex flex-col gap-2 text-gray-400'>
        <p className='text-sm'> About Press Copy Right Contact us Creator Advertise Developers</p>
        <p className='text-sm mt-1'>Terms Privacy Policy & Safety How Youtube Works Test New Features</p>
        <p className='text-sm mt-1 text-gray-500'>@2023 Google LLC </p>
      </div>

    </div>
  )
}

export default SideBar