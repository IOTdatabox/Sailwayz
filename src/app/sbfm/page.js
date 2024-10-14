import Challenges from "@/components/CaseStudy/Sbfm/Challenges";
import ClientBackground from "@/components/CaseStudy/Sbfm/ClientBackground";
import Conclusion from "@/components/CaseStudy/Sbfm/Conclusion";
import Hero from "@/components/CaseStudy/Sbfm/Hero";
import Results from "@/components/CaseStudy/Sbfm/Results";
import Solution from "@/components/CaseStudy/Sbfm/Solution";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full bg-[url('/img/case/case-study-3.png')] bg-cover bg-no-repeat max-sm:bg-center">
        <Header />
        <Hero />
      </div>
      <ClientBackground />
      <Challenges />
      <Solution />
      <Results />
      <Conclusion />
      <Footer />
    </>
  );
};

export default Page;
