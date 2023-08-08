import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { formatNumber } from '../utils/helpers';
  
const VideoDetails = () => {
    const [channel, setchannel] = useState(null)
    const [cid , setCid] = useState(null)
    const [videoDetails, setVideoDetails] = useState(null)

    const [param] = useSearchParams();
    const vid = param.get('v')

    const number = formatNumber(channel?.statistics?.subscriberCount)

    async function getChannelDetail () {
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics%2CcontentDetails&id=${cid}&key=${process.env.YOUTUBE_API_KEY}`)
      const data = await d.json();
      console.log(data)
      if(cid!==null){
        setchannel(data.items[0])
      }
    }

    async function getVideoDetail () {
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vid}&key=${process.env.YOUTUBE_API_KEY}`)
      const data = await d.json();
      // console.log(data)
      setVideoDetails(data?.items[0])
      setCid(data?.items[0]?.snippet?.channelId)
    }
    useEffect(()=>{
      getVideoDetail();
    },[])

    useEffect(()=>{
      if(videoDetails!==null){
        getChannelDetail();
      }
    },[videoDetails])


  return (
    <div className='flex flex-col gap-2 bg-red-300 w-[44.5rem] mt-1'>
        <h1 className='text-xl leading-2 font-semibold '>{videoDetails?.snippet?.title}</h1>
        <div className='flex flex-row justify-between py-2'>
            <div className='flex gap-1'>
                <div className='w-10 h-10 rounded-full overflow-hidden flex items-center'>
                    <img src={channel?.snippet?.thumbnails?.default?.url} alt="" />
                </div>
                <div className='text-xs text-gray-700'>
                    <p className='font-bold text-sm'>{channel?.snippet?.title}</p>
                    <p>{number} subscribers</p>
                </div>
                <button className=' ml-1 w-min h-10 rounded-full bg-slate-700 hover:bg-slate-400 text-white px-3 '>Subscribe</button>
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