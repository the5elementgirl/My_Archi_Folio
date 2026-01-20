// import React from "react";
// import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
// import { RainbowHighlight } from "./RainbowHighlight";
// import userData from "@constants/data";

// export default function Hero() {
//   // Architectural palette
//   const highlights = [
//     "#8B8C89", // concrete grey
//     "#F5C542", // brass
//     "#D1493F", // oxide red
//     "#8CB369", // moss green
//   ];
//   return (
//     <div 
//       className="flex flex-row justify-center overflow-hidden"
//       >
//       {/* Text container */}
//       <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20 -mr-4">
//         <RoughNotationGroup show={true}>
//           <RainbowHighlight color={highlights[0]}>
//             <h2 className="text-4xl md:text-8xl font-bold light:text-grey-500 dark:text-gray-100 my-2">
//               Architect.
//             </h2>
//           </RainbowHighlight>

//           <RainbowHighlight color={highlights[1]}>
//             <h1 className="text-4xl md:text-8xl font-bold text-ink dark:text-gray-100 my-2">
//               Designer.
//             </h1>
//           </RainbowHighlight>

//           <RainbowHighlight color={highlights[2]}>
//             <h1 className="text-4xl md:text-8xl font-bold text-ink dark:text-gray-100 my-2">
//               Artist.
//             </h1>
//           </RainbowHighlight>

//           <RainbowHighlight color={highlights[3]}>
//             <h1 className="text-4xl md:text-8xl font-bold text-ink dark:text-gray-100 my-2">
//               Wanderer.
//             </h1>
//           </RainbowHighlight>
//         </RoughNotationGroup>
//       </div>
//       {/* Image container */}
//       <div className="hidden lg:block relative w-full md:w-1/2 -mr-60 mt-20">
//         <div className="w-3/4">
//           <img src={userData.avatarUrl} alt="avatar" className="rounded-3xl shadow-lg border border-concrete-light dark:border-concrete-dark" />
//           <div className="flex flex-row justify-between mt-4 text-concrete-mid dark:text-gray-400">
//             <div className="flex flex-row space-x-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="text-brass"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
//                 />
//               </svg>
//               <p className="font-inter font-medium text-brass text-md">
//                 That&apos;s me
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
// import { RainbowHighlight } from "./RainbowHighlight";
// import userData from "@constants/data";

// export default function Hero() {
//   // Architectural palette
//   const highlights = [
//     "#8B8C89",
//     "#F5C542",
//     "#D1493F",
//     "#8CB369",
//   ];
//   return (
//     <div 
//       className="flex flex-row justify-center items-start overflow-hidden"
//       // style={{
//       //   backgroundImage:
//       //     "url('https://media.istockphoto.com/id/510981329/vector/sari-pattern.jpg?s=612x612&w=0&k=20&c=O-OslQUNCVS99BP3OKpVpPYyFzETFDYHOIPraUm51gs=')",
//       // }}
//       >
//       {/* Text container */}
//       <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
//         <RoughNotationGroup show={true}>
//           <RainbowHighlight color={highlights[0]}>
//             <h1 className="text-4xl md:text-8xl font-bold light:text-grey-500 dark:text-gray-100 my-2">
//               Architect.
//             </h1>
//           </RainbowHighlight>

//           <RainbowHighlight color={highlights[1]}>
//             <h1 className="text-4xl md:text-8xl font-bold text-ink dark:text-gray-100 my-2">
//               Designer.
//             </h1>
//           </RainbowHighlight>

//           <RainbowHighlight color={highlights[2]}>
//             <h1 className="text-4xl md:text-8xl font-bold text-ink dark:text-gray-100 my-2">
//               Artist.
//             </h1>
//           </RainbowHighlight>

//           <RainbowHighlight color={highlights[3]}>
//             <h1 className="text-4xl md:text-8xl font-bold text-ink dark:text-gray-100 my-2">
//               Wanderer.
//             </h1>
//           </RainbowHighlight>
//         </RoughNotationGroup>
//       </div>
//       {/* Image container */}
//       <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
//         <div className="w-3/4">
//           <img src={userData.avatarUrl} alt="avatar" className="rounded-3xl shadow-lg border border-concrete-light dark:border-concrete-dark" />
//           <div className="flex flex-row justify-between mt-4 text-concrete-mid dark:text-gray-400">
//             <div className="flex flex-row space-x-4 items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="text-brass"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
//                 />
//               </svg>
//               <p className="font-inter font-medium text-brass text-md">
//                 That&apos;s me
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import Link from "next/link";

export default function Hero() {
  const highlights = ["#8B8C89", "#F5C542", "#D1493F", "#8CB369"];

  return (
    <div className="w-full bg-white dark:bg-neutral-800 relative z-10">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-10 lg:py-20 overflow-hidden dark:bg-neutral-800">
      
      {/* Text container */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-2">
        <RoughNotationGroup show={true}>
          {["Architect.", "Designer.", "Artist.", "Wanderer."].map((text, index) => (
            <RainbowHighlight key={text} color={highlights[index]}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold dark:text-gray-100 my-2 leading-tight cursor-pointer transition-all duration-300 transform hover:scale-200 ease-in-out hover:translate-x-2">
                {text}
              </h1>
            </RainbowHighlight>
          ))}
        </RoughNotationGroup>
      </div>

      {/* Image container */}
      <div className="relative w-full md:w-1/2 mt-12 lg:-mr-10 md:-mr-10 md:mt-0 flex justify-center md:justify-end">
        <div className="relative w-3/4 md:w-full max-w-md group">
          <Link href="/personal-space">
            <img 
              src={userData.avatarUrl} 
              alt="avatar" 
              // We use style to inject the custom emoji cursor
              style={{ cursor: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' style='font-size:24px'><text y='24'>✨</text></svg>\"), auto"  }}
              className="rounded-3xl cursor-pointer shadow-4xl border border-gray-200 dark:border-gray-800 object-cover transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(245,197,66,0.4)]" 
            />
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-1/2 animate-sparkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    bottom: `${Math.random() * 100}%`,
                    right: `${Math.random() * 100}%`,
                    '--duration': `${1 + Math.random() * 3}s`,
                    animationDelay: `${Math.random() * 1}s`,
                    boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.9)',
                  }}
                />
              ))}
            </div>
          </Link>
          
          {/* Decorative Arrow/Caption */}
          <div className="flex flex-row items-center space-x-2 mt-4 justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-brass transform lg:rotate-0 -rotate-0"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
              />
            </svg>
            <p className="font-medium text-brass text-sm md:text-base">
            అది నేనే · That's me · ಅದು ನಾನೇ
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}