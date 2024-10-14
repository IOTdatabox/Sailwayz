"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    name: "Brooklyn Simmons",
    role: "CEO",
    company: "/img/home/r1se.svg",
    image: "/img/home/t-2.svg",
    content:
      "Working with Sailwayz has been a transformative experience for R1SE Insurance. Their expertise in Salesforce CRM has streamlined our client management processes and enhanced our ability to deliver personalized service. With Sailwayz’s support, we’ve been able to maintain transparent communication and provide our clients with the clarity they need to make informed insurance decisions. Their commitment to our long-term success and continuous support have been pivotal in helping us navigate the complexities of the insurance industry and meet the evolving needs of our clients",
  },
  {
    name: "John Wick",
    role: "CEOee",
    company: "/img/home/v1ce.svg",
    image: "/img/home/t-1.svg",
    content:
      "Partnering with Sailwayz has been a game-changer for us at V1CE. Their expertise in implementing Salesforce CRM solutions has significantly streamlined our operations and enhanced our ability to connect and engage with our clients. Thanks to Sailwayz, we’ve been able to leverage our NFC technology more effectively, resulting in increased sales and a more memorable customer experience. Their personalized approach and continuous support have been invaluable to our growth and success.",
  },
  {
    name: "Darrell Steward",
    role: "CEO, ABC Company",
    company: "/img/home/next.svg",
    image: "/img/home/t-3.svg",
    content:
      "Sailwayz has been instrumental in revolutionizing our customer relationship management at NXT Card. Their implementation of Salesforce CRM has allowed us to enhance our customer interactions, streamline our processes, and manage our custom card designs more efficiently. Thanks to Sailwayz, we’ve been able to offer a seamless and personalized experience to our clients, from designing their custom metal cards to delivering them promptly. Their expertise and dedicated support have been key in driving our growth and ensuring our customers receive the best possible service.",
  },
  {
    name: "Annette Black",
    role: "CEO, ABC Company",
    company: "/img/home/karcher.svg",
    image: "/img/home/t-4.svg",
    content:
      "Sailwayz has been a game-changer for Karshare. Their Salesforce CRM solutions have seamlessly integrated with our platform, helping us manage our vehicle rental operations more efficiently. The personalized approach from their team has improved our customer interactions, streamlined our processes, and significantly boosted our growth. We particularly appreciate their understanding of our unique needs in the UK region. Thanks to Sailwayz, we've been able to enhance our service offerings and deliver an exceptional experience to our customers. We highly recommend Sailwayz for any business looking to optimize their CRM strategy.",
  },
  {
    name: "Courtney Henry",
    role: "CEO, CNRVT",
    company: "/img/home/cnrvt.svg",
    image: "/img/home/t-5.svg",
    content:
      "Collaborating with Sailwayz has been a transformative experience for CNRVT. Their implementation of Salesforce CRM has revolutionized our lead generation processes, allowing us to efficiently manage and nurture our client relationships. With Sailwayz’s expert guidance and support, we’ve been able to scale our operations and deliver high-quality leads to our clients in the legal and financial sectors. Their commitment to excellence and personalized approach have been invaluable in helping us achieve remarkable growth and success.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    customPaging: function (i) {
      return (
        <div
          className={`h-[2px] w-[20px] ${
            expanded ? "mt-[20px] md:mt-[50px]" : ""
          } ${i === this.currentSlide ? "bg-white" : "bg-gray-600"}`}
        />
      );
    },
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // State to track expanded testimonials
  const [expanded, setExpanded] = useState(
    Array(testimonials.length).fill(false)
  );

  // Function to toggle the expanded state
  const toggleExpanded = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };

  return (
    <div className="text-white bg-midNight" id="testimonial">
      <div className="container px-5 mx-auto py-[50px] sm:py-[100px] lg:px-10 xl:px-[63px] max-w-[1440px]">
        <div className="text-center mb-[20px] sm:mb-[50px]">
          <div className="flex justify-center mb-[10px]">
            <Image
              src="/img/home/t-frame.svg"
              alt="Transform logo"
              width={176}
              height={26}
              className="w-[176.47px] h-[26px]"
              loading="lazy"
            />
          </div>
          <h2 className="text-[24px] sm:text-[36px] leading-[32px] md:leading-[46px] futura-bold font-bold">
            What They Say About Us
          </h2>
        </div>
        <div className="relative md:mx-[20px] sm:mx-[10px]">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="outline-none">
                <div className="lg:flex lg:items-start gap-[94px] sm:ml-[45px] sm:mr-[38px] sm:px-[30px]">
                  <div className="max-lg:flex max-lg:justify-center max-sm:w-auto max-sm:h-[219px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={322}
                      height={364}
                      loading="lazy"
                      className="rounded-[32px] lg:pl-[20px] w-auto h-auto"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mt-[20px] mb-[30px] md:mt-4 max-lg:justify-center">
                      <Image
                        src="/img/home/Stars.svg"
                        alt="Stars"
                        width={116}
                        height={18}
                        loading="lazy"
                        className="w-[116px] h-[18.89]"
                      />
                    </div>
                    {/* truncated content */}
                    <p className="mb-[30px] text-morningMist text-[15px] sm:text-[28px] leading-[25px] sm:leading-[38px] font-light lato-thin text-justify me-2">
                      {expanded[index]
                        ? testimonial.content
                        : `${testimonial.content
                            .split(" ")
                            .slice(0, 25)
                            .join(" ")}`}
                      <span
                        className="font-semibold text-white underline cursor-pointer underline-offset-8 ms-2"
                        onClick={() => toggleExpanded(index)}
                      >
                        {expanded[index] ? "Less" : "See More"}
                      </span>
                    </p>
                    <div className="flex items-center gap-[20px] max-lg:justify-center">
                      <div className="pe-10">
                        <h4 className="font-bold futura-bold text-[16px] md:text-[24px] leading-[26px] md:leading-[34px] text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-[16px] leading-[26px] font-normal lato-thin text-lightGrey">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="bg-[#b7bfcc80] h-[42px] w-[1.5px]"></div>
                      <div className="ps-10">
                        <Image
                          src={testimonial.company}
                          alt={testimonial.company}
                          width={80}
                          height={18}
                          className="w-auto h-[18px]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute left-[-50px] md:left-[-30px] sm:left-[-20px] top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 bg-midNight"
    aria-label="previous button"
  >
    <Image
      src="/img/home/left.svg"
      alt="Previous"
      width={62}
      height={62}
      className="w-[62px] h-[62px]"
      loading="lazy"
    />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute right-[-50px] md:right-[-30px] sm:right-[-20px] top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 bg-midNight"
    aria-label="next button"
  >
    <Image
      src="/img/home/right.svg"
      alt="Next"
      width={62}
      height={62}
      className="w-[62px] h-[62px]"
      loading="lazy"
    />
  </button>
);

export default Testimonials;
