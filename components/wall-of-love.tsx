// "use client";


// import useMasonry from "@/utils/useMasonry";
// import Testimonial from "@/components/testimonial";
// import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
// import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
// import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
// import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
// import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
// import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
// import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
// import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
// import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
// import TestimonialImg10 from "@/public/images/testimonial-10.jpg";
// import TestimonialImg11 from "@/public/images/testimonial-11.jpg";
// import TestimonialImg12 from "@/public/images/testimonial-12.jpg";
// import TestimonialImg13 from "@/public/images/testimonial-13.jpg";
// import TestimonialImg14 from "@/public/images/testimonial-14.jpg";
// import TestimonialImg15 from "@/public/images/testimonial-15.jpg";
// import TestimonialImg16 from "@/public/images/testimonial-16.jpg";
// import TestimonialImg17 from "@/public/images/testimonial-17.jpg";
// import TestimonialImg18 from "@/public/images/testimonial-18.jpg";
// import TestimonialImg19 from "@/public/images/testimonial-19.jpg";
// import TestimonialImg20 from "@/public/images/testimonial-20.jpg";
// import TestimonialImg21 from "@/public/images/testimonial-21.jpg";
// import TestimonialImg22 from "@/public/images/testimonial-22.jpg";
// import TestimonialVideoThumb01 from "@/public/images/video-testimonial-01.jpg";
// import TestimonialVideoThumb02 from "@/public/images/video-testimonial-02.jpg";
// import Image from "next/image";

// const testimonials = [
//   {
//     img: "/images/testimonial-01.jpg",
//     name: "Nannbyen Lazwan",
//     username: "@peterlowex",
//     date: "May 19, 2027",
   
//     channel: "Twitter",
//   },
//   {
//     img: "/images/testimonial-01.jpg",
//     name: "Rodri Alba",
//     username: "@rodri_spn",
//     date: "May 19, 2027",
   
//     channel: "Twitter",
//   },
//   {
//     img: "/images/testimonial-01.jpg",
//     name: "Michele Lex",
//     date: "May 19, 2027",
//     // content:
//     //   "I run a nonprofit organization, and we needed a website to share our mission and connect with donors. This tool allowed us to create a visually appealing site that effectively communicates our message.",
//     rating: 5,
//     channel: "Google",
//   },
//   {
//     img: "/images/testimonial-01.jpg",
//     name: "Michael Ross",
//     username: "@michjack",
//     date: "Apr 12, 2027",
    
//     channel: "Twitter",
//   },
//   {
//     img: "/images/testimonial-01.jpg",
//     name: "Mike Bryan",
//     username: "@mike0point7",
//     date: "Mar 10, 2027",
//     content: "Bluehouse's mind-blowing AI Site Builder: Crash Course 🚀",
//     videoThumb: TestimonialVideoThumb01,
//     videoUrl: "#0",
//     channel: "YouTube",
//   },
//   {
//     img: "/images/testimonial-01.jpg",
//     name: "Sarah Rodriguez",
//     username: "@sararodriguez",
//     date: "Feb 27, 2027",
//     content:
//       "I was blown away by how easy it was to create my website using this tool! Within a few hours, I had a professional-looking site up and running, and my client could not believe.",
//     channel: "Twitter",
//   },
  
  
  
 
// ];


// export default function WallOfLove() {
//   const masonryContainer = useMasonry();

//   return (
//     <section>
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="pb-12 md:pb-20">
//           {/* Testimonials grid */}
//           <div
//             ref={masonryContainer}
//             className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
//           >
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="group">
//                 <Testimonial
//                   testimonial={testimonial}
//                   className="w-full rotate-0 md:group-odd:-rotate-1 md:group-even:rotate-1"
//                 >
//                   {testimonial.content}
//                 </Testimonial>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import useMasonry from "@/utils/useMasonry";
import Image from "next/image";

// Import images correctly
import TestimonialImg01 from "@/public/images/testimonial-01.png";
import TestimonialImg02 from "@/public/images/testimonial-02.png";
import TestimonialImg03 from "@/public/images/testimonial-03.png";
import TestimonialImg04 from "@/public/images/testimonial-04.png";
import TestimonialImg05 from "@/public/images/testimonial-05.png";
import TestimonialImg06 from "@/public/images/testimonial-06.png";

const testimonials = [
  { img: TestimonialImg01, name: "" },
  { img: TestimonialImg02, name: "" },
  { img: TestimonialImg03, name: "" },
  { img: TestimonialImg04, name: "" },
  { img: TestimonialImg05, name: "" },
  { img: TestimonialImg06, name: "" },
];

export default function WallOfLove() {
  const masonryContainer = useMasonry();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Testimonials grid */}
          <div
            ref={masonryContainer}
            className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                {/* Display image only */}
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={500}
                  height={100}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
