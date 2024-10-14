import Image from "next/image";
import React from "react";

const ConsultingPartners = () => {
  return (
    <div className="w-full bg-white sm:bg-lightBlue">
      <div className="container max-w-[1440px] px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px]">
        <div className="flex flex-col items-center w-full">
          <h2 className="futura-bold text-[24px] sm:text-[33px] lg:text-[36px] leading-[32px] sm:leading-[46px] font-bold text-primaryColor mb-[10px] sm:mb-[8px] lg:mb-[10px]">
            Consulting Partner
          </h2>
          <p className="lato-font text-[16px] sm:text-[19px] lg:text-[20px] leading-[22px] sm:leading-[30px] text-center font-normal text-secondaryColor mb-[10px] sm:mb-[8px] lg:mb-[10px]">
            Sailwayz is a Certified Salesforce Consulting Partner
          </p>
          <p className="lato-font text-[13px] sm:text-[11px] leading-[19px] sm:leading-[17px] text-center font-normal text-secondaryColor px-0 sm:px-[155px] lg:px-[260px] xl:px-[430px] mb-[40px] sm:mb-[50] xl:mb-[60px]">
            Our experienced and skilled team boasts over 50 combined Salesforce
            certifications. We excel in assisting businesses to enhance their{" "}
          </p>
          <div className="sm:px-[60px] lg:px-[130px] xl:px-[170px]">
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-[15px] xl:gap-[22px] mb-[15px]">
              <Image
                src="/img/home/consulting-1.svg"
                alt="consulting 1"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-2.svg"
                alt="consulting 2"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-3.svg"
                alt="consulting 3"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-4.svg"
                alt="consulting 4"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-5.svg"
                alt="consulting 5"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-6.svg"
                alt="consulting 6"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-7.svg"
                alt="consulting 7"
                width={120}
                height={117}
                loading="lazy"
                className="hidden sm:block w-[120px] h-auto xl:h-[117px]"
              />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-[15px] xl:gap-[22px] sm:px-[44px] lg:px-[50px] xl:px-[71px]">
              <Image
                src="/img/home/consulting-8.svg"
                alt="consulting 8"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-9.svg"
                alt="consulting 9"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-10.svg"
                alt="consulting 10"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-11.svg"
                alt="consulting 11"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-12.svg"
                alt="consulting 12"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
              <Image
                src="/img/home/consulting-13.svg"
                alt="consulting 13"
                width={120}
                height={117}
                loading="lazy"
                className="w-[120px] h-auto xl:h-[117px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPartners;
