import React ,{useEffect, useState}from 'react';
import { useDispatch } from 'react-redux';
import {BsSearch} from 'react-icons/bs';
import { changeContainer } from '../utils/containerSlice';
import { redirect, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const[searchQ, setSearchQ] = useState('')
  const[data, setData] = useState('')
  const[open, setOpen] = useState(false)
  const dispatch = useDispatch();


  async function getSuggestion(param){
    const d = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+searchQ)
    const j = await d.json();
    console.log(j[1]);
    setData(j[1])
  }

  useEffect(()=>{
    let timer = setTimeout(()=>{
      getSuggestion(searchQ)
    },200)

    return ()=>{
      clearTimeout(timer)
    }
  },[searchQ])



  async function getQueryResults(){
    const d = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${searchQ}&key=${process.env.YOUTUBE_API_KEY}`);
    const data = await d.json();
    dispatch(changeContainer(data.items))
    setSearchQ('')
    navigate('/')
  }

function handleSearch(){
  getQueryResults(searchQ);

}

  function handleClick (detail) {
    console.log(detail)
    setSearchQ(detail)
    setOpen(false)
  }

  return (
    <div>
      <div className='h-12  w-[550px] rounded-full bg-slate-500 border-white flex'>
        <input className='text-white border-white py-2 px-4 pl-10 w-full rounded-l-full bg-slate-500 focus:outline-none' onKeyUp={(e)=>{
          setSearchQ(e.target.value)
        }} type="text" 
        placeholder='Search '
        onFocus={()=>setOpen(true)}
        value={searchQ}
        onChange={(e)=>setSearchQ(e.target.value)}
        // onBlur={()=>setOpen(false)}
        />
        <div onClick={()=>handleSearch(searchQ)} className='hover:cursor-pointer flex items-center w-20 px-4 rounded-r-full text-white bg-slate-500 font-bold border-l'>
        <BsSearch className='text-xl' />
        </div>

      </div>
        {
          open && 
          <div className='rounded-b-lg w-[368px] h-min bg-gray-400 absolute   ml-[1rem] text-black'>
            {data.map((detail,i)=>
            <div  onClick={()=> handleClick(detail)} key={detail} className='hover:cursor-pointer hover:bg-gray-500 '>
              <ul className='px-2 py-1 '>{detail}</ul>
            </div>
            )}
          </div>
        }
    </div>
  )
}

export default SearchBar