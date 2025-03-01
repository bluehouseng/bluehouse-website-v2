export const metadata = {
  title: "Customers - Bluehouse",
  description: "Page description",
};

import Hero from "./hero";
import WallOfLove from "@/components/wall-of-love";
import Cta from "@/components/cta-alternative";

export default function Customers() {
  return (
    <>
      <Hero />
      <WallOfLove />
      <Cta
        heading="Join us at Bluehouse"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
