import React from "react";

const CoffeeType = ({ id, title, description, image }) => {
  return (
    <article
      data-aos="zoom-in"
      data-aos-delay={`${
        id === "planalto"
          ? "200"
          : id === "piccollo"
          ? "400"
          : id === "danche"
          ? "600"
          : "0"
      }`}
      className="mx-auto w-56 h-80 mobile:w-[282px] mobile:h-[274px] tablet:w-[573px] tablet:h-[193px] desktop:w-[256px] desktop:h-[400px] relative"
    >
      <img
        src={image}
        alt="coffee"
        className="absolute h-[139px] top-3 left-1/2 -translate-x-1/2 tablet:h-[177px] tablet:top-4 tablet:left-0 tablet:translate-x-0 desktop:left-1/2 desktop:-translate-x-1/2"
      />

      <h3 className="font-fraunces font-black text-[24px] leading-[32px] text-center text-dark-grey-blue tablet:text-left desktop:text-center absolute top-[145px] mobile:top-[175px] left-1/2 -translate-x-1/2 w-10/12 mobile:w-8/12 tablet:top-[30px] tablet:left-[291px] tablet:translate-x-0 tablet:w-4/12 desktop:top-[265px] desktop:left-1/2 desktop:-translate-x-1/2 desktop:w-10/12 dark:text-white">
        {title}
      </h3>

      <p className="font-barlow font-normal text-[15px] leading-[25px] text-center text-dark-grey-blue tablet:text-left desktop:text-[16px] desktop:leading-[26px] desktop:text-center absolute top-[223px] left-1/2 -translate-x-1/2 w-full tablet:top-[86px] tablet:left-[291px] tablet:translate-x-0 tablet:w-6/12 desktop:top-[320px] desktop:left-1/2 desktop:-translate-x-1/2 desktop:w-full dark:text-white">
        {description}
      </p>
    </article>
  );
};

export default CoffeeType;
