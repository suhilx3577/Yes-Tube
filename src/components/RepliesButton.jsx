import React, { useState } from 'react'

const RepliesButton = () => {
    const [isOpen,SetisOpen] = useState(false)
  return (
    <div className='ml-[2.8rem]'>
        <p>Replied Exists</p>
        {
            isOpen && 
            <div>

            </div>
        }
    </div>
  )
}

export default RepliesButton