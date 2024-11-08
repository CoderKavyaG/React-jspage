import React from 'react';

function Navbar() {
  const links = [
    { name: "Home", url: "https://open.spotify.com/" },
    { name: "Vault", url: "/work" },
    { name: "About Us", url: "/about" },
    { name: "Gaming News", url: "/insights" },
    { name: "Contact Us", url: "/contact" },
  ];

  return (
    <div className=' z-[999] w-full px-20 py-8 flex justify-between bg-zinc-950 items-center'>
      <div className='logo'>
        <img 
          src="https://i.ibb.co/qg8XMZg/gameipedia-logo.jpg" 
          alt="gameipedia-logo" 
          className="h-12 w-auto" 
          style={{ height: '48px', width: 'auto' }}
        />
      </div>
      <div className='links flex gap-10'>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`text-lg uppercase font-semibold ${index === 4 && "ml-32"}`}
            style={{ color: '#CDEA68' }}  
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
