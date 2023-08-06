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
    },400)

    return ()=>{
      clearTimeout(timer)
    }
  },[searchQ])

  return (
    <div>
        <input className='py-2 px-4 w-96 rounded-l-full text-black' onKeyUp={(e)=>{
          setSearchQ(e.target.value)
        }} type="text" />
        <button className='bg-white py-2 px-4 rounded-r-full text-black border border-black' >SEARCH</button>
        {
          data && 
          <div className='w-96 h-96 bg-gray-400 fixed  ml-[1rem]'>
            {
              data.map((detail,i)=>{
                <li key={i}> {detail}</li>
              })
            }
          </div>
        }
    </div>
  )
}

export default SearchBar