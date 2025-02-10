import Image from 'next/image';
import Link from 'next/link';
import PageIllustration from '@/components/page-illustration';
import Avatar01 from '@/public/images/avatar-01.jpg';
import Bluehouse2 from '@/public/images/bluehouse-logo.png';
import Avatar03 from '@/public/images/avatar-03.jpg';
import Avatar04 from '@/public/images/avatar-04.jpg';
import Avatar05 from '@/public/images/avatar-05.jpg';
import Avatar06 from '@/public/images/avatar-06.jpg';

export default function HeroHome() {
  return (
    <section>
      {/* <PageIllustration /> */}
      <div className='mx-auto max-w-6xl px-4 sm:px-6  '>
        {/* Hero content */}
        <div className='pb-12 pt-32 md:pb-20 md:pt-20'>
          {/* Section header */}
          <div className='pb-12 text-center md:pb-16'>
            <div
              className='mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]'
              data-aos='zoom-y-out'
            >
              {/* <div className='-mx-0.5 flex justify-center -space-x-3 md:mt-6'>
                <Image
                  className='box-content rounded-full border-2 border-gray-50 w-36'
                  src={Bluehouse2}
                  width={32}
                  height={32}
                  alt='Bluehouse logo'
                />
              </div> */}
            </div>
            <h1
              className=' border-y text-5xl md:mt-24 font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl'
              data-aos='zoom-y-out'
              data-aos-delay={150}
            >
              Empowering the Next Generation <br className='max-lg:hidden' />
              of Tech Innovators
            </h1>
            <div className='mx-auto max-w-3xl'>
              <p
                className='mb-8 text-lg text-gray-700'
                data-aos='zoom-y-out'
                data-aos-delay={300}
              >
                Discover world-class training, consultancy, and innovative
                solutions tailored for your success.
              </p>
              <div className='relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]'>
                <div
                  className='relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center'
                  data-aos='zoom-y-out'
                  data-aos-delay={450}
                >
                  <Link
                    href='https://forms.gle/jukVa9Sc3FARAYkp6'
                    target='_blank'
                    className='btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto'
                  >
                    <span className='relative inline-flex items-center'>
                      Have a Project?{' '}
                      <span className='ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5'>
                        -&gt;
                      </span>
                    </span>
                  </Link>
                  <Link
                    href='https://forms.gle/14znUV5fWGwrWFG58'
                    target='_blank'
                    className='btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto'
                  >
                    Join Our Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
}







