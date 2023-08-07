import React ,{useEffect, useState}from 'react'

const SearchBar = () => {
  const[searchQ, setSearchQ] = useState('')
  const[data, setData] = useState()

  async function getSuggestion(param){
    const d = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+searchQ)
    const j = await d.json();
    console.log(j)
    setData(j[1])
    console.log(data)
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
        <input className='py-2 px-4 w-96 rounded-l-full text-black focus:outline-none' onKeyUp={(e)=>{
          setSearchQ(e.target.value)
        }} type="text" />
        <button className='bg-white py-2 px-4 rounded-r-full text-black border border-black' >SEARCH</button>
        {
          data && 
          <div className='rounded-b-lg w-[368px] h-min bg-gray-400 absolute  ml-[1rem] text-black'>
            {data.map((detail,i)=>
            <ul className='px-2 py-1 '>{detail}</ul>
            )}
          </div>
        }
    </div>
  )
}

export default SearchBar