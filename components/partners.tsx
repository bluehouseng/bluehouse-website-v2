"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import partners1 from "@/public/images/partiners/partners1.png";
import partners2 from "@/public/images/partiners/partners2.png";
import techsynegy from "@/public/images/partiners/techsynegy.png";
import axiahub from "@/public/images/partiners/axiahub.png";
import clockchain from "@/public/images/partiners/clockchain.png";
import ask from "@/public/images/partiners/ask.png";
import aws from "@/public/images/partiners/aws.png";
import microsoft1 from "@/public/images/partiners/microsoft1.png";
import iwf from "@/public/images/partiners/iwf.png";

const partnerImages = [
  partners1,
  partners2,
  aws,

  microsoft1,
  techsynegy,
  axiahub,
  clockchain,
  ask,
  iwf,
];

export default function Partners() {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      const imgWidth = 300;
      const margin = 48;
      return partnerImages.length * (imgWidth + margin);
    };
    setContainerWidth(updateContainerWidth());
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="text-center ">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Partners</h2>
      </div>
      <div className="flex flex-row justify-center items-center relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: [0, -containerWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 100,
              ease: "linear",
            },
          }}
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          {[...partnerImages, ...partnerImages].map((src, index) => (
            <div
              key={index}
              className="flex items-center before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:[background:linear-gradient(to_right,theme(colors.gray.200),theme(colors.gray.300),theme(colors.gray.400))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] rounded-xl mx-4 flex-shrink-0 px-8 my-6  hover:grayscale-0"
            >
              <Image
                src={src}
                alt={`Partner Logo ${index + 1}`}
                className="max-h-40 max-w-60 overflow-auto object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
