"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Badge from "./Badge";

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
            <div className="mb-[10px]">
              <Badge
                text="TRANSFORM"
                bgColor="bg-morningMist"
                textColor="text-primaryColor"
                src="/img/home/cloud-black.svg"
                font="futura-boldLT"
              />
            </div>
            <h2 className="futura-bold font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[46px] text-primaryColor mb-[20px]">
              Why Choose Sailwayz?
            </h2>
            <p className="lato-font font-normal text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[30px] text-secondaryColor">
              At Sailwayz, we specialize in personalized consultations, tailored
              CRM strategies, and continuous support to unlock Salesforce&apos;s
              full potential. Our expert team collaborates with you to
              understand your unique business needs, delivering solutions that
              drive growth and success.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-7">
            <div className="flex items-center justify-center">
              <Image
                src="/img/home/whychoose.svg"
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
            <div className="mb-[10px]">
              <Badge
                text="FOCUS SECTORS"
                bgColor="bg-morningMist"
                textColor="text-primaryColor"
                src="/img/home/cloud-black.svg"
                font="futura-boldLT"
              />
            </div>
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
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/finance-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/finance-icon.svg"
                    alt="Finance icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px] "
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Finance
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/gov-org-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/gov-org-icon.svg"
                    alt="Government icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Government Organisations
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/retail-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/retail-icon.svg"
                    alt="Retail icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Retail
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/connectivity-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/connectivity.svg"
                    alt="Connectivity icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Connectivity
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/law-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/law-icon.svg"
                    alt="Law icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Law
                  </h3>
                </div>
              </div>

              <div className="cursor-pointer shine-hover">
                <div className="shine rounded-[16px] p-[30px] lg:p-[20px] xl:p-[30px] bg-[url('/img/home/manufacturing-bg.svg')] bg-cover bg-no-repeat h-[170px] sm:h-[240px] lg:h-[170px] xl:h-[240px]">
                  <Image
                    src="/img/home/manufacturing-icon.svg"
                    alt="Manufacturing icon"
                    width={62}
                    height={62}
                    loading="lazy"
                    className="w-[48px] sm:w-[62px] h-[47px] sm:h-[62px] mb-[16px] sm:mb-[20px] lg:mb-[10px] xl:mb-[20px] max-sm:mt-[8px]"
                  />
                  <h3 className="futura-bold text-white font-bold text-[18px] sm:text-[28px] lg:text-[22px] xl:text-[28px] leading-[26px] sm:leading-[38px] lg:leading-[32px] xl:leading-[38px]">
                    Manufacturing
                  </h3>
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
