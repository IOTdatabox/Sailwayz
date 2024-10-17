import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardLayout from "@/components/CardLayout";
import CaseStudies from "@/components/CaseStudies";
import CaseStudiesMobile from "@/components/CaseStudiesMobile";
import ConsultingPartners from "@/components/ConsultingPartners";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Innovative from "@/components/Innovative";
import Partnerships from "@/components/Partnerships";
import Responsive from "@/components/Responsive";
import StepByStepGuide from "@/components/StepByStepGuide";
import Testimonials from "@/components/Testimonials";
import TipsUpdate from "@/components/TipsUpdate";
import Transform from "@/components/Transform";
import TrustedBy from "@/components/TrustedBy";
import WhatWeProvide from "@/components/WhatWeProvide";
import WhyChoose from "@/components/WhyChoose";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href="/img/home/hero-background.png" as="image" />
        <link
          rel="preload"
          href="/img/home/hero-background-mobile.png"
          as="image"
        />
      </Head>
      <div className="w-full bg-[url('/img/home/hero-background-mobile.png')] sm:bg-[url('/img/home/hero-background.png')] bg-cover bg-no-repeat relative z-[-1] padding-bottom-bg max-lg:bg-center">
        <Header />
        <Hero />
        <Partnerships />
        <Innovative />
      </div>
      <div className="h-[946px] home-transform">
        <div className="w-full bg-[url('/img/home/transform-sm.png')] lg:bg-[url('/img/home/transform-background.png')] bg-cover bg-no-repeat bg-position sm:background-center">
          <CardLayout />
          <Transform />
        </div>
      </div>
      <TrustedBy />
      <WhyChoose />
      <CaseStudies />
      <CaseStudiesMobile />
      <StepByStepGuide />
      <WhatWeProvide />
      <ConsultingPartners />
      <Responsive />
      <Testimonials />
      <FAQAccordion />
      <TipsUpdate />
      <Footer />
    </>
  );
}
