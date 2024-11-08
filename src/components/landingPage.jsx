import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function landingPage() {
  return (
    <div className='w-full h-screen bg-zinc-950 border-t-2'>
        <div className='textstructure mt-32 px-20'>
         {["Taking GAMING" , " Sector To" , "New HEIGHTS"].map((item , index)=>{
            return <div className='masker'>
            <div className='w-fit flex items-end '>
                {index===1 && (
                    <div className='mr-1 w-[8vw] rounded-md h-[5.7vw] mb-10 relative bg-green-500'></div>
                )}
                <h1 className='text-[8vw] uppercase leading-[6.8vw] h-full tracking-tighter fontlink font-[Founders_Grotesk_Bold] font-bold'>
                {item}
                </h1>
                </div>
            </div>
         })}
            {/* <div className='masker'>
            <div className='w-fit flex items-center'>
                <h1 className='text-[5.5vw] uppercase leading-[3.5vw] tracking-tighter font-[Founders_Grotesk_Bold] font-bold'>We Create
                </h1>
            </div></div>
            <div className='masker'>
                <h1 className='text-[5.5vw] uppercase leading-[3.5vw]tracking-tighter font-[Founders_Grotesk_X-Condensed] font-bold'>EYE OPENING</h1>
            </div>
            <div className='masker'>
                <h1 className='text-[5.5vw] uppercase leading-[3.5vw] tracking-tighter font-[Founders_Grotesk_X-Condensed] font-bold'>PResentations</h1>
            </div> */}
            <div className='border-t-[1px] border-zinc-800 mt-10 flex justify-between items-center py-5 px-20'>
                {["For public and private companies","From the indie developers",
                ].map((item,index)=>(<p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
                <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] uppercase border-zinc-600 rounded-full font-light text-sm  capatalize'>Showcase the project</div>
        <div className='w-10 h-10 uppercase rounded-full flex items-center justify-center border-[2px] border-zinc-600'>
        <span className='rotate-[45deg]'><FaArrowUpLong /></span>
        </div>
        </div>
            </div>
        </div>
    </div>
  );
}

export default landingPage