import Image from "next/image";
import aboutImage from "@/public/images/summertraining/training13.jpg";

export default function About() {
  return (
    <div className="mt-32">
      <h2 className="text-5xl cursor-pointer font-semibold mb-4 flex justify-center">
        About Us
      </h2>
      <div className="mt-8 items-center px-4 md:px-16">
        <p className="text-xl text-center font-light flex justify-center p-8 leading-relaxed">
          At Bluehouse, innovation is driven by collaboration, diversity, and a
          commitment to excellence. The company emphasizes fostering a creative
          workplace where ideas flourish, and employees are empowered to make
          meaningful contributions. Bluehouse has made significant strides in
          helping businesses adopt modern technologies, streamline operations,
          and achieve their goals. Its commitment to sustainability and
          forward-thinking technology positions it as a company of the future.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:items-center px-4 md:px-16  space-y-8 md:space-y-0">
  {/* Text Section */}
  <div className="flex-1 bg-gray-900/25 mb-8 h-auto md:h-[495px] rounded-md p-8 md:p-20">
    <h1 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
      Innovating the Future Through Collaboration and Technology
    </h1>
    <p className="font-medium leading-relaxed">
      Bluehouse fosters an environment where ideas flourish, diversity is
      celebrated, and meaningful contributions are made. Positioned as a
      company of the future, Bluehouse is shaping industries and creating
      impactful solutions that leave a lasting legacy.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex justify-center md:justify-end md:pt-32">
    <Image
      src={aboutImage}
      alt="Descriptive Alt Text"
      width={600}
      height={500}
      className="rounded-md shadow-lg"
    />
  </div>
</div>

    </div>
  );
}
