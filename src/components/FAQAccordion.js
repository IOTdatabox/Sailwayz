"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const router = useRouter();

  const freeConsultationClick = () => {
    const freeConsultation = document.getElementById("freeConsultation");
    if (!freeConsultation) {
      router.push("/contact#freeConsultation");
    } else {
      router.push("#freeConsultation");
    }
  };

  return (
    <div
      className="container px-5 py-[50px] sm:py-[100px] mx-auto lg:px-10 xl:px-[63px] max-w-[1440px] scroll-smooth"
      id="faq"
    >
      <div className="lg:flex w-full lg:gap-[4%]">
        <div className="w-full lg:w-[40%] max-lg:mb-[40px]">
          <h2 className=" futura-bold text-primaryColor text-[36px] leading-[46px] font-bold mb-[20px]">
            Frequently Asked Questions
          </h2>
          <p className="text-secondaryColor text-[18px] lato-font font-normal leading-[28px] mb-[32px]">
            Find answers to common queries about Salesforce CRM and
            Sailwayz&apos; services.
          </p>

          <a
            className="bg-primaryPink hover:bg-secondaryPink transition-button px-[20px] sm:px-[30px] py-[9px] sm:py-[14px] text-[12px] sm:text-[16px] text-center leading-[24px] sm:leading-[26px] font-bold futura-bold rounded-[160px] text-white tracking-wide max-sm:w-full max-sm:block cursor-pointer"
            onClick={freeConsultationClick}
            aria-label="redirect to consultation form"
          >
            SCHEDULE YOUR FREE CONSULTATION
          </a>
        </div>

        <div className="w-full lg:w-[60%]">
          <div className="border-b border-secondaryColor">
            <button
              className={`flex items-center justify-between w-full ${
                activeIndex === 1 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
              } focus:outline-none`}
              onClick={() => toggleAccordion(1)}
              aria-label="expand button 1"
            >
              <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                Can Salesforce be customized?
              </h4>
              <span>
                {activeIndex === 1 ? (
                  <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                ) : (
                  <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                )}
              </span>
            </button>
            {activeIndex === 1 && (
              <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                <p className="mb-3">
                  Salesforce is highly customisable to fit the business
                  processes of a company.
                </p>
                <p>
                  Although salesforce comes with useful out of the box features
                  which perfectly fits most businesses, it also gives the user
                  the ability to tailor salesforce to how the business works.
                </p>
              </div>
            )}
          </div>
          <div className="border-b border-secondaryColor">
            <button
              className={`flex items-center justify-between w-full ${
                activeIndex === 2 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
              } pt-[15px] sm:pt-[25px] focus:outline-none`}
              onClick={() => toggleAccordion(2)}
              aria-label="expand button 2"
            >
              <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                How do I begin?
              </h4>
              <span>
                {activeIndex === 2 ? (
                  <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                ) : (
                  <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                )}
              </span>
            </button>
            {activeIndex === 2 && (
              <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                Send us a message, we will take it from there.
              </div>
            )}
          </div>
          <div className="border-b border-secondaryColor">
            <button
              className={`flex items-center justify-between w-full ${
                activeIndex === 3 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
              } pt-[15px] sm:pt-[25px] focus:outline-none`}
              onClick={() => toggleAccordion(3)}
              aria-label="expand button 3"
            >
              <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                What are the advantages?
              </h4>
              <span>
                {activeIndex === 3 ? (
                  <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                ) : (
                  <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                )}
              </span>
            </button>
            {activeIndex === 3 && (
              <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                Apart from using the number 1 CRM in the world, which offers
                <ul className="mt-5">
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Comprehensive Customer View
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Scalability and Flexibility
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Cloud-Based Accessibility
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Sales Automation
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Improved Collaboration
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Enhanced Marketing Capabilities
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Customizable Reports and Dashboards
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Customer Service Excellence
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    AppExchange Ecosystem
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Mobile-Friendly
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Artificial Intelligence (AI) Capabilities
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Integration Capabilities
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Compliance and Security
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Automation and Efficiency
                  </li>
                  <li className="before:content-['-'] before:mr-5 pb-3 text-secondaryColor text-[13px] sm:text-[18px] leading-[19px] sm:leading-[28px] lato-font">
                    Regular Updates and Innovation
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="border-b border-secondaryColor">
            <button
              className={`flex items-center justify-between w-full ${
                activeIndex === 4 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
              } pt-[15px] sm:pt-[25px] focus:outline-none`}
              onClick={() => toggleAccordion(4)}
              aria-label="expand button 4"
            >
              <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                How can salesforce assist?
              </h4>
              <span>
                {activeIndex === 4 ? (
                  <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                ) : (
                  <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                )}
              </span>
            </button>
            {activeIndex === 4 && (
              <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                <p className="mb-3">
                  Sailwayz will take you to where you want to be with your
                  salesforce environment.
                </p>
                <p>
                  We are salesforce experts, with extensive experience
                  successfully implementing andcustomizing salesforce for
                  businesses of all sizes.
                </p>
              </div>
            )}
          </div>
          <div>
            <button
              className={`flex items-center justify-between w-full ${
                activeIndex === 5 ? "pb-0" : "pb-[15px] sm:pb-[25px]"
              } pt-[15px] sm:pt-[25px] focus:outline-none`}
              onClick={() => toggleAccordion(5)}
              aria-label="expand button 5"
            >
              <h4 className="text-primaryColor futura-bold font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[32px] accordian-text py-[15px]">
                What is Salesforce CRM?
              </h4>
              <span>
                {activeIndex === 5 ? (
                  <img src="/img/home/dash.svg" alt="dash" loading="lazy" />
                ) : (
                  <img src="/img/home/plus.svg" alt="plus" loading="lazy" />
                )}
              </span>
            </button>
            {activeIndex === 5 && (
              <div className="pb-[15px] sm:pb-[25px] text-secondaryColor text-[13px] sm:text-[20px] leading-[19px] sm:leading-[30px] lato-font">
                Salesforce CRM (Customer Relationship Management) is a
                cloud-based platform that helps businesses manage and improve
                their relationships with customers, prospects, and partners. It
                provides tools for sales, marketing, customer service, and
                analytics, all designed to streamline business processes,
                improve efficiency, and drive growth.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
