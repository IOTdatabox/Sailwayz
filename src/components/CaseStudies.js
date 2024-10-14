"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const caseStudies = [
  {
    image: "/img/home/case-studies-1.svg",
    alt: "Case Studies 1",
    title: "Vaioni Group Case Study",
    content:
      "Vaioni group is an internet provender specialising on providing fast, reliable, and managed Internet Services/ and technology to businesses.",
    link: "/vaioni-group",
  },
  {
    image: "/img/home/case-studies-2.svg",
    alt: "Case Studies 2",
    title: "Shoppertainment Management Case Study",
    content:
      "Shoppertainment Management helps landlords and shopping centres to optimise mall income and profitability through great ideas and dynamic marketing.",
    link: "/shoppertainment-management",
  },
  {
    image: "/img/home/case-studies-3.svg",
    alt: "Case Studies 3",
    title: "SBFM Case Study",
    content:
      "SBFM is a business that offers several management services to businesses nationwide specialising in, Cleaning, Catering, Security, Waste Management, Pest Control and Grounds Maintenance.",
    link: "/sbfm",
  },
];

const CaseStudies = () => {
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
    <div className="hidden sm:block w-full bg-[#071224]" id="caseStudies">
      <div className="container max-w-[1440px] px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="flex flex-col items-center w-full mb-[40px]">
          <Image
            src="/img/home/case-studies-logo.svg"
            alt="case studies"
            width={168}
            height={26}
            loading="lazy"
            className="w-[168.47px] h-[26px] mb-[10px]"
          />
          <h2 className="futura-bold text-white text-[32px] lg:text-[36px] leading-[43px] lg:leading-[46px] font-bold mb-[40px]">
            Learn about Sailways&apos; Salesforce victories.
          </h2>
          <div className="w-[400px] lg:w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-[30px] xl:gap-[40px]">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-primaryColor rounded-[24px] border border-secondaryColor h-[532px] lg:h-auto rounded-se-[24px] rounded-ss-[24px] overflow-hidden"
              >
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.alt}
                  width={410}
                  height={250}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-300 ease-out hover:scale-110"
                />
                <div className="p-[20px] xl:p-[25px] h-[55%] lg:h-[64%] xl:h-[59%] flex flex-col">
                  <h3 className="futura-bold text-white font-bold text-[20px] xl:text-[28px] leading-[32px] xl:leading-[38px] mb-[10px]">
                    {caseStudy.title}
                  </h3>
                  <p className="lato-thin text-[16px] xl:text-[20px] leading-[28px] xl:leading-[30px] text-white font-normal mb-[36px]">
                    {caseStudy.content}
                  </p>
                  <Link
                    href={caseStudy.link}
                    className="futura-bold text-[16px] leading-[26px] text-white font-medium underline mt-auto hover:text-primaryBlue max-sm:block"
                    aria-label="redirect to related case study page"
                  >
                    SEE THE STORY
                  </Link>
                </div>
              </div>
            ))}
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

export default CaseStudies;
