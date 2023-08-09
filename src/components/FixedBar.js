import React from 'react';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';

const FixedBar = () => {

  const iconsArray =[
    {
      name:'Home',
      icon:<HomeIcon/>,
    },
    {
      name:'Shorts',
      icon:<SlowMotionVideoIcon/>,
    },
    {
      name:'Subscription',
      icon:<SubscriptionsIcon/>,
    },
    {
      name:'Library',
      icon:<VideoLibraryIcon/>,
    },
    {
      name:'History',
      icon:<RestoreIcon/>,
    },
  ]
  return (
    <div className='h-screen w-20'>
      <div className='bg-slate-800 fixed mt-16 z-0 h-screen w-20'>
        <div className='flex text-white flex-col items-center gap-1'>
          {
            iconsArray.map((i,index)=>(
              <div key={index} className='py-2 w-full h-full flex items-center justify-center flex-col hover:bg-slate-500 hover:cursor-pointer'>
                <span className='text-white text-3xl'>
                  {i.icon}
                </span>
                <span className='text-xs'>
                  {i.name}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FixedBar