// import React from "react";
// import Link from "next/link";
// import userData from "@constants/data";

// export default function FavouriteProjects() {
//   // Get first 4 projects for the featured section
//   const featuredProjects = userData.projects.slice(0, 4);

//   // Helper function to format project number
//   const formatProjectNumber = (index) => {
//     const num = index + 1;
//     return num < 10 ? `0${num}` : `${num}`;
//   };

//   // Get tag color based on index
//   const getTagColor = (index) => {
//     const colors = [
//       "bg-brass",
//       "bg-brass",
//       "bg-brass",
//       "bg-brass",
//     ];
//     return colors[index] || "bg-brass";
//   };

//   return (
//     <div className="bg-[#F1F1F1] -mt-80 dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center pt-80 mx-10 md:my-20 lg:my-0 -ml-0">
//           <h1 className="text-6xl lg:text-8xl max-w-lg font-bold text-[#8B8C89] py-10 my-20 md:my-0 md:text-[#8B8C89] dark:text-brass whitespace-nowrap">
//             Favourite Projects
//           </h1>
//           <Link
//             href="/projects"
//             className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700 -mr-6"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className="bi bi-arrow-up-right-square"
//               stroke="4"
//               strokeWidth="4"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
//               />
//             </svg>
//             <p>View all</p>
//           </Link>
//         </div>

//         {/* Grid starts here */}
//         <div className="grid md:grid-cols-3 md:grid-rows-[auto_1fr_1fr] gap-8 lg:-mt-2 pb-40">
//           {/* Featured Project - First project spans full width */}
//           {featuredProjects[0] && (
//             <Link
//               href={`/projects/${featuredProjects[0].id}`}
//               className="w-full block col-span-3 shadow-2xl cursor-pointer"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={featuredProjects[0].imgUrl}
//                   alt={featuredProjects[0].title}
//                   className="transform hover:scale-110 transition duration-2000 ease-out w-full h-full object-cover"
//                 />
//                 <h1 className={`absolute bottom-5 left-5 text-gray-50 font-semibold text-xl ${getTagColor(0)} rounded-md px-3 py-1`}>
//                   {featuredProjects[0].title}
//                 </h1>
//                 <h1 className={`absolute top-5 left-5 text-gray-50 font-semibold text-xl ${getTagColor(0)} rounded-md px-3 py-1`}>
//                   {formatProjectNumber(0)}
//                 </h1>
//               </div>
//             </Link>
//           )}

//           {/* Second Project - Spans 2 columns and 2 rows (full height) */}
//           {featuredProjects[1] && (
//             <Link
//               href={`/projects/${featuredProjects[1].id}`}
//               className="w-full block col-span-3 sm:col-span-2 sm:row-span-2 sm:row-start-2 shadow-2xl cursor-pointer"
//             >
//               <div className="relative overflow-hidden h-full">
//                 <img
//                   src={featuredProjects[1].imgUrl}
//                   alt={featuredProjects[1].title}
//                   className="transform hover:scale-110 transition duration-2000 ease-out w-full h-full object-cover"
//                 />
//                 <h1 className={`absolute bottom-5 left-5 text-gray-50 font-semibold text-xl ${getTagColor(1)} rounded-md px-3 py-1`}>
//                   {featuredProjects[1].title}
//                 </h1>
//                 <h1 className={`absolute top-5 left-5 text-gray-50 font-semibold text-xl ${getTagColor(1)} rounded-md px-3 py-1`}>
//                   {formatProjectNumber(1)}
//                 </h1>
//               </div>
//             </Link>
//           )}

//           {/* Third Project - Spans 1 column, positioned at the side of 2nd card */}
//           {featuredProjects[2] && (
//             <Link
//               href={`/projects/${featuredProjects[2].id}`}
//               className="w-full block col-span-3 sm:col-span-1 sm:col-start-3 sm:row-start-2 object-cover cursor-pointer h-full"
//             >
//               <div className="relative overflow-hidden shadow-2xl h-full">
//                 <img
//                   src={featuredProjects[2].imgUrl}
//                   alt={featuredProjects[2].title}
//                   className="transform hover:scale-110 transition duration-2000 ease-out object-cover shadow-2xl w-full h-full"
//                 />
//                 <h1 className={`absolute bottom-5 left-5 text-gray-50 font-semibold text-xl ${getTagColor(2)} rounded-md px-3 py-1`}>
//                   {featuredProjects[2].title}
//                 </h1>
//                 <h1 className={`absolute top-5 left-5 text-gray-50 font-semibold text-xl ${getTagColor(2)} rounded-md px-3 py-1`}>
//                   {formatProjectNumber(2)}
//                 </h1>
//               </div>
//             </Link>
//           )}

//           {/* Fourth Project - Spans 1 column, positioned below 3rd card, sharing 2nd card height */}
//           {featuredProjects[3] && (
//             <Link
//               href={`/projects/${featuredProjects[3].id}`}
//               className="w-full block col-span-3 sm:col-span-1 sm:col-start-3 sm:row-start-3 object-cover cursor-pointer h-full"
//             >
//               <div className="relative overflow-hidden shadow-2xl h-full">
//                 <img
//                   src={featuredProjects[3].imgUrl}
//                   alt={featuredProjects[3].title}
//                   className="transform hover:scale-110 transition duration-2000 ease-out object-cover shadow-2xl w-full h-full"
//                 />
//                 <h1 className={`absolute bottom-5 left-5 text-gray-50 font-semibold text-xl ${getTagColor(3)} rounded-md px-3 py-1`}>
//                   {featuredProjects[3].title}
//                 </h1>
//                 <h1 className={`absolute top-5 left-5 text-gray-50 font-semibold text-xl ${getTagColor(3)} rounded-md px-3 py-1`}>
//                   {formatProjectNumber(3)}
//                 </h1>
//               </div>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function FavouriteProjects() {
  const featuredProjects = userData.projects.slice(0, 4);

  const formatProjectNumber = (index) => {
    const num = index + 1;
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    // Removed the massive negative margin -mt-80 which breaks mobile
    <div className="bg-[#F1F1F1] dark:bg-black pb-20 md:pb-40">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-20 md:pt-40 pb-10 md:pb-20">
          <h1 className="text-6xl lg:text-9xl font-bold text-[#8B8C89] dark:text-brass text-center md:text-left leading-tight">
            Favourite <br className="hidden md:block" /> Projects
          </h1>
          <Link
            href="/projects"
            className="mt-10 md:mt-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700 hover:bg-brass hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View all</p>
          </Link>
        </div>

        {/* Grid starts here */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 lg:gap-8">
          {/* Project 1: Full width on mobile, Full width (3 cols) on desktop */}
          {featuredProjects[0] && (
            <ProjectCard 
              project={featuredProjects[0]} 
              number={formatProjectNumber(0)} 
              className="md:col-span-3"
            />
          )}

          {/* Project 2: Large feature on desktop (2 cols, 1 row) */}
          {featuredProjects[1] && (
            <ProjectCard 
              project={featuredProjects[1]} 
              number={formatProjectNumber(1)} 
              className="md:col-span-2 md:row-span-1"
            />
          )}

          {/* Project 3 & 4: Stacked on desktop side */}
          <div className="flex flex-col gap-6 lg:gap-8 md:col-span-1">
            {featuredProjects[2] && (
              <ProjectCard 
                project={featuredProjects[2]} 
                number={formatProjectNumber(2)} 
                className="h-full"
              />
            )}
            {featuredProjects[3] && (
              <ProjectCard 
                project={featuredProjects[3]} 
                number={formatProjectNumber(3)} 
                className="h-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component to keep code clean
const ProjectCard = ({ project, number, className }) => (
  <Link
    href={`/projects/${project.id}`}
    className={`group relative block overflow-hidden shadow-2xl rounded-xl cursor-pointer ${className}`}
  >
    <div className="relative h-64 md:h-full overflow-hidden">
      <img
        src={project.imgUrl}
        alt={project.title}
        className="transform group-hover:scale-110 transition duration-1000 ease-out w-full h-full object-cover"
      />
      <h1 className="absolute bottom-5 left-5 text-gray-50 font-semibold text-lg md:text-xl bg-brass rounded-md px-3 py-1 z-10">
        {project.title}
      </h1>
      <h1 className="absolute top-5 left-5 text-gray-50 font-semibold text-xl bg-brass rounded-md px-3 py-1 z-10">
        {number}
      </h1>
      {/* Overlay effect on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
    </div>
  </Link>
);