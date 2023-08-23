// THIS SAME FUNCTION CAN BE USED TO GET VIDEOS BASED ON VIDEOID .
// BUT BY DEFAULT ITS GET BY CHANNEL ID

import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';

async function getRelatedVideo(setClist,input){
    try{
      // CURRENTLY GET BY VIDEO ID FEATURE OF YOUTUBE API IS STOPPED. SO IM USING GET BY CHANNEL ID
      // CHANGIN GETTING THE RELATIED VIDEOS BY CHANNEL ID TO TITLE. So now we are getting related videos by title of video in MAJOR

      // 1st URL// const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${vid}&maxResults=15&type=video&key=${process.env.YOUTUBE_API_KEY}`)     //->working
      // const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoDuration=medium&maxResults=25&type=video&channelId=${cid}&key=${process.env.YOUTUBE_API_KEY}`);                         //->trial 2
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&videoDuration=medium&q=${input}&key=${process.env.YOUTUBE_API_KEY}`);             //->trial 3 using Video Title as SearchQuery


      const j = await d.json();
      setClist(j?.items)
    }
    catch(error){
      console.log(error)
    }
  }

export default function useRelatedVideo (input) {

    // const [param] = useSearchParams();
    // const vid = param.get('v')                                   // Used to get the Related Videos based on the VideoId 
    const [cList, setClist ] = useState(null)
    
    useEffect(()=>{
      if(input!==null) getRelatedVideo(setClist,input)
    },[input])

    return [cList, setClist];
}