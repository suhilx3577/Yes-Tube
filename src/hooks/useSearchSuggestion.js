import { useState , useEffect} from "react";

export default function useSearchSuggestion (searchQ) {
    async function getSuggestion(searchQ,setData){
        const d = await fetch('https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+searchQ)
        const j = await d.json();
        setData(j[1])
    }
    const [data,setData] = useState()
    useEffect(()=>{
        let timer = setTimeout(()=>{
            getSuggestion(searchQ,setData)
        },200)

        return ()=>{
            clearTimeout(timer)
        }
    },[searchQ])
    return [data]
}