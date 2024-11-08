import React from 'react'

function about() {
  return (
    <div className='w-full px-20 py-20 bg-[#cdea68] rounded-tl-2xl rounded-tr-3xl text-black '>
        <h1 className='text-[4vw] fontlink leading-[4.5vw] tracking-tight'>
        Gameipedia is one hub platform for forward-
        thinking gaming businesses that need to showcase games, looking
        for users, indie developers, and feature your games.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a2b663] '>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='flex uppercase gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-5xl oveflow-hidden'>
            <img
                className="w-full h-full bg-cover"
                src="https://i.ibb.co/mJkwJCb/game4.jpg"
                alt=""
              />
            </div>
        </div>
    </div>
  )
}

export default about