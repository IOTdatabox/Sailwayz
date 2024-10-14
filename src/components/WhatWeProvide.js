import Image from "next/image";
import React from "react";

const WhatWeProvide = () => {
  return (
    <div className="w-full bg-lightGrey">
      <div className="container max-w-[1440px] px-5 mx-auto py-[40px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="flex flex-col items-center w-full">
          <Image
            src="/img/home/what-we-provide-logo.svg"
            alt="What We Provide"
            width={168}
            height={26}
            loading="lazy"
            className="w-[143.47px] sm:w-[175px] xl:w-[218.47px] h-[18px] sm:h-[21px] xl:h-[26px] mb-[10px]"
          />
          <h2 className="futura-bold text-primaryColor text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[43px] lg:leading-[46px] font-bold mb-[10px]">
            Our Expertise
          </h2>
          <p className="lato-font text-[13px] sm:text-[18px] xl:text-[20px] leading-[19px] sm:leading-[28px] xl:leading-[30px] text-center text-primaryColor font-normal px-0 sm:px-[36px] lg:px-[145px] xl:px-[240px] mb-[40px]">
            Sailwayz offers customized strategies that enhance efficiency,
            support data-driven decision-making, and improve customer
            experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[30px] lg:gap-[15px] xl:gap-[30px]">
            <div className="bg-white rounded-[8px] sm:rounded-[24px] p-[16px] sm:p-[25px] lg:p-[20px] xl:p-[25px] transition-transform duration-300 ease-in-out transform hover:scale-[1.03]">
              <Image
                src="/img/home/salesforce-cloud.svg"
                alt="Salesforce cloud"
                width={62}
                height={62}
                loading="lazy"
                className="w-[42px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[42px] sm:h-[62px] lg:h-[55px] xl:h-[62px] mb-[10px] lg:mb-[8px] xl:mb-[10px]"
              />
              <h4 className="text-[16px] sm:text-[22px] lg:text-[20px] xl:text-[22px] leading-[24px] sm:leading-[32px] lg:leading-[30px] xl:leading-[32px] text-primaryColor futura-bold font-bold mb-[10px] lg:mb-[8px] xl:mb-[10px]">
                Salesforce Cloud
              </h4>
              <p className="lato-font text-[13px] sm:text-[15px] lg:text-[13px] xl:text-[16px] leading-[21px] sm:leading-[26px] lg:leading-[20px] xl:leading-[26px] font-normal text-secondaryColor">
                Harness the power of Salesforce Cloud to streamline your
                business processes, enhance customer relationships, and drive
                growth with our comprehensive CRM solutions.
              </p>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[24px] p-[16px] sm:p-[25px] lg:p-[20px] xl:p-[25px]  transition-transform duration-300 ease-in-out transform hover:scale-[1.03]">
              <Image
                src="/img/home/service-cloud.svg"
                alt="Service cloud"
                width={62}
                height={62}
                loading="lazy"
                className="w-[42px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[42px] sm:h-[62px] lg:h-[55px] xl:h-[62px] mb-[10px] lg:mb-[8px] xl:mb-[10px]"
              />
              <h4 className="text-[16px] sm:text-[22px] lg:text-[20px] xl:text-[22px] leading-[24px] sm:leading-[32px] lg:leading-[30px] xl:leading-[32px] text-primaryColor futura-bold font-bold mb-[10px] lg:mb-[8px] xl:mb-[10px]">
                Service Cloud
              </h4>
              <p className="lato-font text-[13px] sm:text-[15px] lg:text-[13px] xl:text-[16px] leading-[21px] sm:leading-[26px] lg:leading-[20px] xl:leading-[26px] font-normal text-secondaryColor">
                Elevate your customer service experience with Service Cloud,
                providing personalized support, efficient case management, and
                multi-channel integration to resolve issues quickly and
                effectively.
              </p>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[24px] p-[16px] sm:p-[25px] lg:p-[20px] xl:p-[25px] transition-transform duration-300 ease-in-out transform hover:scale-[1.03]">
              <Image
                src="/img/home/tableau-cloud.svg"
                alt="Tableau cloud"
                width={62}
                height={62}
                loading="lazy"
                className="w-[42px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[42px] sm:h-[62px] lg:h-[55px] xl:h-[62px] mb-[10px] lg:mb-[8px] xl:mb-[10px]"
              />
              <h4 className="text-[16px] sm:text-[22px] lg:text-[20px] xl:text-[22px] leading-[24px] sm:leading-[32px] lg:leading-[30px] xl:leading-[32px] text-primaryColor futura-bold font-bold mb-[10px] lg:mb-[8px] xl:mb-[10px]">
                Tableau Cloud
              </h4>
              <p className="lato-font text-[13px] sm:text-[15px] lg:text-[13px] xl:text-[16px] leading-[21px] sm:leading-[26px] lg:leading-[20px] xl:leading-[26px] font-normal text-secondaryColor">
                Unlock the power of data visualization with Tableau Cloud,
                enabling interactive dashboards and real-time analytics to drive
                informed decision-making and gain valuable insights.
              </p>
            </div>
            <div className="bg-white rounded-[8px] sm:rounded-[24px] p-[16px] sm:p-[25px] lg:p-[20px] xl:p-[25px] transition-transform duration-300 ease-in-out transform hover:scale-[1.03]">
              <Image
                src="/img/home/experience-cloud.svg"
                alt="Experience cloud"
                width={62}
                height={62}
                loading="lazy"
                className="w-[42px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[42px] sm:h-[62px] lg:h-[55px] xl:h-[62px] mb-[10px] lg:mb-[8px] xl:mb-[10px]"
              />
              <h4 className="text-[16px] sm:text-[22px] lg:text-[20px] xl:text-[22px] leading-[24px] sm:leading-[32px] lg:leading-[30px] xl:leading-[32px] text-primaryColor futura-bold font-bold mb-[10px] lg:mb-[8px] xl:mb-[10px]">
                Experience Cloud
              </h4>
              <p className="lato-font text-[13px] sm:text-[15px] lg:text-[13px] xl:text-[16px] leading-[21px] sm:leading-[26px] lg:leading-[20px] xl:leading-[26px] font-normal text-secondaryColor">
                Create engaging and branded digital experiences with Experience
                Cloud, fostering better communication and collaboration through
                custom portals for customers, partners, and employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
