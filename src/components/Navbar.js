import React, { useState } from 'react';
import SearchBar from './SearchBar';
import {AiOutlineBell} from 'react-icons/ai';
import {BiUserCircle ,BiVideoPlus} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeContainer } from '../utils/containerSlice';
import SideBar from './SideBar';

let darkmodelogo = require('../../src/ok.jpg')

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(true)

  
  const handleClick = () =>{
    dispatch(changeContainer(null))
    navigate('/')
  }

  return (
    <div >
      <div className='h-16 fixed w-full z-10 bg-slate-800 flex justify-between items-center px-6 py-2 text-white'>
        <div className='flex gap-5 items-center'>

          {/* SIDEBAR */}
          <div>
            <span onClick={()=>{
              setSideBar(!sideBar)
            }}>
            <GiHamburgerMenu size={26} className='w-10 h-10 p-2 hover:bg-slate-600 rounded-full'/>
            </span>
          </div>

          {/* LOGO */}
          <div className='hidden lg:block'>
            <Link to='/'>
              <ul onClick={()=>handleClick()}><img className='w-24 h-10 mix-blend-multiply' src={darkmodelogo} alt="" /></ul>
            </Link>
          </div>

        </div>
        <SearchBar />
        <div className=' hidden md:flex gap-5 text-2xl '>
          <BiVideoPlus className='w-10 h-10 p-2 hover:bg-slate-600 rounded-full'/>
          <AiOutlineBell className='w-10 h-10 p-2 hover:bg-slate-600 rounded-full' />
          <BiUserCircle className='w-10 h-10 p-2 hover:bg-slate-600 rounded-full'/>
        </div>
      </div>

      {/* sideBar  */}
      <div className={ 'fixed mt-16 bg-slate-200 h-screen overflow-y-scroll w-64 ml-[-260px] z-10 '+ `${sideBar? '' : 'translate-x-64'}`+' duration-150 transition ease-out'  }>
        <SideBar/>
      </div>
    </div>
  )
}

export default Navbar