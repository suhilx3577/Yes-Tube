import React from 'react'

const ButtonList = () => {
  const arr = ['Games', 'All Music', 'RajiniKanth','Raja', 'Rani', 'Pubg','MadBoy','All Msuic', 'RajiniKanth','Raja']
  return (
    <div className='flex gap-8 h-14 items-center'>
      {
        arr.map((name,i)=>(
          <button key={i} 
            className='h-10 whitespace-nowrap w-min rounded-lg hover:bg-slate-500 hover:text-slate-200 bg-black text-white px-4 py-2 transition ease-in duration-300'>
            {name}
          </button>
        ))
      }
    </div>
  )
}

export default ButtonList