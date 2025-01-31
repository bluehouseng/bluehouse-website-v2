export const metadata = {
  title: 'Bluehouse',
  description: 'Learn | Innovate | Impact',
};

import Hero from '@/components/hero-home';
import BusinessCategories from '@/components/business-categories';
import LargeTestimonial from '@/components/large-testimonial';
import FeaturesPlanet from '@/components/features-planet';
import Features from '@/components/features-home';
import TestimonialsCarousel from '@/components/testimonials-carousel';
import Cta from '@/components/cta';
import Partners from '@/components/partners';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <BusinessCategories />
      <FeaturesPlanet />
      {/* <Features /> */}
      {/* <LargeTestimonial /> */}
      {/* <TestimonialsCarousel /> */}
      <Cta />
    </>
  );
}
