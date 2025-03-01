"use client";

import useMasonry from "@/utils/useMasonry";
import Image from "next/image";

const testimonials = [
  { img: "/images/testimonial-01.png", name: "" },
  { img: "/images/testimonial-02.png", name: "" },
  { img: "/images/testimonial-03.png", name: "" },
  { img: "/images/testimonial-04.png", name: "" },
  { img: "/images/testimonial-05.png", name: "" },
  { img: "/images/testimonial-06.png", name: "" },
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
