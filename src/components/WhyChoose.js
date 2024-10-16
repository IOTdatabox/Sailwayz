"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const WhyChoose = () => {
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
    <div className="w-full bg-white">
      <div className="container max-w-[1440px] px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        {/* why choose */}
        <div className="grid items-center grid-cols-1 lg:grid-cols-12 mb-[30px] sm:mb-[60px]">
          <div className="col-span-1 lg:col-span-5 mb-[30px] lg:mb-0">
            <Image
              src="/img/home/transform-logo-black.svg"
              alt="Transform Logo"
              width={160}
              height={26}
              loading="lazy"
              className="hidden lg:block w-[160.47px] h-[26px] mb-[10px]"
            />
            <Image
              src="/img/home/transform-logo-small.svg"
              alt="Transform Logo"
              width={160}
              height={26}
              loading="lazy"
              className="block lg:hidden w-[116.47px] sm:w-[150px] h-[22px] sm:h-[26px] mb-[10px]"
            />
            <h2 className="futura-bold font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[46px] text-primaryColor mb-[20px]">
              Why Choose Sailways?
            </h2>
            <p className="lato-font font-normal text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[30px] text-secondaryColor">
              At Sailways, we specialize in personalized consultations, tailored
              CRM strategies, and continuous support to unlock Salesforce&apos;s
              full potential. Our expert team collaborates with you to
              understand your unique business needs, delivering solutions that
              drive growth and success.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-7">
            <div className="flex items-center justify-center">
              <Image
                src="/img/home/whychoose.png"
                alt="Why Choose"
                width={606}
                height={414}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* focus sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
          <div className="col-span-6 xl:col-span-3">
            <Image
              src="/img/home/focus-sector-logo.svg"
              alt="Transform Logo"
              width={186}
              height={26}
              loading="lazy"
              className="w-[132.47px] sm:w-[140px] lg:w-[186px] h-[22px] lg:h-[26px] mb-[10px]"
            />
            <h2 className="futura-bold font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[46px] text-primaryColor mb-[20px]">
              Industries we serve
            </h2>
            <p className="lato-font font-normal text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[30px] text-secondaryColor">
              Sailwayz caters to a broad spectrum of industries, applying our
              specialized knowledge to deliver tailored solutions that tackle
              the unique challenges faced by each sector.
            </p>
          </div>
          <div className="col-span-6 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[12px] sm:gap-[30px] lg:gap-[15px] xl:gap-[30px] mb-[30px] sm:mb-[60px]">
              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] h-auto">
                  <Image
                    src="/img/home/finance.png"
                    alt="Finance icon"
                    width={300}
                    height={240}
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] h-auto">
                  <Image
                    src="/img/home/government-org.png"
                    alt="government-org icon"
                    width={300}
                    height={240}
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] h-auto">
                  <Image
                    src="/img/home/retail.png"
                    alt="retail icon"
                    width={300}
                    height={240}
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] h-auto">
                  <Image
                    src="/img/home/connectivity.png"
                    alt="connectivity icon"
                    width={300}
                    height={240}
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] h-auto">
                  <Image
                    src="/img/home/law.png"
                    alt="law icon"
                    width={300}
                    height={240}
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] h-auto">
                  <Image
                    src="/img/home/manufacturing.png"
                    alt="manufacturing icon"
                    width={300}
                    height={240}
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a
            className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
            onClick={freeConsultationClick}
            aria-label="redirect to consultation form"
          >
            SCHEDULE YOUR FREE CONSULTATION
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
