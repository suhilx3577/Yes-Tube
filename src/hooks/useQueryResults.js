import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { changeContainer } from '../utils/containerSlice';


export default function useQueryResults (query) {
    const dispatch = useDispatch();
  
    async function getQueryResults(){
      const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${process.env.YOUTUBE_API_KEY}`);
      const data = await d.json();
      dispatch(changeContainer(data.items))
    }
  
    useEffect(()=>{
      if(query) getQueryResults();
    },[query])

}