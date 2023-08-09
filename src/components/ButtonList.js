import React ,{useEffect, useState}from 'react'
import { useDispatch } from 'react-redux'
import { changeContainer } from '../utils/containerSlice';

const ButtonList = () => {
  const dispatch = useDispatch();

  const arr = ['Shreya Goshal', 'Web Development', 'Namaste JS','1-D', 'PUBG', 'Music','One Direction','Breakup Songs', 'Cricket','DSA' ]
  const [query,setQuery] = useState(null)
  console.log('button rendered')

  async function getQueryResults(){
    const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${process.env.YOUTUBE_API_KEY}`);
    const data = await d.json();
    dispatch(changeContainer(data.items))
    console.log(data.items)
  }

  useEffect(()=>{
    if(query) getQueryResults();
  },[query])

  return (
    <div className='flex gap-3 px-4 h-14 items-center overflow-scroll no-scrollbar'>
      {
        arr.map((name,i)=>(
          <button key={i} 
            onClick={()=> setQuery(name)}
            className='h-10 whitespace-nowrap w-min rounded-lg hover:bg-slate-500 hover:text-slate-200 bg-slate-900 text-white px-4 py-2 transition ease-in duration-300'>
            {name}
          </button>
        ))
      }
    </div>
  )
}

export default ButtonList