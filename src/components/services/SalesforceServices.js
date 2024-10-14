import Image from "next/image";
import React from "react";

const ServiceItem = ({ src, title }) => (
  <div className="flex items-center bg-white gap-[20px] s-item p-4 rounded-[12px]">
    <Image src={src} alt={title} loading="lazy" width={46} height={46} />
    <span className="text-primaryColor text-[15px] xl:text-[18px] leading-[28px] font-medium">
      {title}
    </span>
  </div>
);

const SalesforceServicesSection = () => {
  return (
    <div className="container max-w-[1440px] px-5 py-0 sm:py-5 mx-auto mt-[40px] lg:mt-[90px] lg:px-10 xl:px-[63px]">
      <div className="lg:flex">
        <div className="w-full lg:w-[40%] xl:w-[30%]">
          <h2 className="py-7 lg:py-0 text-primaryColor text-[23px] md:text-[28px] leading-[38px] futura-bold  font-[700] pe-[3%] xl:pe-[20%] mb-[30px]">
            Transform Your Business with Our Comprehensive Salesforce Services
          </h2>
          <div className="w-[50px] h-[1px] bg-primaryColor"></div>
        </div>
        <div className="w-full lg:w-[60%] xl:w-[70%]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <ServiceItem
              src="/img/services/s-1.svg"
              title="Salesforce Consulting Services"
            />

            <ServiceItem
              src="/img/services/s-2.svg"
              title="Salesforce app Development Services"
            />
            <ServiceItem
              src="/img/services/s-3.svg"
              title="Salesforce Health Check Services"
            />
            <ServiceItem
              src="/img/services/s-4.svg"
              title="Salesforce Marketing Cloud Services"
            />
            <ServiceItem
              src="/img/services/s-5.svg"
              title="Salesforce Support Services"
            />
            <ServiceItem
              src="/img/services/s-6.svg"
              title="Salesforce Integration Services"
            />
            <ServiceItem
              src="/img/services/s-7.svg"
              title="Salesforce Analytics Cloud"
            />
            <ServiceItem
              src="/img/services/s-8.svg"
              title="Salesforce Migration Services"
            />
            <ServiceItem
              src="/img/services/s-9.svg"
              title="Salesforce Continuous Deployment Services"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesforceServicesSection;
