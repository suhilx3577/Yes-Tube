import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { formatNumber } from '../utils/helpers';

const VideoDetails = () => {

    const [param] = useSearchParams();
    const cid = param.get('c')

    const [channel, setchannel] = useState(null)


    const number = formatNumber(channel?.statistics?.subscriberCount)
    console.log(channel?.snippet?.thumbnails?.default)

    async function getChannelDetail () {
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics%2CcontentDetails&id=${cid}&key=${process.env.YOUTUBE_API_KEY}`)
      const data = await d.json();
      setchannel(data?.items[0])
    }
    useEffect(()=>{
      getChannelDetail();
    },[])
  return (
    <div className='flex flex-col gap-2 bg-red-300 w-[41rem] mt-1'>
        <h1 className='text-2xl font-semibold h-6 py'>Title is sp big and long bro</h1>
        <div className='flex flex-row justify-between py-2'>
            <div className='flex gap-1'>
                <div className='w-10 h-10 rounded-full overflow-hidden flex items-center'>
                    <img src={channel?.snippet?.thumbnails?.default?.url} alt="" />
                </div>
                <div className='text-xs text-gray-700'>
                    <p className='font-bold text-sm'>{channel?.snippet?.title}</p>
                    <p>{number} subscribers</p>
                </div>
                <button className=' ml-1 w-min py-1 h-10 rounded-full bg-slate-700 hover:bg-slate-400 text-white px-3 '>Subscribe</button>
            </div>
            <div className='flex'>
                <div>like</div>
                <div>share</div>
                <div>download</div>
                <div>option</div>
            </div>
        </div>
        <div>
            Description
        </div>
    </div>
  )
}

export default VideoDetails