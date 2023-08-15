import React ,{useEffect, useState}from 'react'
import { useDispatch } from 'react-redux'
import { changeContainer } from '../utils/containerSlice';
import useQueryResults from '../hooks/useQueryResults';

const ButtonList = () => {

  const arr = ['Shreya Goshal', 'Web Development', 'Namaste JS','1-D', 'PUBG', 'Music','One Direction','Breakup Songs', 'Cricket','DSA' ]

  const [query,setQuery] = useState(null)
  useQueryResults(query);

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