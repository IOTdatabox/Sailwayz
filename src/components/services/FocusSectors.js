import Image from "next/image";
import React from "react";

const FocusSectors = () => {
  return (
    <div className="bg-color-1 py-2 mt-[70px]">
      <div className="container max-w-[1440px] px-5 py-0 sm:py-5 mx-auto mt-[40px] lg:mt-[90px] lg:px-10 xl:px-[63px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
          <div className="col-span-6 xl:col-span-3">
            <Image
              src="/img/home/focus-sector-logo.svg"
              alt="Transform Logo"
              width={186}
              height={26}
              loading="lazy"
              className="mb-[10px]"
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
      </div>
    </div>
  );
};

export default FocusSectors;
