import React from "react";

const CoffeeStep = ({ id, title, description, number, styles }) => {
  return (
    <article
      data-aos="zoom-out"
      data-aos-delay={`${id === "02" ? "200" : id === "03" ? "400" : "0"}`}
      className="w-[272px] mobile:w-[327px] h-[252px] tablet:w-[223px] tablet:h-[372px] desktop:w-[285px] desktop:h-[355px]"
    >
      <span className="font-fraunces font-black text-[72px] leading-[72px] text-center text-pale-orange flex justify-center tablet:justify-start">
        {number}
      </span>

      <h3
        className={`font-fraunces font-black text-[28px] leading-[32px] text-center text-dark-grey-blue tablet:text-left desktop:text-[32px] desktop:leading-[36px] desktop:pr-6 mt-6 tablet:mt-[42px] desktop:mt-[38px] ${styles} dark:text-white`}
      >
        {title}
      </h3>

      <p
        className={`font-barlow font-normal text-[15px] leading-[25px] text-center text-dark-grey-blue tablet:text-left desktop:text-[16px] desktop:leading-[26px] ${
          id === "01" ? "tablet:pr-4" : ""
        } ${id === "02" ? "tablet:pr-[12px]" : ""} ${
          id === "03" ? "px-[6px] tablet:pr-[14px]" : ""
        } desktop:pr-0 mt-6 tablet:mt-[38px] desktop:mt-[42px] ${styles} dark:text-white`}
      >
        {description}
      </p>
    </article>
  );
};

export default CoffeeStep;
