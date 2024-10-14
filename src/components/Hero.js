"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const freeConsultationClick = () => {
    const freeConsultation = document.getElementById("freeConsultation");
    if (!freeConsultation) {
      router.push("/contact#freeConsultation");
    } else {
      router.push("#freeConsultation");
    }
  };

  return (
    <div className="container max-w-[1440px] px-5 pt-0 sm:pt-4 mx-auto mt-[40px] lg:mt-[79px] lg:px-10 xl:px-[63px]">
      <div className="w-[100%] lg:w-[60%] xl:w-[50%]">
        <div className="pr-0 xl:pr-[75px] text-left">
          <h1 className="text-[22px] sm:text-[36px] lg:text-[48px] leading-[32px] sm:leading-[48px] lg:leading-[58px] futura-bold font-bold text-white mb-4 sm:mb-[30px] tracking-wide">
            Elevate Your Business Success with Sailwayz Salesforce CRM
          </h1>
          <p className="text-[13px] sm:text-[18px] lg:text-[22px] leading-[19px] sm:leading-[29px] lg:leading-[32px] text-morningMist font-normal sm:font-medium lato-thin mb-[15px] sm:mb-[30px] lg:mb-[50px]">
            Transform your business with our personalized Salesforce CRM
            consulting services. We specialize in optimizing sales processes to
            drive growth. Our team of experts collaborates with you to
            understand your unique business needs and implement Salesforce
            solutions that deliver measurable results.
          </p>
          <div className="mb-[46px] sm:mb-[123px]">
            <div className="flex flex-col gap-2.5 sm:gap-5 sm:flex-row sm:items-center">
              <a
                className="bg-primaryPink hover:bg-secondaryPink transition-button px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full cursor-pointer"
                href="/services"
                aria-label="redirect to service page"
              >
                LEARN MORE
              </a>
              <a
                className="bg-primaryBlue hover:bg-secondaryBlue transition-button px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full cursor-pointer"
                onClick={freeConsultationClick}
                aria-label="redirect to consultation form"
              >
                SCHEDULE A FREE CONSULTATION
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
