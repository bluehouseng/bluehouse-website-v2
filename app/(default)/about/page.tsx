import Image from "next/image";
import aboutImage from "@/public/images/summertraining/training13.jpg";

export default function About() {
  return (
    <div className="mt-32">
      <h2 className="text-5xl cursor-pointer font-semibold mb-4 flex justify-center">
        About Us
      </h2>
      <div className="mt-8 items-center px-4 md:px-16">
        <p className="text-xl font-light flex justify-center p-8 leading-relaxed">
          At Bluehouse, innovation is driven by collaboration, diversity, and a
          commitment to excellence. <br />
          The company emphasizes fostering a creative workplace where ideas
          flourish, and employees <br /> are empowered to make meaningful
          contributions. Bluehouse has made significant strides in helping{" "}
          <br /> businesses adopt modern technologies, streamline operations,
          and achieve their goals. Its commitment to <br />
          sustainability and forward-thinking technology positions it as a
          company of the <br />
          future.
        </p>
      </div>
      <div className="flex flex-col -space-x-32 z-10 md:flex-row items-center px-4 md:px-16 mt-10">
        {/* Left Side: Text */}
        <div className="flex-1 bg-slate-200 h-[600px] md:h-[500px] -z-10 rounded-3xl p-8 md:p-20">
          <h1 className="text-3xl h-24 font-semibold  mb-8 w-full">
            Innovating the Future Through Collaboration and Technology
          </h1>
          <p className="font-semibold text-xl leading-relaxed w-[590px]">
            Bluehouse fosters an environment where ideas flourish, diversity is
            celebrated, and meaningful contributions are made. Positioned as a
            company of the future, Bluehouse is shaping industries and creating
            impactful solutions that leave a lasting legacy.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-centern pt-24 absolute right-0 md:relative md:top-0 md:">
          <Image
            src={aboutImage}
            alt="Descriptive Alt Text"
            width={600}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
