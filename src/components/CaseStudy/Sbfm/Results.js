import Image from "next/image";
import React from "react";

const Results = () => {
  return (
    <div className="bg-lightBlue">
      <div className="container max-w-[1440px] px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[16px] sm:gap-[30px] lg:gap-[60px]">
          <div className="w-full lg:w-[58%] ">
            <Image
              src="/img/case/results-image.png"
              alt="results"
              width={727}
              height={490}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:w-[42%]">
            <div className="mb-[10px]">
              <Image
                src="/img/case/results-white.svg"
                alt="results logo"
                width={122}
                height={26}
                loading="lazy"
                className="w-[94.47px] sm:w-[122.27px] h-[22px] sm:h-[26px]"
              />
            </div>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] text-primaryColor futura-bold font-bold mb-[16px] sm:mb-[20px]">
              Results
            </h2>
            <p className="text-[13px] sm:text-[18px] lg:text-[20px] leading-[19px] sm:leading-[28px] lg:leading-[30px] text-secondaryColor lato-thin font-bold">
              The directors and team were accepting of the new salesforce
              implementation which has been used to manage their sales pipeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
