


"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper"; 
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  const testimonials = [
    {
      text: "Bluehouse has simplified my life in more ways than one. From managing my sites to keeping track of tasks, it's become my go-to tool for everything.",
      author: "Mary Sullivan",
      role: "CTO at Microsoft",
      image: TestimonialImg,
    },
    {
      text: "The team at Bluehouse delivers exceptional results. Their tech solutions streamlined our processes and improved efficiency significantly.",
      author: "John Doe",
      role: "CEO at Tech Innovators",
      image: TestimonialImg,
    },
    {
      text: "Joining Bluehouse's community has been life-changing. I gained practical skills and networked with industry leaders.",
      author: "Jane Smith",
      role: "Software Engineer at Google",
      image: TestimonialImg,
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h2 className="text-3xl font-bold text-center md:text-4xl">Testimonials</h2>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 5000, 
              disableOnInteraction: false,
            }}
            loop={true}
            speed={2000}  
            modules={[Autoplay, Navigation, Pagination]} 
            className="mt-6"
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            style={{ height: "260px" }} 
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="space-y-3 text-center">
                  <div className="relative inline-flex">
                    <svg
                      className="absolute -left-6 -top-2 -z-10"
                      width={40}
                      height={49}
                      viewBox="0 0 40 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                        fill="#D1D5DB"
                      />
                    </svg>
                    <Image
                      className="rounded-full"
                      src={testimonial.image}
                      width={48}
                      height={48}
                      alt={`${testimonial.author}'s testimonial`}
                    />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{`“${testimonial.text}”`}</p>
                  <div className="text-sm font-medium text-gray-500">
                    <span className="text-gray-700">{testimonial.author}</span>{" "}
                    <span className="text-gray-400">/</span>{" "}
                    <a className="text-blue-500" href="#0">
                      {testimonial.role}
                    </a>
                  </div>
                  <a className="text-blue-500 text-sm" href="#0">
                    More
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
          <div className="swiper-pagination mt-6 text-center"></div>
        </div>
      </div>
    </section>
  );
}
