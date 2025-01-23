"use client";

import { useState } from "react";
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

const EventGallery = () => {
  
  const [activeTab, setActiveTab] = useState<"techfest2024" | "summerCamp" | "partnership">(
    "techfest2024"
  );

  const eventImages: {
    techfest2024: { src: string; text: string }[];
    summerCamp: { src: string; text: string }[];
    partnership: { src: string; text: string }[];
  } = {
    techfest2024: [
      { src: "/images/jtf/jtf-2.jpg", text: "Registration Table" },
      { src: "/images/jtf/jtf-26.jpg", text: "Tech Event 2" },
      { src: "/images/jtf/jtf-2.jpg", text: "Tech Event 3" },
      { src: "/images/jtf/jtf-2.jpg", text: "Tech Event 1" },
      { src: "/images/jtf/jtf-26.jpg", text: "Tech Event 2" },
      { src: "/images/jtf/jtf-2.jpg", text: "Tech Event 3" },
      { src: "/images/jtf/jtf-2.jpg", text: "Tech Event 1" },
      { src: "/images/jtf/jtf-26.jpg", text: "Tech Event 2" },
      { src: "/images/jtf/jtf-2.jpg", text: "Tech Event 3" },
    ],
    summerCamp: [
      { src: "/images/summer1.jpg", text: "Summer Camp 1" },
      { src: "/images/summer2.jpg", text: "Summer Camp 2" },
      { src: "/images/summer3.jpg", text: "Summer Camp 3" },
      { src: "/images/summer1.jpg", text: "Summer Camp 1" },
      { src: "/images/summer2.jpg", text: "Summer Camp 2" },
      { src: "/images/summer3.jpg", text: "Summer Camp 3" },
    ],
    partnership: [
      { src: "/images/partner1.jpg", text: "Partnership 1" },
      { src: "/images/partner2.jpg", text: "Partnership 2" },
      { src: "/images/partner3.jpg", text: "Partnership 3" },
    ],
  };

  const handleTabClick = (tab: "techfest2024" | "summerCamp" | "partnership") => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4 mt-32">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Achievements at a Glance</h2>
      </div>
      <div className="">
        
        <div className="flex justify-center mb-6">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image className="max-w-none" src={Stripes} alt="Stripes" />
          </div>
          {[
            "techfest2024",
            "summerCamp",
            "partnership",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab as "techfest2024" | "summerCamp" | "partnership")}
              className={`px-4 py-2 mx-2 text-sm font-medium ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded-lg hover:bg-blue-400 hover:text-white`}
            >
              {tab === "techfest2024" && "TechFest 2024"}
              {tab === "summerCamp" && "Summer Camp"}
              {tab === "partnership" && "Partnership"}
            </button>
          ))}
        </div>


        <div className="mb-8 text-center">
          {activeTab === "techfest2024" && (
            <p className="text-sm text-gray-700 ">
              Explore our incredible TechFest 2024, featuring innovation, collaboration, <br /> and groundbreaking technology.
            </p>
          )}
          {activeTab === "summerCamp" && (
            <p className="text-lg text-gray-700">
              Experience the excitement of our Summer Camp, a perfect blend of fun and learning for all ages.
            </p>
          )}
          {activeTab === "partnership" && (
            <p className="text-lg text-gray-700">
              Celebrating successful partnerships that drive growth, innovation, and community impact.
            </p>
          )}
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
          {eventImages[activeTab].map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg w-full h-full"
            >
              <Image
                src={image.src}
                alt={image.text}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-lg">{image.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventGallery;


















// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Stripes from "@/public/images/stripes-dark.svg";

// const EventGallery = () => {
//   // Define valid keys for activeTab
//   const [activeTab, setActiveTab] = useState<"tech" | "summerCamp" | "partnership">("tech");

//   const eventImages: {
//     tech: { src: string; text: string }[];
//     summerCamp: { src: string; text: string }[];
//     partnership: { src: string; text: string }[];
//   } = {
//     tech: [
//       { src: "/images/tech1.jpg", text: "Tech Event 1" },
//       { src: "/images/tech2.jpg", text: "Tech Event 2" },
//       { src: "/images/tech3.jpg", text: "Tech Event 3" },
//     ],
//     summerCamp: [
//       { src: "/images/summer1.jpg", text: "Summer Camp 1" },
//       { src: "/images/summer2.jpg", text: "Summer Camp 2" },
//       { src: "/images/summer3.jpg", text: "Summer Camp 3" },
//     ],
//     partnership: [
//       { src: "/images/partner1.jpg", text: "Partnership 1" },
//       { src: "/images/partner2.jpg", text: "Partnership 2" },
//       { src: "/images/partner3.jpg", text: "Partnership 3" },
//     ],
//   };

//   const handleTabClick = (tab: "tech" | "summerCamp" | "partnership") => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="container mx-auto p-4   ">
//        <div className="text-center">
//           <h2 className="mb-4 text-3xl font-bold md:text-4xl">Achievements at a Glance</h2>
//         </div>
//         <div className="h-screen  p-8 "> 
//         <div className="flex justify-center mb-6">
//         <div
//           className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
//           aria-hidden="true"
//         >
//           <Image className="max-w-none" src={Stripes} alt="Stripes" />
//         </div>
//         {["tech", "summerCamp", "partnership"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => handleTabClick(tab as "tech" | "summerCamp" | "partnership")}
//             className={`px-4 py-2 mx-2 text-sm font-medium ${
//               activeTab === tab
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             } rounded-lg hover:bg-blue-400 hover:text-white`}
//           >
//             {tab === "tech" && "Tech"}
//             {tab === "summerCamp" && "Summer Camp"}
//             {tab === "partnership" && "Partnership"}
//           </button>
//         ))}
//       </div>

//       {/* Images */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
//         {eventImages[activeTab].map((image, index) => (
//           <div
//             key={index}
//             className="relative group overflow-hidden rounded-lg shadow-lg w-full h-full"
//           >
//             <Image
//               src={image.src}
//               alt={image.text}
//               width={500}
//               height={300}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <p className="text-white text-center text-lg">{image.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//         </div>
//       {/* Tabs */}
      
//     </div>
//   );
// };

// export default EventGallery;










// "use client"
// import { SetStateAction, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
// import Image from "next/image";
// import Stripes from "@/public/images/stripes-dark.svg";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";

// const EventGallery = () => {
//   const [activeTab, setActiveTab] = useState("tech");

//   const eventImages = {
//     tech: [
//       { src: "/images/tech1.jpg", text: "Tech Event 1" },
//       { src: "/images/tech2.jpg", text: "Tech Event 2" },
//       { src: "/images/tech3.jpg", text: "Tech Event 3" },
//     ],
//     summerCamp: [
//       { src: "/images/summer1.jpg", text: "Summer Camp 1" },
//       { src: "/images/summer2.jpg", text: "Summer Camp 2" },
//       { src: "/images/summer3.jpg", text: "Summer Camp 3" },
//     ],
//     partnership: [
//       { src: "/images/partner1.jpg", text: "Partnership 1" },
//       { src: "/images/partner2.jpg", text: "Partnership 2" },
//       { src: "/images/partner3.jpg", text: "Partnership 3" },
//     ],
//   };

//   const handleTabClick = (tab: SetStateAction<string>) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="container mx-auto p-4  h-screen">
//       {/* Tabs */}
//       <div className="flex justify-center mb-6">
//         <div
//           className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
//           aria-hidden="true"
//         >
//           <Image className="max-w-none" src={Stripes} alt="Stripes" />
//         </div>
//         {["tech", "summerCamp", "partnership"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={`px-4 py-2 mx-2 text-sm font-medium ${
//               activeTab === tab
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             } rounded-lg hover:bg-blue-400 hover:text-white`}
//           >
//             {tab === "tech" && "Tech"}
//             {tab === "summerCamp" && "Summer Camp"}
//             {tab === "partnership" && "Partnership"}
//           </button>
//         ))}
//       </div>

//       {/* Images */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-80px)]">
//         {eventImages[activeTab].map((image: { src: string | StaticImport; text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
//           <div
//             key={index}
//             className="relative overflow-hidden rounded-lg shadow-lg group h-full"
//           >
//             <Image
//               src={image.src}
//               alt={`${activeTab} event ${index + 1}`}
//               fill
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//               <p className="text-white text-lg font-medium">{image.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventGallery;







// "use client"
// import { useState } from "react";
// import Image from "next/image";
// import Stripes from "@/public/images/stripes-dark.svg";

// const EventGallery = () => {
//   const [activeTab, setActiveTab] = useState("tech");

//   const eventImages = {
//     tech: [
//       "/images/tech1.jpg",
//       "/images/tech2.jpg",
//       "/images/tech3.jpg",
//     ],
//     summerCamp: [
//       "/images/summer1.jpg",
//       "/images/summer2.jpg",
//       "/images/summer3.jpg",
//     ],
//     partnership: [
//       "/images/partner1.jpg",
//       "/images/partner2.jpg",
//       "/images/partner3.jpg",
//     ],
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-900 h-screen">

//       {/* Tabs */}
//       <div className="flex justify-center mb-6">
//       <div
//             className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
//             aria-hidden="true"
//           >
//             <Image className="max-w-none" src={Stripes} alt="Stripes" />
//           </div>
//         {["tech", "summerCamp", "partnership"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={`px-4 py-2 mx-2 text-sm font-medium ${
//               activeTab === tab
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             } rounded-lg hover:bg-blue-400 hover:text-white`}
//           >
//             {tab === "tech" && "Tech"}
//             {tab === "summerCamp" && "Summer Camp"}
//             {tab === "partnership" && "Partnership"}
//           </button>
//         ))}
//       </div>

//       {/* Images */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {eventImages[activeTab].map((image, index) => (
//           <div
//             key={index}
//             className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
//           >
//             <Image
//               src={image}
//               alt={`${activeTab} event ${index + 1}`}
//               width={500}
//               height={300}
//               className="w-full h-48 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventGallery;








// import Image from "next/image";
// import PlanetImg from "@/public/images/planet.png";
// import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
// // import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
// // import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
// // import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
// // import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

// export default function FeaturesPlanet() {
//   return (
//     <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="py-12 md:py-20">
//           {/* Section header */}
//           <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
//             <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
//             Achievements at a Glance
//             </h2>
//           </div>
//           {/* Planet */}
//  <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
//   <div className="text-center">
//     {/* Planet Image with Spinning Texts */}
//     <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
//       {/* Static Planet Image */}
//       <Image
//         className="rounded-full bg-gray-900"
//         src={PlanetImg}
//         width={400}
//         height={400}
//         alt="Planet"
//       />

//       {/* Spinning Texts */}
//       <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite]">
//         <div className="relative w-[500px] h-[500px]">
//           <h4
//             className="absolute left-1/2 top-0 transform -translate-x-1/2 text-white bg-slate-300 bg-opacity-10 rounded-md p-3 text-sm"
//           >
//             Tech Fest 2024 (800+ participants)
//           </h4>
//           <h4
//             className="absolute left-1/2 bottom-0 transform -translate-x-1/2 text-white bg-slate-300 bg-opacity-10 rounded-md p-3 text-sm"
//           >
//             Partnerships (e.g Tech Synergy)
//           </h4>
//           <h4
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-slate-300 bg-opacity-10 rounded-md p-3 text-sm"
//           >
//             50 kids trained at the Summer Camp
//           </h4>
//         </div>
//       </div>

//       {/* Planet Decoration */}
//       <div className="pointer-events-none" aria-hidden="true">
//         <Image
//           className="absolute -right-64 -top-20 z-10 max-w-none"
//           src={PlanetOverlayImg}
//           width={789}
//           height={755}
//           alt="Planet decoration"
//         />
//       </div>
//     </div>
//   </div>
// </div>

//           {/* Grid */}
//           <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
//             <article>
//               <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
//                 <svg
//                   className="fill-blue-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                 >
//                   <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
//                 </svg>
//                 <span>Instant Analytics</span>
//               </h3>
//               <p className="text-[15px] text-gray-400">
//                 Collect essential insights about how visitors are using your
//                 site with in-depth page view metrics like pages, referring
//                 sites, and more.
//               </p>
//             </article>
//             <article>
//               <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
//                 <svg
//                   className="fill-blue-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                 >
//                   <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
//                 </svg>
//                 <span>Metadata</span>
//               </h3>
//               <p className="text-[15px] text-gray-400">
//                 Collect essential insights about how visitors are using your
//                 site with in-depth page view metrics like pages, referring
//                 sites, and more.
//               </p>
//             </article>
//             <article>
//               <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
//                 <svg
//                   className="fill-blue-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                 >
//                   <path
//                     d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
//                     opacity=".3"
//                   />
//                   <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
//                 </svg>
//                 <span>SEO &amp; Performance</span>
//               </h3>
//               <p className="text-[15px] text-gray-400">
//                 Collect essential insights about how visitors are using your
//                 site with in-depth page view metrics like pages, referring
//                 sites, and more.
//               </p>
//             </article>
//             <article>
//               <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
//                 <svg
//                   className="fill-blue-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                 >
//                   <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
//                 </svg>
//                 <span>Custom Code</span>
//               </h3>
//               <p className="text-[15px] text-gray-400">
//                 Collect essential insights about how visitors are using your
//                 site with in-depth page view metrics like pages, referring
//                 sites, and more.
//               </p>
//             </article>
//             <article>
//               <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
//                 <svg
//                   className="fill-blue-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                 >
//                   <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
//                 </svg>
//                 <span>Localization</span>
//               </h3>
//               <p className="text-[15px] text-gray-400">
//                 Collect essential insights about how visitors are using your
//                 site with in-depth page view metrics like pages, referring
//                 sites, and more.
//               </p>
//             </article>
//             <article>
//               <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
//                 <svg
//                   className="fill-blue-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                 >
//                   <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
//                 </svg>
//                 <span>Canonical URL</span>
//               </h3>
//               <p className="text-[15px] text-gray-400">
//                 Collect essential insights about how visitors are using your
//                 site with in-depth page view metrics like pages, referring
//                 sites, and more.
//               </p>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





