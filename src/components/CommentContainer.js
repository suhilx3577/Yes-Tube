import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import EachComment from './EachComment';
import useComment from '../hooks/useComment';
const CommentContainer = () => {
    const [param] = useSearchParams();
    const vid = param.get('v');
    const [comment] = useComment(vid);

    return (
        <div className='bg-slate-800 w-[44.5rem] text-white mt-2'>
            <div className='flex w-full bg-slate-800 py-2 items-center'>
                <div className='w-12 h-12 px-2 rounded-full flex items-center overflow-hidden bg-white' >
                    <FaUserAlt className=' text-black h-12 w-12'/>
                </div>
                <div className='px-4 flex flex-col gap-2'>
                    <input className='text-gray-200 border-b bg-slate-800 rounded-lg px-2 w-[37rem] h-8 focus:outline-none'
                     type="text" 
                     placeholder='Add a Comment..'
                     />
                    <div className='flex flex-row-reverse gap-4 font-semibold'>
                        <button className='bg-slate-400 w-24 h-10 py-2 rounded-full'>Comment</button>
                        <button className='hover:bg-slate-600 w-24 h-10 py-2 rounded-full'>Cancel</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    comment &&
                    comment.map((com)=>(<EachComment  key={com.id} details={com}/>))
                }
            </div>
        </div>
    )
}

export default CommentContainer

