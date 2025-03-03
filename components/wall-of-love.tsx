

"use client";

import useMasonry from "@/utils/useMasonry";
import Image from "next/image";
import testimonial01 from "@/public/images/testimonial/testimonial-01.png";
import testimonial02 from "@/public/images/testimonial/testimonial-02.png";
import testimonial03 from "@/public/images/testimonial/testimonial-03.png";
import testimonial04 from "@/public/images/testimonial/testimonial-04.png";
import testimonial05 from "@/public/images/testimonial/testimonial-05.png";
import testimonial06 from "@/public/images/testimonial/testimonial-06.png";

const testimonials = [
  { img: testimonial01, name: "" },
  { img: testimonial02, name: "" },
  { img: testimonial03, name: "" },
  { img: testimonial04, name: "" },
  { img: testimonial05, name: "" },
  { img: testimonial06, name: "" },
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
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={500}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}