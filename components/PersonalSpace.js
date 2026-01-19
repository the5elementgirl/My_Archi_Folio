import React from "react";
import Link from "next/link";

export default function PersonalSpace() {
  const scraps = [
    { title: "Architecture", color: "bg-stone-50", rotate: "-rotate-2", top: "15%", left: "8%", link: "/personal-space/architecture" },
    { title: "Designer", color: "bg-yellow-50", rotate: "rotate-3", top: "20%", left: "65%", link: "/personal-space/designer" },
    { title: "Artist", color: "bg-rose-50", rotate: "-rotate-6", top: "65%", left: "10%", link: "/personal-space/artist" },
    { title: "Wanderer", color: "bg-emerald-50", rotate: "rotate-1", top: "72%", left: "62%", link: "/personal-space/wanderer" },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 p-4 md:p-10 flex items-center justify-center overflow-hidden font-serif">
      {/* The Main Board (Light wood/Paper board look) */}
      <div className="relative w-full max-w-6xl aspect-[16/10] bg-[#d7ccc8] shadow-2xl border-[16px] border-[#3e2723] overflow-hidden rounded-sm">
        
        {/* Subtle Cork/Wood Texture Overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')]"></div>

        {/* 1. Central Photo: Circular & Torn */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative group">
            <div 
              className="w-52 h-52 md:w-72 md:h-72 bg-white p-3 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
            >
              <img src="/your-photo.jpg" alt="Profile" className="w-full h-full object-cover grayscale brightness-110" />
            </div>
            {/* The Red Pin */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full shadow-lg border-b-4 border-red-900"></div>
          </div>
        </div>

        {/* 2. Torn Paper Scraps (Navigation) */}
        {scraps.map((scrap, i) => (
          <Link 
            key={i}
            href={scrap.link}
            className={`absolute px-8 py-6 md:px-12 md:py-8 ${scrap.color} ${scrap.rotate} shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group z-10`}
            style={{ 
                top: scrap.top, 
                left: scrap.left,
                clipPath: "polygon(2% 5%, 98% 0%, 100% 92%, 5% 100%, 0% 85%)" // Jagged edges
            }}
          >
            <p className="text-2xl md:text-4xl font-black text-gray-800 uppercase italic tracking-tighter">
              {scrap.title}
            </p>
            {/* Masking Tape effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-white/40 backdrop-blur-sm rotate-2 border border-white/10"></div>
          </Link>
        ))}

        {/* 3. Royal Enfield Scrap */}
        <div className="absolute bottom-[25%] left-[38%] rotate-12 w-36 md:w-48 bg-white p-2 shadow-xl border-b-8 border-gray-200 z-0">
           <img src="/royal-enfield-cutout.png" alt="Bike" className="w-full grayscale brightness-90" />
           <p className="text-[10px] text-center font-mono text-gray-400 mt-1 uppercase tracking-widest">Vintage Soul</p>
        </div>

        {/* 4. Instax Polaroids (States) */}
        <div className="absolute top-10 left-[40%] -rotate-12 w-28 md:w-36 bg-[#fdfdfd] p-1 pb-8 shadow-xl border border-gray-100 group hover:rotate-0 transition-all cursor-help">
           <div className="w-full aspect-square bg-gray-200 overflow-hidden">
             <img src="/mysore.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0" alt="Mysore" />
           </div>
           <p className="mt-2 text-[10px] font-mono text-gray-500 text-center uppercase">Mysore '24</p>
           {/* Thumbtack */}
           <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}