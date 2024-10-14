"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Transform = () => {
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
    <div className="container max-w-[1440px] px-5 pt-[70px] md:pt-5 pb-[50px] sm:pb-[100px] mx-auto lg:px-10 xl:px-[63px] transform-padding">
      <div className="sm:mt-[745px]">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 xl:gap-3 mb-[20px] sm:mb-[40px]">
          <div className="sm:col-span-5 lg:col-span-4 xl:col-span-3">
            <Image
              src="/img/home/transform-logo.svg"
              alt="Transform-logo"
              width={160}
              height={26}
              loading="lazy"
              className="w-[116.47px] sm:w-[138px] xl:w-[160.47px] h-[22px] xl:h-[26px] mb-[12px]"
            />
            <h4 className="text-[20px] xl:text-[24px] leading-[28px] sm:leading-[32px] xl:leading-[38px] font-bold futura-bold text-white max-sm:mb-[20px]">
              Maximize Your Capabilities with Salesforce CRM
            </h4>
          </div>
          <div className="sm:col-span-7 lg:col-span-8 xl:col-span-9">
            <p className="text-[13px] sm:text-[16px] xl:text-[20px] leading-[19px] sm:leading-[24px] xl:leading-[30px] font-normal text-white lato-thin pr-0 lg:pr-[156px] xl:pr-[285px]">
              At Sailways, we master the art of integrating Salesforce CRM
              systems to drive business expansion. With a tailored strategy, we
              assist organizations in boosting sales, improving customer
              connections, and optimizing processes.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 lg:items-center lg:flex-row lg:flex-wrap sm:gap-5 xl:flex-nowrap xl:gap-0 xl:justify-between">
          <div
            className="w-full lg:w-auto pl-[20px] pr-0 sm:pr-[59px] py-[4px] sm:py-[10px] rounded-[150px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.06) 100%)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/img/home/check-icon.svg"
                alt="Check Icon"
                width={16}
                height={16}
                loading="lazy"
                className="w-[16px] h-[16px]"
              />
              <p className="lato-thin font-normal text-[11px] sm:text-[18px] leading-[17px] sm:leading-[28px] text-white">
                Harness the Magic of Salesforce CRM
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-auto pl-[20px] pr-0 sm:pr-[51px] py-[4px] sm:py-[10px] rounded-[150px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.06) 100%)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/img/home/check-icon.svg"
                alt="Check Icon"
                width={16}
                height={16}
                loading="lazy"
                className="w-[16px] h-[16px]"
              />
              <p className="lato-thin font-normal text-[11px] sm:text-[18px] leading-[17px] sm:leading-[28px] text-white">
                Boost Your Sales and Earnings
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-auto pl-[20px] pr-0 sm:pr-[30px] py-[4px] sm:py-[10px] rounded-[150px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.06) 100%)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/img/home/check-icon.svg"
                alt="Check Icon"
                width={16}
                height={16}
                loading="lazy"
                className="w-[16px] h-[16px]"
              />
              <p className="lato-thin font-normal text-[11px] sm:text-[18px] leading-[17px] sm:leading-[28px] text-white">
                Deepen Customer Connections Optimize Your Operation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-[#ffffff4d] my-[30px] mx-2"></div>
      <div className="flex justify-center">
        <a
          className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
          onClick={freeConsultationClick}
          aria-label="redirect to consultation form"
        >
          SCHEDULE YOUR FREE CONSULTATION
        </a>
      </div>
    </div>
  );
};

export default Transform;
