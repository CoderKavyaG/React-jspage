// import React from 'react'

// function Cards() {
//   return (
//     <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
//         <div className='cardcontainer h-[50vh] w-1/2'>
//             <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center'>
//                 <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
//                 <button className='absolute rounded-full px-5 py-1 border-2 left-10 bottom-10'>&copy;2022-2023</button>
//             </div>
//         </div>
//         <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
//             <div className='card relative flex items-center justify-center w-full rounded-xl h-full bg-[#192826]'>
//             <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
//                 <button className='absolute rounded-full px-5 py-1 border-2 left-10 bottom-10'>&copy;2022-2023</button>
//             </div>
//             <div className='card relative flex items-center justify-center w-full rounded-xl h-full bg-[#192826]'>
//             <img className='w-32' src="https://assets-global.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg" alt="" />
//                 <button className='absolute rounded-full px-5 py-1 border-2 left-10 bottom-10'>&copy;2022-2023</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Cards


import React from 'react';

function Cards() {
  // Array of cards with new image sources and captions
  const cardData = [
    {
      imgSrc: "https://imgs.search.brave.com/YqtYZ3RPZYTpiB8r28Jb_cWsc6Dt5GlQlvL9jrPR8j8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FtZXNwb3QuY29t/L2EvdXBsb2Fkcy9z/Y2FsZV9zdXBlci8x/NjAxLzE2MDE4MDQ0/LzQzOTE4NTUtYmxv/cHMtNi5qcGc",
      label: "Call of Duty - Black Ops",
      title: "Trending Game of The Month",
    },
    {
      imgSrc: "https://imgs.search.brave.com/Ed6jGUy_xMNOzQJWdxlF8DxJOSqT_5IwBlOnuDRuLiU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90d2lu/ZmluaXRlLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/MS9NYXNzLUVmZmVj/dC1MZWdlbmRhcnkt/RWRpdGlvbi1LZXkt/QXJ0LTEuanBnP3Jl/c2l6ZT05OTEsNTU3",
      label: "TWINFIGHT",
      title: "It has Successfully Passed 1M+ Downloads",
    },
    {
      imgSrc: "https://imgs.search.brave.com/gxBMuyTPPe-hBspsw-LUZYQsy4s5Wph-IbzjfYYJA4E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzU0NDEx/Y2I2MWFhODdhNGZh/ZmU0ZWFiMzkwZGZl/YWU1YjA3M2ZhZjUv/MzJfMF8xMTM3XzY4/Mi9tYXN0ZXIvMTEz/Ny5qcGc_d2lkdGg9/NDQ1JmRwcj0xJnM9/bm9uZQ",
      label: "CODENAMES",
      title: "Brought Boom Through Immersive Styles",
    },
    {
      imgSrc: "https://imgs.search.brave.com/1buC25A-I3D37tbbvZh6KcbwYVq6IiIaxVvhFsk2cbE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS52b3guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9zaXRl/cy8yLzIwMjQvMDkv/c2M4aTljLmpwZz9x/dWFsaXR5PTkwJnN0/cmlwPWFsbCZjcm9w/PTcuODEyNSwwLDg0/LjM3NSwxMDAmdz0y/NDAw",
      label: "BLACK MYTH:WUKONG",
      title: "Action Game of The Month",
    },
    {
      imgSrc: "https://imgs.search.brave.com/7oEIzTMO7QjSLdFAp015OsNmH3zeR2FCvGbtYNvVHC0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5hcGkucGxheXN0/YXRpb24uY29tL3Z1/bGNhbi9hcC9ybmQv/MjAyMTExLzMwMTMv/YnhTajRqTzBLQnFV/Z0FiSDN6dU5qQ2pl/LmpwZw",
      label: "CYBERPUNK 2077",
      title: "Game with Most Critical Reviews",
    },
    {
      imgSrc: "https://imgs.search.brave.com/zXXRV9HOIjER_2SYj85DpXvwYvq9ZSp-zo9NsXFSbl4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcm9k/LmFzc2V0cy5lYXJs/eWdhbWVjZG4uY29t/L2ltYWdlcy93b2x2/ZXJpbmUtZ2FtZS1y/LXJhdGVkLmpwZz90/cmFuc2Zvcm09YXJ0/aWNsZV93ZWJwJng9/MC41Jnk9MC41",
      label: "WOLVERINE SAGA",
      title: "HYPED GAME",
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-900 px-32 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardData.map((card, index) => (
          <div key={index} className="cardcontainer h-[50vh] p-4">
            <div className="card relative w-full h-full bg-[#192826] rounded-xl flex flex-col items-center justify-center overflow-hidden">
              <img className="w-full h-3/5 object-cover rounded-t-xl" src={card.imgSrc} alt="Card Image" />
              <div className="text-content p-4 text-center text-white">
                <span className="block font-semibold text-sm text-gray-400 mb-2">{card.label}</span>
                <h3 className="text-lg font-medium">{card.title}</h3>
              </div>
              <button className="absolute rounded-full px-5 py-1 border-2 left-5 -bottom-10 text-white">&copy;2022-2023</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

