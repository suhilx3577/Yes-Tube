import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <input className='py-2 px-4 w-96 rounded-l-full' type="text" />
        <button className='bg-white py-2 px-4 rounded-r-full text-black border border-black' >SEARCH</button>
    </div>
  )
}

export default SearchBar