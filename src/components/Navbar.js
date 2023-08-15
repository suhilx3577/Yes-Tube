import React, { useState } from 'react';
import SearchBar from './SearchBar';
import {AiOutlineHome,AiOutlineBell} from 'react-icons/ai';
import {BsStopwatch} from 'react-icons/bs';
import {BsFillCollectionPlayFill} from 'react-icons/bs';
import {PiFilmReelLight} from 'react-icons/pi';
import {BiMusic,BiUserCircle ,BiVideoPlus} from 'react-icons/bi';
import {HiOutlineBellAlert} from 'react-icons/hi';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import{ImYoutube2} from 'react-icons/im'
import { useDispatch } from 'react-redux';
import { changeContainer } from '../utils/containerSlice';

let logo = require('../../src/ReactLogo.png')

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(true)
  const handleClick = () =>{
    dispatch(changeContainer(null))
    navigate('/')
  }

  return (
    <div className=''>
      <div className={'h-16 fixed w-full z-10 bg-slate-800 flex justify-between items-center px-6 py-2 text-white'}>
        <div className='flex gap-5'>
          <ul onClick={()=>{
            setSideBar(!sideBar)
            // console.log(sideBar)
          }}>
          <GiHamburgerMenu size={26}/>
          </ul>
          <Link to='/'>
            <ul onClick={()=>handleClick()}><img className='w-7 h-7 skew-x-6 ' src={logo} alt="" /></ul>
          </Link>
        </div>
        <SearchBar />
        <div className='flex gap-8 text-2xl '>
          <ul><BiVideoPlus/></ul>
          <ul><AiOutlineBell/></ul>
          <ul ><BiUserCircle/></ul>
        </div>
      </div>
      <div className={ 'fixed mt-16 bg-slate-200 min-h-screen w-52 ml-[-240px] z-10 '+ `${sideBar? '' : 'translate-x-60'}`+' duration-150 transition ease-out'  }>
        sideBar
      </div>
    </div>
  )
}

export default Navbar