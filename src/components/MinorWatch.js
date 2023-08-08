import React ,{useEffect , useState}from 'react'
import { useSearchParams } from 'react-router-dom'
import SugCard from './SugCard';


const MinorWatch = () => {
  
  const [param] = useSearchParams();
  const vid = param.get('v')
  const [cList, setClist ] = useState(null)
  console.log(cList)
  async function getRelatedVideo(){
    try{
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${vid}&maxResults=15&type=video&key=${process.env.YOUTUBE_API_KEY}`)
      const j = await d.json();
      setClist(j?.items)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getRelatedVideo()
  },[])


  return (
    <div className='col-span-4 bg-white flex flex-col gap-1'>

     { 
      cList && cList.map((c)=>(
        <SugCard data={c.snippet}/>
      ))
     }
    </div>
  )
}

export default MinorWatch