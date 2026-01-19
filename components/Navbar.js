// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useTheme } from "next-themes";
// import { useRouter } from "next/router";
// import userData from "@constants/data";

// export default function Navbar() {
//   const router = useRouter();
//   console.log(router.asPath);
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
//       <div className="flex  md:flex-row justify-between items-center">
//         <div className="flex flex-col">
//           <Link href="/">
//             <h1 className="font-semibold text-lg text-brass dark:text-brass">
//               {userData.name}
//             </h1>
//             {/* <h1 className="font-semibold text-md text-amber-500 dark:text-amber-500">
//               {userData.kannada}
//             </h1> */}
//             <p className="text-md pt-2 text-center font-light text-gray-500 dark:text-gray-300">
//               {userData.designation}
//             </p>
//           </Link>
//         </div>

//         <div className="space-x-8 hidden md:block">
//           <Link
//             href="/about"
//             className={`text-base  ${
//               router.asPath === "/about"
//                 ? "text-gray-800 font-bold dark:text-gray-400"
//                 : "text-gray-600 dark:text-gray-300 font-normal "
//             }`}
//           >
//             About{" "}
//             {router.asPath === "/about" && (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-arrow-down inline-block h-3 w-3"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
//                 />
//               </svg>
//             )}
//           </Link>
//           <Link
//             href="/projects"
//             className={`text-base  ${
//               router.asPath === "/projects"
//                 ? "text-gray-800 font-bold dark:text-gray-400"
//                 : "text-gray-600 dark:text-gray-300 font-normal "
//             }`}
//           >
//             Projects
//             {router.asPath === "/projects" && (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-arrow-down inline-block h-3 w-3"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
//                 />
//               </svg>
//             )}
//           </Link>
//           <Link
//             href="/experience"
//             className={`text-base  ${
//               router.asPath === "/experience"
//                 ? "text-gray-800 font-bold dark:text-gray-400"
//                 : "text-gray-600 dark:text-gray-300 font-normal "
//             }`}
//           >
//             Experience{" "}
//             {router.asPath === "/experience" && (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-arrow-down inline-block h-3 w-3"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
//                 />
//               </svg>
//             )}
//           </Link>
//           <Link
//             href="/contact"
//             className={`text-base  ${
//               router.asPath === "/contact"
//                 ? "text-gray-800 font-bold dark:text-gray-400"
//                 : "text-gray-600 dark:text-gray-300 font-normal "
//             }`}
//           >
//             Contact
//             {router.asPath === "/contact" && (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-arrow-down inline-block h-3 w-3"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
//                 />
//               </svg>
//             )}
//           </Link>
//         </div>

//         <div className="space-x-4 flex flex-row items-center">

//           <a
//             href={userData.socialLinks.linkedin}
//             className="text-base font-normal text-gray-600 dark:text-gray-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className="bi bi-linkedin h-5 w-5"
//               viewBox="0 0 448 512"
//             >
//               <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
//             </svg>
//           </a>
          
//           <button
//             aria-label="Toggle Dark Mode"
//             type="button"
//             className="w-10 h-10 p-3 rounded focus:outline-none"
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//           >
//             {mounted && (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 stroke="currentColor"
//                 className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
//               >
//                 {theme === "dark" ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                   />
//                 )}
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//       <div className="space-x-8 block md:hidden mt-4">
//         <Link
//           href="/about"
//           className="text-base font-normal text-gray-600 dark:text-gray-300"
//         >
//           About
//         </Link>
//         <Link
//           href="/projects"
//           className="text-base font-normal text-gray-600 dark:text-gray-300"
//         >
//           Projects
//         </Link>
//         <Link
//           href="/experience"
//           className="text-base font-normal text-gray-600 dark:text-gray-300"
//         >
//           Experience
//         </Link>
//         <Link
//           href="/contact"
//           className="text-base font-normal text-gray-600 dark:text-gray-300"
//         >
//           Contact
//         </Link>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    // { href: "/personal-space", label: "Personal" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-md text-brass">
              {userData.name}
            </h1>
            <p className="text-sm pt-2 text-center font-light text-gray-500 dark:text-gray-300">
              {userData.designation}
            </p>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {navItems.map(({ href, label }) => {
            const isActive = router.asPath === href;

            return (
              <Link
                key={href}
                href={href}
                className={`
                  text-base relative pb-1 transition-all duration-300
                  ${
                    isActive
                      ? "text-brass font-bold"
                      : "text-gray-600 dark:text-gray-300"
                  }
                  hover:text-brass
                  after:absolute after:left-0 after:-bottom-0.5
                  after:h-[2px] after:w-0 after:bg-brass
                  after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {label}
                {isActive && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="inline-block h-3 w-3 ml-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href={userData.socialLinks.linkedin}
            className="text-gray-600 dark:text-gray-300 hover:text-brass transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-5 w-5 fill-current"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
