import { useEffect, useState } from "react";

export default function useChannelDetails (cid) {
  // console.log('channel id from useChannelDetails  :'+cid)
  async function getChannelDetail (cid,setChannel) {
    if(cid!==null){
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics%2CcontentDetails&id=${cid}&key=${process.env.YOUTUBE_API_KEY}`)
      const data = await d.json();
        setChannel(data?.items[0])
      }
    }

  const[channel,setChannel] = useState(null)

    useEffect(()=>{
        getChannelDetail(cid,setChannel);
      },[cid]);
    
    return [channel];
}