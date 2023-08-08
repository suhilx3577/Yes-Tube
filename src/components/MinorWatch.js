import React ,{useEffect , useState}from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SugCard from './SugCard';


const MinorWatch = () => {
  
  const [param] = useSearchParams();
  const vid = param.get('v')

  const [cList, setClist ] = useState(null)

  // console.log(' Minor rendered')
  async function getRelatedVideo(){
    try{
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${vid}&maxResults=15&type=video&key=${process.env.YOUTUBE_API_KEY}`)
      const j = await d.json();
      setClist(j?.items)
      // console.log('api call made')
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getRelatedVideo()
  },[vid])


  return (
    <div className='col-span-4 bg-slate-800 flex flex-col gap-3'>

     { 
      cList && cList.map((c)=>(
        <Link key={c.id.videoId} to={`/watch?v=${c.id.videoId}`}>
          <SugCard data={c.snippet}/>
        </Link>
      ))
     }
    </div>
  )
}

export default MinorWatch