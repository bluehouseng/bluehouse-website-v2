export const metadata = {
  title: "Apps - Bluehouse",
  description: "Page description",
};

import Hero from "./hero";
import AppList from "@/components/app-list";
import Cta from "@/components/cta-alternative";

export default function Apps() {
  return (
    <>
      <Hero />
      <AppList />
      <Cta
        heading="Create you next project with Bluehouse Technologies"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
