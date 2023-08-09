import React,{useState,useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { formatNumber ,get_time_diff} from '../utils/helpers';
import {BsDownload} from 'react-icons/bs';
import {BiShare} from 'react-icons/bi';
import {SlOptions} from 'react-icons/sl';
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

const VideoDescrpt = () => {

    const [channel, setchannel] = useState(null)
    const [cid , setCid] = useState(null)
    const [vDetails, setVDetails] = useState(null)

    const [param] = useSearchParams();
    const vid = param.get('v')

    const number = formatNumber(channel?.statistics?.subscriberCount)
    const time = get_time_diff(vDetails?.snippet?.publishedAt)

    async function getChannelDetail () {
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics%2CcontentDetails&id=${cid}&key=${process.env.YOUTUBE_API_KEY}`)
      const data = await d.json();
      // console.log(data)
      if(cid!==null){
        setchannel(data?.items[0])
      }
    }

    async function getVideoDetail () {
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vid}&key=${process.env.YOUTUBE_API_KEY}`)
      const data = await d.json();
      console.log(data?.items[0])
      setVDetails(data?.items[0])
      setCid(data?.items[0]?.snippet?.channelId)
    }
    useEffect(()=>{
      getVideoDetail();
    },[])

    useEffect(()=>{
      if(vDetails!==null){
        getChannelDetail();
      }
    },[vDetails]);


    const viewCount = formatNumber(vDetails?.statistics?.viewCount)

  return (
    <div className='flex flex-col gap-2 bg-slate-800 w-[44.5rem] mt-1 text-white'>
        <h1 className='text-xl leading-2 font-semibold '>{vDetails?.snippet?.title}</h1>
        <div className='flex flex-row justify-between py-2'>
            <div className='flex gap-2'>
                <div className='w-10 h-10 rounded-full overflow-hidden flex items-center'>
                    <img src={channel?.snippet?.thumbnails?.default?.url} alt="" />
                </div>
                <div className='text-xs text-white'>
                    <p className='font-bold text-sm'>{channel?.snippet?.title}</p>
                    <p>{number} subscribers</p>
                </div>
                <button className=' ml-1 w-min h-10 rounded-full bg-slate-700 hover:bg-slate-400 text-white px-3 '>Subscribe</button>
            </div>
            <div className='flex gap-2' >

                <div className='flex text-lg items-center bg-slate-700 w-24 h-10 px-2 rounded-full '>
                  <AiFillLike/>
                  <p className='text-sm font-semibold'>358K   |</p>
                  <AiFillDislike/>
                </div>
                  <div className='w-20 px-2 rounded-full bg-slate-700 flex items-center justify-center text-lg' ><BiShare/><p className='text-base font-semibold'>Share</p></div>
                  <div className='w-28 px-2 rounded-full bg-slate-700 flex items-center justify-center gap-2 text-lg' ><BsDownload className='font-bold'/><p className='text-base font-semibold'>Download</p></div>
                 <div className='w-10 bg-slate-700 flex items-center justify-center rounded-full'><SlOptions/></div>
            </div>
        </div>
        <div className='min-w-min  p-4 rounded-2xl bg-slate-700 '>
          <div className='flex gap-4 text-sm items-center '>
            <p>{viewCount} views</p>
            <p>{time}</p>
          </div>
          <p className='mt-4'>{vDetails?.snippet?.description}</p>
        </div>
    </div>
  )
}

export default VideoDescrpt;