import Image from "next/image";
import React from "react";

const Innovative = () => {
  return (
    <div className="container block px-5 py-0 mx-auto sm:hidden">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/img/home/innovative.svg"
          alt="innovative logo"
          width={115}
          height={22}
          loading="lazy"
          className="w-[115.47px] h-[22px] mb-[12px]"
        />
        <h2 className="futura-normal font-normal text-[20px] leading-[28px] text-center text-white mb-[10px] tracking-wide">
          Transforming Salesforce CRM Implementation for Businesses
        </h2>
        <p className="text-lightGrey font-light lato-thin text-[13px] leading-[19px] text-center tracking-wide">
          At Sailways, we take a unique approach to Salesforce CRM
          implementation, tailored to meet the specific needs of your business.
          Our team of experts will guide you through the process, ensuring a
          seamless transition and maximum return on investment.
        </p>
      </div>
    </div>
  );
};

export default Innovative;
