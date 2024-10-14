import Image from "next/image";
import React from "react";

const CardLayout = () => {
  return (
    <div className="container max-w-[1440px] px-5 py-0 sm:py-5 mx-auto mt-[30px] sm:mt-[95px] lg:px-10 xl:px-[63px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] sm:gap-[30px]">
        <div
          className="hero-card bg-white max-sm:h-[101px] rounded-[12.82px] sm:rounded-[24px] px-[20px] py-[12px] sm:p-[18px] lg:p-[25px] xl:p-10 transition-transform duration-300 ease-in-out transform hover:scale-[1.02] "
          style={{ boxShadow: "0px 40px 80px 0px #60656D26" }}
        >
          <div className="flex gap-[16px] sm:gap-[10px] lg:gap-[25px] xl:gap-[30px] items-center sm:items-start h-full">
            <Image
              src="/img/home/custom-solution.svg"
              alt="Custom Solution"
              width={62}
              height={62}
              loading="lazy"
              className="w-[33px] sm:w-[62px] h-[33px] sm:h-[62px] sm:mt-[35px] xl:mt-[40px]"
            />
            <div>
              <h4 className="text-[15px] sm:text-[21px] lg:text-[22px] xl:text-[24px] font-bold text-primaryColor leading-[18px] sm:leading-[32px] xl:leading-[34px] futura-bold mb-[8px] xl:mb-[10px]">
                Custom Solutions
              </h4>
              <p className="text-secondaryColor text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[18px] leading-[17px] sm:leading-[26px] xl:leading-[28px] font-normal lato-font">
                We craft customized Salesforce solutions that streamline
                operations and foster growth.
              </p>
            </div>
          </div>
        </div>
        <div
          className="hero-card bg-white max-sm:h-[101px] rounded-[12.82px] sm:rounded-[24px] px-[20px] py-[15px] sm:p-[18px] lg:p-[25px] xl:p-10 transition-transform duration-300 ease-in-out transform hover:scale-[1.02]"
          style={{ boxShadow: "0px 40px 80px 0px #60656D26" }}
        >
          <div className="flex gap-[16px] sm:gap-[10px] lg:gap-[25px] xl:gap-[30px] items-center sm:items-start h-full">
            <Image
              src="/img/home/expert-guidence.svg"
              alt="Expert Guidence"
              width={62}
              height={62}
              loading="lazy"
              className="w-[33px] sm:w-[62px] h-[33px] sm:h-[62px] sm:mt-[35px] xl:mt-[40px]"
            />
            <div>
              <h4 className="text-[15px] sm:text-[21px] lg:text-[22px] xl:text-[24px] font-bold text-primaryColor leading-[18px] sm:leading-[32px] xl:leading-[34px] futura-bold mb-[8px] xl:mb-[10px]">
                Expert Guidance
              </h4>
              <p className="text-secondaryColor text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[18px] leading-[17px] sm:leading-[26px] xl:leading-[28px] font-normal lato-font">
                Our certified Salesforce consultants provide expert guidance and
                support throughout the implementation process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
