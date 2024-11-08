import React from 'react'

function Footer() {
  return (
    <div className='flex gap-4 w-full h-screen bg-zinc-950 p-20'>
        <div className='w-1/2 h-full flex flex-col justify-between tracking-tighter font-["Founders_Grotesk "] font-medium'>
            <div className='heading'>
            <h1 className='text-8xl uppercase -mb-4'>FEATURE</h1>
            <h1 className='text-8xl uppercase -mb-4'>YOUR</h1>
            </div>
            <div className='logo'>
        <img 
          src="https://i.ibb.co/qg8XMZg/gameipedia-logo.jpg" 
          alt="gameipedia-logo" 
          className="h-12 w-auto" 
          style={{ height: '48px', width: 'auto' }}
        />
      </div>
        </div>
        <div className='w-1/2'>
        <h1 className='text-8xl uppercase -mb-4'>GAMES NOW        </h1>
        <div className='details font-["Neue_Montreal"] mt-10 flex items-center justify-between '>
                <a className='block text-xl font-light ml-2' href="#">Facebook</a>
                <a className='block text-xl font-light ml-2' href="#">Instagram</a>
                <a className='block text-xl font-light ml-2' href="#">Twitter</a>
            </div>
        </div>
    </div>
  )
}

export default Footer