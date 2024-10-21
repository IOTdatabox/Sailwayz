"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Badge from "./Badge";

const testimonials = [
  {
    name: "Sam W",
    role: "Account Manager",
    company: "V1CECONNECTIONS",
    image: "/img/home/t-1.jpg",
    content:
      "Sailwayz has been a game-changer for our business. Their team took the time to fully understand our Salesforce needs and delivered a tailored solution that has greatly improved our sales processes. The implementation was seamless, and their ongoing support has been outstanding. Thanks to Sailwayz, we’ve seen enhanced efficiency in managing client relationships and tracking our performance. I would highly recommend their services to any company looking to get the most out of Salesforce.",
  },
  {
    name: "Dennis Y",
    role: "Founder",
    company: "CNVRT",
    image: "/img/home/t-2.jpg",
    content:
      "Our experience with Sailwayz has been nothing short of exceptional. Their team's deep understanding of Salesforce has completely transformed the way we manage our lead generation processes. From customising the CRM to fit our unique business model to offering expert advice at every step, Sailwayz has been an invaluable partner. Their solutions have streamlined our operations, making it easier to track leads and boost overall efficiency. We highly recommend Sailwayz to any business looking to optimise their Salesforce strategy.",
  },
  {
    name: "Daniel P",
    role: "Founder",
    company: "R1SE INSURANCE",
    image: "/img/home/t-3.jpg",
    content:
      "I can't express how impressed I am with Sailwayz's services. Their expertise in Salesforce consulting has been invaluable for our growth at R1SE. The team's ability to understand our unique needs and provide tailored solutions has truly elevated our operations. Their support throughout the implementation process was exceptional, and the results have far exceeded our expectations. If you're looking for a partner to optimise your sales processes and drive business growth, I wholeheartedly recommend Sailwayz.",
  },
  {
    name: "Luke S",
    role: "Founder",
    company: "PINNACLE LC LIFESTYLE LTD",
    image: "/img/home/t-4.jpg",
    content:
      "Managing and scaling a personalized, in-home fitness business requires precision—and Sailwayz has been instrumental in helping us streamline operations through Salesforce CRM. Their tailored approach ensured our scheduling, client management, and reporting processes were seamless, giving us more time to focus on our clients' wellness journeys. The team at Sailwayz worked closely with us to understand our specific needs, delivering strategic solutions that enhanced both efficiency and growth. I highly recommend Sailwayz to any business looking to elevate their CRM and customer management capabilities.",
  },
  {
    name: "Akshay K",
    role: "Founder",
    company: "SYNX LIMITED",
    image: "/img/home/t-5.jpg",
    content:
      "At Synx, we understand the importance of leveraging the right tools to scale—and Sailwayz made that journey effortless for us. Their Salesforce expertise didn’t just optimize our processes; it empowered our team to work smarter and more efficiently. From smooth data migration to customized CRM solutions, every interaction with their team reflected professionalism and strategic insight. Thanks to Sailwayz, we’ve been able to unlock new growth opportunities, and I couldn’t recommend them more for any business seeking to maximize their CRM potential.",
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
            <Badge
              text="TESTIMONIALS"
              src="/img/home/cloud-white.svg"
              bgColor="bg-secondaryColor"
              textColor="text-morningMist"
              font="futura-bold"
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
                  <div className="max-lg:flex max-lg:justify-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={322}
                      height={364}
                      loading="lazy"
                      className="rounded-[32px] lg:ml-[20px] w-[302px] h-[322px] object-cover"
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
                        <h4 className="text-[18px] font-extrabold text-coolGrey leading-[28px]">
                          {testimonial.company}
                        </h4>
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
