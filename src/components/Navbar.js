import React, { useState } from 'react'
import SearchBar from './SearchBar'
import {AiOutlineHome} from 'react-icons/ai'
import {BsStopwatch} from 'react-icons/bs'
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {PiFilmReelLight} from 'react-icons/pi'
import {BiMusic} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {

  const [sideBar, setSideBar] = useState(true)

  return (
    <div className=''>
      <div className={'h-16 fixed w-full bg-slate-800 flex justify-between items-center px-6 py-2 text-white'}>
        <div className='flex gap-5'>
          <ul onClick={()=>{
            setSideBar(!sideBar)
            console.log(sideBar)
          }}>
          <GiHamburgerMenu size={26}/>
          </ul>
          <ul>logo</ul>
        </div>
        <SearchBar />
        <div className='flex gap-8'>
          <ul>switch</ul>
          <ul>bell</ul>
          <ul>user</ul>
        </div>
      </div>
      <div className={ 'fixed mt-16 bg-slate-200 min-h-screen w-52 ml-[-240px] z-10 '+ `${sideBar? '' : 'translate-x-60'}`+' duration-150 transition ease-out'  }>
        sideBar
      </div>
    </div>
  )
}

export default Navbar