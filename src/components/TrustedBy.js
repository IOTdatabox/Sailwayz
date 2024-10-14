import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <div className="bg-morningMist">
      <div className="container max-w-[1440px] px-5 py-[50px] sm:py-[100px] mx-auto lg:px-10 xl:px-[63px]">
        <div className="flex flex-col items-center justify-center gap-[10px] mb-[32px] sm:mb-[42px] xl:mb-[50px]">
          <Image
            src="/img/home/trustedby-logo.svg"
            alt="Trustedby Logo"
            width={224}
            height={42}
            loading="lazy"
            className="w-[110.47px] sm:w-[160px] lg:w-[180px] xl:w-[224px] h-[22px] sm:h-[25px] lg:h-[30px] xl:h-[42px]"
          />
          <h2 className="text-primaryColor font-normal sm:font-bold futura-medium-bt sm:futura-bold text-[24px] lg:text-[30px] xl:text-[36px] leading-[32px] sm:leading-[38px] lg:leading-[43px] xl:leading-[46px] text-center">
            Trusted by industry-leading companies around the globe
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-[11px] sm:gap-[22px] lg:gap-[25px] xl:gap-[30px] h-full">
          <div className="bg-white rounded-[8px] py-[20px] xl:py-[32px] h-full flex items-center justify-center">
            <Image
              src="/img/home/Vaioni.svg"
              alt="Vaioni"
              width={178}
              height={52}
              loading="lazy"
              className="w-[100.97px] lg:w-[140px] xl:w-[190px] h-[25.71px] lg:h-[40px] xl:h-[48px]"
            />
          </div>
          <div className="bg-white rounded-[8px] py-[10px] xl:py-[32px] h-full flex items-center justify-center">
            <Image
              src="/img/home/shop.svg"
              alt="Shop"
              width={178}
              height={52}
              loading="lazy"
              className="w-[102.15px] lg:w-[140px] xl:w-[192px] h-[38.57px] lg:h-[55px] xl:h-[72px]"
            />
          </div>
          <div className="bg-white rounded-[8px] py-[10px] xl:py-[32px] h-full flex items-center justify-center">
            <Image
              src="/img/home/sbfm.svg"
              alt="Sbfm"
              width={178}
              height={52}
              loading="lazy"
              className="w-[102.15px] lg:w-[140px] xl:w-[192px] h-[38.57px] lg:h-[55px] xl:h-[72px]"
            />
          </div>
          <div className="bg-white rounded-[8px] py-[17px] xl:py-[32px] h-full flex items-center justify-center">
            <Image
              src="/img/home/Haemonetics.svg"
              alt="Haemonetics"
              width={178}
              height={52}
              loading="lazy"
              className="w-[106.49px] lg:w-[145px] xl:w-[206px] h-[25.71px] lg:h-[35px] xl:h-[48px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
