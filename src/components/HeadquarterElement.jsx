import React from "react";

const HeadquarterElement = ({
  id,
  title,
  data1,
  data2,
  data3,
  data4,
  image,
}) => {
  return (
    <article
      data-aos="zoom-out"
      data-aos-delay={`${
        id === "canada" ? "200" : id === "australia" ? "400" : "0"
      }`}
      className="w-[272px] mobile:w-[327px] h-[262px] tablet:w-[223px] tablet:h-[262px] desktop:w-[285px] relative"
    >
      <img
        src={image}
        alt="illustration"
        className={`absolute left-1/2 -translate-x-1/2 tablet:translate-x-0 ${
          id === "united-kingdom"
            ? "w-[40.84px] tablet:top-[1px] tablet:left-[1.33px] desktop:top-[3px] desktop:left-[0.33px]"
            : id === "canada"
            ? "w-[51.56px] tablet:top-[1.04px] tablet:left-0 desktop:top-[3.04px]"
            : "w-[48.97px] top-[6.01px] tablet:left-0 desktop:left-[1px]"
        }`}
      />

      <h3 className="font-fraunces font-black text-[28px] leading-[36px] text-center text-dark-grey-blue tablet:text-left tablet:text-[24px] desktop:text-[32px] absolute top-[97px] left-1/2 -translate-x-1/2 w-full tablet:top-[98px] tablet:left-0 tablet:translate-x-0 tablet:w-full desktop:top-[95px] dark:text-white">
        {title}
      </h3>

      <p className="font-barlow font-normal text-[16px] leading-[26px] text-center text-dark-grey-blue tablet:text-left absolute top-[155px] w-full dark:text-white">
        {data1} <br />
        {data2} <br />
        {data3} <br />
        {data4} <br />
      </p>
    </article>
  );
};

export default HeadquarterElement;
