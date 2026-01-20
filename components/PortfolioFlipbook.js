// import { useEffect, useRef, useState } from "react";

// const pages = [
//   "/portfolio/01.jpg",
//   "/portfolio/02.jpg",
//   "/portfolio/03.jpg",
//   "/portfolio/04.jpg",
// ];

// export default function PortfolioFlipbook() {
//   const bookRef = useRef(null);
//   const pageFlipRef = useRef(null);
//   const containerRef = useRef(null);

//   const [mounted, setMounted] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const initFlipbook = async () => {
//       if (!mounted || !bookRef.current) return;

//       const { PageFlip } = await import("page-flip");

//       pageFlipRef.current = new PageFlip(bookRef.current, {
//         width: 820,
//         height: 1100,
//         size: "stretch",
//         minWidth: 320,
//         maxWidth: 1400,
//         minHeight: 420,
//         maxHeight: 1800,
//         maxShadowOpacity: 0.45,
//         showCover: true,
//         mobileScrollSupport: true,
//         useMouseEvents: true,
//         swipeDistance: 30,
//       });

//       pageFlipRef.current.loadFromImages(pages);

//       // Event: When page flips, update our state counter
//       pageFlipRef.current.on("flip", (e) => {
//         setCurrentPage(e.data);
//       });

//       // Initialize total pages
//       setTotalPages(pages.length);
//     };

//     initFlipbook();

//     return () => {
//       if (pageFlipRef.current) {
//         pageFlipRef.current.destroy();
//       }
//     };
//   }, [mounted]);

//   const toggleFullscreen = () => {
//     if (!containerRef.current) return;
//     if (!document.fullscreenElement) {
//       containerRef.current.requestFullscreen().catch((err) => console.error(err));
//       setIsFullscreen(true);
//     } else {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   const handleClose = () => {
//     if (document.fullscreenElement) {
//       document.exitFullscreen();
//     }
//     // Change this to your desired exit path (e.g., window.history.back())
//     window.location.href = "/";
//   };

//   useEffect(() => {
//     const handleKey = (e) => {
//       if (!pageFlipRef.current) return;
//       if (e.key === "ArrowRight") pageFlipRef.current.flipNext();
//       if (e.key === "ArrowLeft") pageFlipRef.current.flipPrev();
//     };

//     const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);

//     window.addEventListener("keydown", handleKey);
//     document.addEventListener("fullscreenchange", handleFullscreenChange);
    
//     return () => {
//       window.removeEventListener("keydown", handleKey);
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   if (!mounted) return <div className="text-center py-24 text-gray-400">Loading portfolio...</div>;

//   return (
//     <div ref={containerRef} className="relative bg-neutral-950 min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      
//       {/* Top Left: Exit Navigation */}
//       <div className="absolute top-6 left-6 z-50">
//         <button 
//           onClick={handleClose}
//           className="group flex items-center gap-2 px-4 py-2 bg-concrete-dark text-white backdrop-blur-md rounded-full border border-white/10 hover:bg-brass hover:text-concrete-dark transition-all"
//         >
//           <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
//           <span className="text-sm font-medium">Exit Portfolio</span>
//         </button>
//       </div>

//       {/* Top Right: Flip Controls & Fullscreen */}
//       <div className="absolute top-6 right-6 z-50 flex gap-3">
//         <div className="flex bg-concrete-dark backdrop-blur-md rounded-full border border-white/10 p-1">
//           <button onClick={() => pageFlipRef.current?.flipPrev()} className="p-2 px-4 text-white hover:text-brass transition-colors">◀</button>
//           <div className="w-[1px] bg-white/10 my-2"></div>
//           <button onClick={() => pageFlipRef.current?.flipNext()} className="p-2 px-4 text-white hover:text-brass transition-colors">▶</button>
//         </div>
        
//         <button 
//           onClick={toggleFullscreen} 
//           className="px-4 py-2 bg-brass hover:bg-concrete-dark text-concrete-dark hover:text-brass backdrop-blur-md rounded-full border border-white/10 dark:hover:bg-concrete-dark dark:hover:text-brass dark:bg-brass dark:text-concrete-dark font-medium rounded-full transition-all"
//         >
//           {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
//         </button>
//       </div>

//       {/* Main Content: Flipbook */}
//       <div className="flex items-center justify-center w-full max-w-6xl transition-all duration-500">
//         <div ref={bookRef} className="shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]" />
//       </div>
      
//       {/* Bottom Center: Page Counter & Hint */}
//       <div className="absolute bottom-10 flex flex-col items-center gap-2">
//         <div className="px-4 py-1 bg-brass rounded-full border border-white/5 text-xs text-concrete-dark tracking-widest uppercase">
//           Page {currentPage + 1} of {totalPages}
//         </div>
//         <p className="text-[10px] text-concrete-dark dark:text-concrete-light uppercase tracking-tighter">
//           Use keys ← → or drag corners to flip
//         </p>
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef, useState } from "react";

const pages = [
  "/portfolio/01.jpg", // Cover
  "/portfolio/02.jpg",
  "/portfolio/03.jpg",
  "/portfolio/04.jpg",
  "/portfolio/05.jpg",
  "/portfolio/06.jpg",
  "/portfolio/07.jpg",
  "/portfolio/08.jpg",
  "/portfolio/09.jpg",
  "/portfolio/10.jpg",
  "/portfolio/11.jpg",
  "/portfolio/12.jpg",
  "/portfolio/13.jpg",
  "/portfolio/14.jpg",
  "/portfolio/15.jpg",
  "/portfolio/16.jpg",
  "/portfolio/17.jpg",
  "/portfolio/18.jpg",
  "/portfolio/19.jpg",
  "/portfolio/20.jpg",
  "/portfolio/21.jpg",
  "/portfolio/22.jpg",
  "/portfolio/23.jpg",
  "/portfolio/24.jpg",
  "/portfolio/25.jpg",
  "/portfolio/26.jpg",
  "/portfolio/27.jpg",
  "/portfolio/28.jpg",
  "/portfolio/29.jpg", // Back cover
  // "/portfolio/blank.jpg", // 👈 REQUIRED dummy page
];


export default function PortfolioFlipbook() {
  const bookRef = useRef(null);
  const pageFlipRef = useRef(null);
  const containerRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const initFlipbook = async () => {
      if (!mounted || !bookRef.current) return;

      const { PageFlip } = await import("page-flip");

      pageFlipRef.current = new PageFlip(bookRef.current, {
        width: 1100,
        height: 800,
        size: "stretch",
        
        // FORCING SINGLE PAGE COVER LOGIC:
        mode: "portrait",     // This tells the library to start in single-page mode
        showCover: true,      // This confirms the first page is the cover
        usePortrait: true,    // This allows it to stay single-page when centered
        
        maxShadowOpacity: 0.45,
        showPageCorners: true,
        useMouseEvents: true,
        flippingTime: 1000,
      });


      pageFlipRef.current.loadFromImages(pages);

      pageFlipRef.current.on("flip", (e) => {
        setCurrentPage(e.data);
      });

      setTotalPages(pages.length);
    };

    initFlipbook();

    return () => {
      if (pageFlipRef.current) pageFlipRef.current.destroy();
    };
  }, [mounted]);

  const handleZoom = (factor) => {
    const newZoom = Math.min(Math.max(zoom + factor, 0.5), 2);
    setZoom(newZoom);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.error(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleClose = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    window.location.href = "/";
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!pageFlipRef.current) return;
      if (e.key === "ArrowRight") pageFlipRef.current.flipNext();
      if (e.key === "ArrowLeft") pageFlipRef.current.flipPrev();
    };
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);

    window.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  if (!mounted) return <div className="text-center py-24 text-gray-400">Loading portfolio...</div>;

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden
                 bg-paper dark:bg-black transition-colors duration-500"
    >
      {/* Top Left: Exit Navigation */}
      <div className="absolute top-6 left-6 z-50">
        <button 
          onClick={handleClose}
          className="group flex items-center gap-2 px-4 py-2 bg-black text-white backdrop-blur-md rounded-full border border-white/10 hover:bg-brass hover:text-concrete-dark transition-all"
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-sm font-medium">Exit Portfolio</span>
        </button>
      </div>

      {/* Top Right: Flip Controls & Fullscreen */}
      <div className="absolute top-6 right-6 z-50 flex gap-3">
        <div className="flex bg-black backdrop-blur-md rounded-full border border-white/10 p-1">
          <button onClick={() => pageFlipRef.current?.flipPrev()} className="p-2 px-4 text-white hover:text-brass transition-colors">◀</button>
          <div className="w-[1px] bg-white/10 my-2"></div>
          <button onClick={() => pageFlipRef.current?.flipNext()} className="p-2 px-4 text-white hover:text-brass transition-colors">▶</button>
        </div>
        
        <button 
          onClick={toggleFullscreen} 
          className="px-6 py-2 bg-brass text-concrete-dark font-bold uppercase text-[10px] tracking-widest rounded-full border border-white/10 hover:bg-black hover:text-brass transition-all"
        >
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
        </button>
      </div>

      {/* Main Content: Flipbook Landscape Spread */}
      <div className="flex items-center justify-center w-full max-w-[90vw] h-[75vh]">
        <div ref={bookRef} className="shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Bottom Center: Page Counter & Hint */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <div className="px-4 py-1 bg-brass rounded-full border border-white/5 text-xs text-concrete-dark tracking-widest uppercase">
          Page {currentPage + 1} of {totalPages}
        </div>
        <div className="flex bg-black backdrop-blur-md rounded-full border border-white/10 p-1">
          <button onClick={() => handleZoom(-0.2)} className="p-2 px-4 text-white hover:text-brass transition-colors font-bold">−</button>
          <div className="w-[1px] bg-white/10 my-2"></div>
          <button onClick={() => handleZoom(0.2)} className="p-2 px-4 text-white hover:text-brass transition-colors font-bold">+</button>
        </div>
        <p className="text-[10px] text-concrete-dark dark:text-concrete-light uppercase tracking-tighter">
           Use keys ← → or drag corners to flip
        </p>
      </div>
    </div>
  );
}