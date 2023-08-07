import React ,{useEffect , useState}from 'react'
import { useSearchParams } from 'react-router-dom'


const MinorWatch = () => {
  
  const [param] = useSearchParams();
  const vid = param.get('v')

  async function getRelatedVideo(){
    try{
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${vid}&maxResults=15&type=video&key=${process.env.YOUTUBE_API_KEY}`)
      const j = await d.json();
      console.log(j)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getRelatedVideo()
  },[])



  return (
    <div className='col-span-3'>
        suggestion
    </div>
  )
}

export default MinorWatch