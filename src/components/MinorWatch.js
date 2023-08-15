import React ,{useEffect , useState}from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SugCard from './SugCard';
import { useSelector } from 'react-redux';


const MinorWatch = () => {
  
  const [param] = useSearchParams();
  const vid = param.get('v')
  const cid = useSelector((state)=>state.container.channelId)

  const [cList, setClist ] = useState(null)
  async function getRelatedVideo(){
    try{
      // UCKZSn5C-RzrLjuWJF8wWiDw
      // const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${vid}&maxResults=15&type=video&key=${process.env.YOUTUBE_API_KEY}`)     //->working
      // const d = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${vid}&type=video&key=${process.env.YOUTUBE_API_KEY}`);                      //->trial 1
      // const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=oneDirection&key=${process.env.YOUTUBE_API_KEY}`);                        //->trial 2
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&channelId=${cid}&key=${process.env.YOUTUBE_API_KEY}`);                         //->trial 2
      const j = await d.json();
      setClist(j?.items)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getRelatedVideo()
  },[cid])


  return (
    <div className='col-span-4 bg-slate-800 flex flex-col gap-3'>

     { 
      cList && cList.map((c)=>(
        <Link key={c.id.videoId ? c.id?.videoId : c.id.channelId} to={`/watch?v=${c.id.videoId}`}>
          <SugCard data={c.snippet}/>
        </Link>
      ))
     }
    </div>
  )
}

export default MinorWatch