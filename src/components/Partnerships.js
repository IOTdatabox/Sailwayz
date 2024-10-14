import Image from "next/image";
import React from "react";

const Partnerships = () => {
  return (
    <div className="hidden sm:block container max-w-[1440px] px-5 mx-auto lg:px-10 xl:px-[63px]">
      <div className="w-full">
        <p className="w-full text-[22px] leading-[32px] font-medium text-center futura-font tracking-wider text-white mb-[30px]">
          PARTNERSHIPS
        </p>
        <div className="grid items-center grid-cols-1 lg:grid-cols-3 gap-[30px]">
          <div className="bg-[#329BC880] rounded-[16px] px-[20px] lg:px-[15px] xl:px-[20px] py-[14px]">
            <div className="flex items-center justify-between gap-[10px]">
              <h4 className="futura-bold text-[24px] lg:text-[18px] xl:text-[24px] leading-[34px] lg:leading-[28px] xl:leading-[34px] font-bold text-white tracking-wide xl:pr-[17px]">
                Registered Consulting Partner
              </h4>
              <div className="bg-[#1D3160] rounded-[12px] py-[18px] lg:py-[12px] xl:py-[18px] px-[19px] lg:px-[15px] xl:px-[19px] w-[134px] lg:w-[120px] xl:w-[134px] h-[104px] lg:h-[85px] xl:h-[104px]">
                <Image
                  src="/img/home/partnership-1.svg"
                  alt="register-consulting-partner"
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-[96px] lg:w-full xl:w-[96px] h-[68px] lg:h-full xl:h-[68px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#329BC880] rounded-[16px] px-[20px] lg:px-[15px] xl:px-[20px] py-[14px]">
            <div className="flex items-center justify-between gap-[10px]">
              <h4 className="futura-bold text-[24px] lg:text-[18px] xl:text-[24px] leading-[34px] lg:leading-[28px] xl:leading-[34px] font-bold text-[#ffffff] tracking-wide xl:pr-[17px]">
                Salesforce Partner
              </h4>
              <div className="bg-[#1D3160] rounded-[12px] py-[14px] lg:py-[10px] xl:py-[14px] px-[35px] lg:px-[30px] xl:px-[35px] w-[134px] lg:w-[120px] xl:w-[134px] h-[104px] lg:h-[85px] xl:h-[104px]">
                <Image
                  src="/img/home/partnership-2.svg"
                  alt="register-consulting-partner"
                  width={64}
                  height={76}
                  loading="lazy"
                  className="w-[64px] lg:w-full xl:w-[64px] h-[76px] lg:h-full xl:h-[76px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#329BC880] rounded-[16px] px-[20px] lg:px-[15px] xl:px-[20px] py-[14px]">
            <div className="flex items-center justify-between gap-[10px]">
              <h4 className="futura-bold text-[24px] lg:text-[18px] xl:text-[24px] leading-[34px] lg:leading-[28px] xl:leading-[34px] font-bold text-white tracking-wide xl:pr-[17px]">
                Consulting Partner
              </h4>
              <div className="bg-[#1D3160] rounded-[12px] py-[8px] lg:py-[6px] xl:py-[8px] px-[17px] lg:px-[10px] xl:px-[17px] w-[134px] lg:w-[120px] xl:w-[134px] h-[104px] lg:h-[85px] xl:h-[104px]">
                <Image
                  src="/img/home/partnership-3.svg"
                  alt="register-consulting-partner"
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-[100px] lg:w-full xl:w-[100px] h-[88px] lg:h-full xl:h-[88px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
