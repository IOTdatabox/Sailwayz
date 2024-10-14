import Image from "next/image";
import Link from "next/link";
import React from "react";

const Responsive = () => {
  return (
    <div className="block sm:hidden bg-lightBlue w-full container px-5 py-[50px]">
      <Image
        src="/img/home/responsive-logo.svg"
        alt="Responsive logo"
        width={111}
        height={18}
        className="w-[111.47px] h-[18px] mb-[10px] mx-auto"
      />
      <h1 className="futura-bold font-bold text-[24px] leading-[32px] text-primaryColor text-center mb-[30px]">
        Learn about Sailways&apos; Salesforce victories.
      </h1>
      <div className="w-full rounded-[16px] mb-[10px]">
        <Image
          src="/img/home/responsive-1.svg"
          alt="Responsive 1"
          width={335}
          height={197.63}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
      <h2 className="text-[20px] leading-[28px] text-primaryColor font-bold futura-bold mb-[12px]">
        Basic
      </h2>
      <p className="lato-font text-secondaryColor text-[13px] leading-[19px] font-normal mb-[12px]">
        Boost user productivity and maximize Salesforce CRM benefits.
        Multichannel support via email and phone, Monday to Friday, 9:00 -
        18:00.
      </p>
      <Link href={"/"} aria-label="redirect to home page">
        <span className="text-secondaryColor text-[10px] leading-[20px] underline futura-bold font-bold hover:text-primaryBlue">
          SEE THE STORY
        </span>
      </Link>
      <div className="w-full rounded-[16px] mb-[10px] mt-[31px]">
        <Image
          src="/img/home/responsive-2.svg"
          alt="Responsive 2"
          width={335}
          height={197.63}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
      <h2 className="text-[20px] leading-[28px] text-primaryColor font-bold futura-bold mb-[12px]">
        Standard
      </h2>
      <p className="lato-font text-secondaryColor text-[13px] leading-[19px] font-normal mb-[18px]">
        Our senior support team of Salesforce admins addresses all inquiries,
        including user issues and system configuration needs. We provide
        Salesforce CRM health check reports to evaluate CRM effectiveness.
      </p>
      <p className="lato-font text-secondaryColor text-[13px] leading-[19px] font-normal mb-[12px]">
        Monday To Friday 9:00 - 18:00
      </p>
      <Link href={"/"} aria-label="redirect to home page">
        <span className="text-secondaryColor text-[10px] leading-[20px] underline futura-bold font-bold hover:text-primaryBlue">
          SEE THE STORY
        </span>
      </Link>
      <div className="w-full rounded-[16px] mb-[10px] mt-[31px]">
        <Image
          src="/img/home/responsive-3.svg"
          alt="Responsive 3"
          width={335}
          height={198}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
      <h2 className="text-[20px] leading-[28px] text-primaryColor font-bold futura-bold mb-[12px]">
        Premier
      </h2>
      <ul className="mb-[12px] list-disc ml-[19px]">
        <li className="lato-font text-secondaryColor text-[13px] leading-[19px] font-normal">
          Dedicated Salesforce CRM Support
        </li>
        <li className="lato-font text-secondaryColor text-[13px] leading-[19px] font-normal">
          Ongoing Salesforce CRM Maintenance
        </li>
        <li className="lato-font text-secondaryColor text-[13px] leading-[19px] font-normal">
          Application Restructuring as Needed
        </li>
        <li className="lato-font text-secondaryColor text-[13px] leading-[19px] font-normal">
          Configuration and Customization
        </li>
        <li className="lato-font text-secondaryColor text-[13px] leading-[19px] font-normal">
          New Feature Design
        </li>
        <li className="lato-font text-secondaryColor text-[13px] leading-[19px] font-normal">
          Advanced Application Optimization
        </li>
      </ul>
      <Link href={"/"} aria-label="redirect to home page">
        <span className="text-secondaryColor text-[10px] leading-[20px] underline futura-bold font-bold hover:text-primaryBlue">
          SEE THE STORY
        </span>
      </Link>
    </div>
  );
};

export default Responsive;
