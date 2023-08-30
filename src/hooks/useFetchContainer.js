import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeContainer } from "../utils/containerSlice";


export default function useFetchContainer (cdata) {
    const dispatch  = useDispatch();

    async function fetchData (){
        const d = await fetch(process.env.YOUTUBE_API_URL+process.env.YOUTUBE_API_KEY);
        const j = await d.json();
        dispatch(changeContainer(j.items))
      }

    useEffect(()=>{
    if(cdata==null) fetchData()
    },[cdata])

}