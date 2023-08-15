// THIS SAME FUNCTION CAN BE USED TO GET VIDEOS BASED ON VIDEOID .
// BUT BY DEFAULT ITS GET BY CHANNEL ID

import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
async function getRelatedVideo(setClist,cid,vid){
    try{
      // CURRENTLY GET BY VIDEO ID FEATURE OF YOUTUBE API IS STOPPED. SO IM USING GET BY CHANNEL ID
      // const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${vid}&maxResults=15&type=video&key=${process.env.YOUTUBE_API_KEY}`)     //->working
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&channelId=${cid}&key=${process.env.YOUTUBE_API_KEY}`);                         //->trial 2
      const j = await d.json();
      setClist(j?.items)
    }
    catch(error){
      console.log(error)
    }
  }

export default function useRelatedVideo (cid) {

    const [param] = useSearchParams();
    const vid = param.get('v')                                   // Used to get the Related Videos based on the VideoId 
    const [cList, setClist ] = useState(null)
    
    useEffect(()=>{
    getRelatedVideo(setClist,cid,vid)
    },[cid])

    return [cList, setClist];
}