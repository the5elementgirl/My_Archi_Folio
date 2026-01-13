import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      {/* Matches the Projects/Experience header height (h-48) 
          and ensures the title is positioned identically.
      */}
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left text-ink dark:text-concrete-light">
          About Me.
        </h1>
      </div>

      {/* Grey section starting exactly where the title ends.
          Removed -mt-10 and -mt-4 to prevent the grey area from overlapping the white header.
      */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl bg-brass p-6 rounded-lg md:text-3xl font-semibold text-gray-800 dark:text-gray-800"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}
            {/* . Currently working on {" "} */}
            {/* <a
              className="bg-brass rounded-md px-2 py-1 text-concrete-dark"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} Lorem Ipsum
            </a> */}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4 pb-40">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Left Column: Contact & Socials */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-brass border-b-2 border-brass font-bold"
                >
                  MAIL
                </a>{" "}
                and I'll get back.
              </p>
            </div>
            <br />
            <hr className="border-gray-300 dark:border-gray-700" />
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-brass border-b-2 border-brass font-bold"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            <br />
            <hr className="border-gray-300 dark:border-gray-700" />
            
            <h1 className="text-xl font-semibold mt-8 text-gray-700 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-blue-500 font-mono relative overflow-hidden dark:text-blue-300">
                    <div className="absolute h-0.5 w-full bg-blue-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Text Description & Tech Stack */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300"
              >
                {desc}
              </p>
            ))}
            
            <br /><br />
            
            <h1 className="bg-brass text-xl rounded-md px-4 py-2 block font-bold text-concrete-dark">
              Tech Stack
            </h1>
            
            <div className="flex flex-row flex-wrap-1 mt-8">
              {/* Using a cleaner mapping approach for your icons would be better, 
                  but I've kept your original img tags for consistency */}
              <img src="https://images.seeklogo.com/logo-png/48/2/autocad-logo-png_seeklogo-482394.png" className="h-20 w-20 mx-4 my-4" alt="AutoCAD" />
              {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/autodesk-revit-icon.png" className="h-20 w-20 mx-4 my-4" alt="Revit" /> */}
              <img src="https://images.seeklogo.com/logo-png/28/2/sketchup-logo-png_seeklogo-282937.png" className="h-20 w-20 mx-4 my-4" alt="SketchUp" />
              <img src="https://lumion.es/wp-content/uploads/2025/04/lumion-pro-software-icon-300x300.png" className="h-20 w-20 mx-4 my-4" alt="Lumion" />
              {/* <img src="https://images.seeklogo.com/logo-png/41/2/v-ray-logo-png_seeklogo-411793.png" className="h-20 w-20 mx-4 my-4" alt="V-Ray" /> */}
              {/* <img src="https://wp-cdn.pugetsystems.com/2022/08/Enscape-Logo-Icon.png" className="h-20 w-20 mx-4 my-4" alt="Enscape" /> */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" className="h-20 w-20 mx-4 my-4" alt="Figma" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png" className="h-20 w-20 mx-4 my-4" alt="Photoshop" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/f/fb/20251029195728%21Adobe_Illustrator_CC_icon.svg/120px-Adobe_Illustrator_CC_icon.svg.png" className="h-20 w-20 mx-4 my-4" alt="Illustrator" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/960px-Adobe_InDesign_CC_icon.svg.png?20210519032020" className="h-20 w-20 mx-4 my-4" alt="InDesign" />
              {/* ... Add other icons as needed following the same pattern */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}