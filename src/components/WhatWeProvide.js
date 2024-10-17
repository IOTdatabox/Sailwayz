import Image from "next/image";
import React from "react";
import Badge from "./Badge";

const WhatWeProvide = () => {
  const expertises = [
    {
      image: "/img/home/salesfoce.svg",
      title: "Salesforce Cloud",
      content:
        "Harness the power of Salesforce Cloud to streamline your business processes, enhance customer relationships, and drive growth with our comprehensive CRM solutions.",
    },
    {
      image: "/img/home/Support.svg",
      title: "Service Cloud",
      content:
        "Elevate your customer service experience with Service Cloud, providing personalized support, efficient case management, and multi-channel integration to resolve issues quickly and effectively.",
    },
    {
      image: "/img/home/tableau.svg",
      title: "Tableau Cloud",
      content:
        "Unlock the power of data visualization with Tableau Cloud, enabling interactive dashboards and real-time analytics to drive informed decision-making and gain valuable insights.",
    },
    {
      image: "/img/home/Communication.svg",
      title: "Experience Cloud",
      content:
        "Create engaging and branded digital experiences with Experience Cloud, fostering better communication and collaboration through custom portals for customers, partners, and employees.",
    },
  ];

  return (
    <div className="w-full bg-lightGrey">
      <div className="container max-w-[1440px] px-5 mx-auto py-[40px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="flex flex-col items-center w-full">
          <div className="mb-[10px]">
            <Badge
              text="WHAT WE PROVIDE"
              src="/img/home/cloud-white.svg"
              bgColor="bg-secondaryColor"
              textColor="text-morningMist"
              font="futura-bold"
            />
          </div>
          <h2 className="futura-bold text-primaryColor text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[43px] lg:leading-[46px] font-bold mb-[10px]">
            Our Expertise
          </h2>
          <p className="lato-font text-[13px] sm:text-[18px] xl:text-[20px] leading-[19px] sm:leading-[28px] xl:leading-[30px] text-center text-primaryColor font-normal px-0 sm:px-[36px] lg:px-[145px] xl:px-[240px] mb-[40px]">
            Sailwayz offers customized strategies that enhance efficiency,
            support data-driven decision-making, and improve customer
            experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[30px] lg:gap-[15px] xl:gap-[30px]">
            {expertises.map((expertise, index) => (
              <div
                key={index}
                className="bg-white rounded-[8px] sm:rounded-[24px] p-[16px] sm:p-[25px] lg:p-[20px] xl:p-[25px] transition-transform duration-300 ease-in-out transform hover:scale-[1.03]"
              >
                <div className="w-[42px] sm:w-[62px] lg:w-[55px] xl:w-[62px] h-[42px] sm:h-[62px] lg:h-[55px] xl:h-[62px] mb-[10px] lg:mb-[8px] xl:mb-[10px] bg-secondaryColor rounded-full flex items-center justify-center">
                  <Image
                    src={expertise.image}
                    alt="Salesforce cloud"
                    width={27}
                    height={27}
                    loading="lazy"
                    className="w-[18.38px] sm:w-[27.13px] h-[18.38px] sm:h-[27.13px]"
                  />
                </div>
                <h4 className="text-[16px] sm:text-[22px] lg:text-[20px] xl:text-[22px] leading-[24px] sm:leading-[32px] lg:leading-[30px] xl:leading-[32px] text-primaryColor futura-bold font-bold mb-[10px] lg:mb-[8px] xl:mb-[10px]">
                  {expertise.title}
                </h4>
                <p className="lato-font text-[13px] sm:text-[15px] lg:text-[13px] xl:text-[16px] leading-[21px] sm:leading-[26px] lg:leading-[20px] xl:leading-[26px] font-normal text-secondaryColor">
                  {expertise.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
