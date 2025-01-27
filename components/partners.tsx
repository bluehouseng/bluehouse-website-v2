'use client';

import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

import partners1 from "@/public/images/partiners/partners1.png";
import partners2 from "@/public/images/partiners/partners2.png";






import partners11 from "@/public/images/partiners/partners11..png";



import techsynegy from "@/public/images/partiners/techsynegy.png"
import axiahub from "@/public/images/partiners/axiahub.png"
import clockchain from "@/public/images/partiners/clockchain.png"
import ask from "@/public/images/partiners/ask.png"

import plexo from "@/public/images/partiners/plexo.png"
 import aws from "@/public/images/partiners/aws.png";
import edge from "@/public/images/partiners/edge.png"




import microsoft1 from "@/public/images/partiners/microsoft1.png"

const partnerImages = [ partners1, partners2,  aws,  plexo, partners11,  edge, microsoft1,  techsynegy, axiahub,  clockchain, ask, ];

export default function Partners() {
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const calculateWidth = () => {
      const imgWidth = 300; 
      const margin = 48; 
      return partnerImages.length * (imgWidth + margin);
    };
    setWidth(calculateWidth());
  }, []);

  useEffect(() => {
    if (width > 0) {
      controls.start({
        x: [0, -width],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, width]);

  return (
    <div>
       <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Partners</h2>
        </div>
      <div className='flex flex-row justify-center items-center  relative overflow-hidden'>
      
        <motion.div className="flex" animate={controls}>
          {/* Render the partner images twice */}
          {[...partnerImages, ...partnerImages].map((src, index) => (
            <div key={index + 1} className='flex items-center  before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]   before:[background:linear-gradient(to_right,theme(colors.gray.200),theme(colors.gray.300),theme(colors.gray.400))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] rounded-xl mx-4 flex-shrink-0 px-24 my-6 grayscale hover:grayscale-0'>
              <Image
                src={src}
                alt={`Partner Logo ${index + 1}`}
                className='max-h-40 max-w-60 overflow-auto object-cover'
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
