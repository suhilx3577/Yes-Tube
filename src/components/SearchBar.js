import React ,{useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

const SearchBar = () => {
  const[searchQ, setSearchQ] = useState('')
  const[data, setData] = useState()

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

  return (
    <div>
      <div className='h-12  w-[550px] rounded-full bg-slate-500 border-white flex'>
        <input className='text-white border-white py-2 px-4 pl-10 w-full rounded-l-full text-black bg-slate-500 focus:outline-none' onKeyUp={(e)=>{
          setSearchQ(e.target.value)
        }} type="text" 
        placeholder='Search '
        />
        <div className='hover:cursor-pointer flex items-center w-20 px-4 rounded-r-full text-white bg-slate-500 font-bold border-l'>
        <BsSearch className='text-xl'/>
        </div>


      </div>
        {
          data && 
          <div className='rounded-b-lg w-[368px] h-min bg-gray-400 absolute  ml-[1rem] text-black'>
            {data.map((detail,i)=>
            // <Link to={}>
              <ul className='px-2 py-1 '>{detail}</ul>
            // </Link>
            )}
          </div>
        }
    </div>
  )
}

export default SearchBar