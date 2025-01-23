import PageIllustration from "@/components/page-illustration";
import Image from 'next/image';
import CYF_1039_1 from '@/public/images/CYF_1039_1.jpg';


export default function Hero() {
  return (
    <section className="relative">
         <div className="relative h-screen w-full">
        <Image src={CYF_1039_1} alt="Description of image" layout="fill" objectFit="cover" />
         <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Attract and inspire future students by showcasing opportunities for growth.
          </h1>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-10">
            Learn More
          </button>
        </div>
      </div>

          <div className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mt-9 mb-8">Welcome to Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Box 1</h3>
              <p className="text-gray-700">Content for box 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Box 2</h3>
              <p className="text-gray-700">Content for box 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Box 3</h3>
              <p className="text-gray-700">Content for box 3.</p>
            </div>
          </div>
        </div>
      </div>
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-10 text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              Our wall of love
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700">
                Read and listen to what our customers are saying about Bluehouse.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <a
                  className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Share Your Testimonial{" "}
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
