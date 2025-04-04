"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ServiceHero = () => {
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
    <div>
      <div className="container max-w-[1440px] px-5 py-1 sm:py-5 mx-auto lg:px-10 xl:px-[63px] mt-[16px]">
        <div className="flex gap-0 lg:gap-[30px] mb-[50px] sm:mb-[116px]">
          <div className="w-full lg:w-[60%] xl:w-[45%]">
            <h1 className="futura-bold font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] text-white mb-[30px]">
              Boost Your Efficiency with Salesforce Integration
            </h1>
            <p className="lato-thin text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[30px] text-morningMist font-normal mb-[30px]">
              Unlock the full potential of your business with Sailwayz, the
              premier Salesforce CRM consultant. Reach out today to schedule a
              consultation and explore how Salesforce can transform your
              company.
            </p>
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
          <div className="max-lg:hidden lg:w-[40%] xl:w-[55%]"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
