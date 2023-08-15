import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { changecId } from '../utils/containerSlice';


async function getVideoDetail (vid,setVDetails,dispatch) {
  const d = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vid}&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await d.json();
  setVDetails(data?.items[0])
  dispatch(changecId(data?.items[0]?.snippet?.channelId))
}

export default function useVideoDetails (vid){
    const dispatch = useDispatch();
    const [vDetails, setVDetails] = useState(null)
    useEffect(()=>{
    getVideoDetail(vid,setVDetails,dispatch);
    },[])

    return [vDetails]
}

