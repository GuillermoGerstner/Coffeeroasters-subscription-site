import React from "react";

const CoffeeConfigOption = ({
  title,
  description,
  id,
  selected,
  number,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[#F4F1EB] rounded-lg w-full tablet:w-[223px] desktop:w-[228px] mx-auto cursor-pointer hover:bg-pale-orange hover:scale-95 duration-200 ${
        selected === number ? "bg-dark-cyan" : ""
      }`}
    >
      <h3
        className={`font-fraunces font-black text-[24px] leading-[32px] text-dark-grey-blue mt-6 tablet:mt-8 ml-[25px] desktop:ml-7 ${
          selected === number ? "text-white" : ""
        }`}
      >
        {title}
      </h3>

      <p
        className={`font-barlow font-normal text-[16px] leading-[26px] text-dark-grey-blue mt-2 tablet:mt-6 ml-[25px] desktop:ml-7 mb-6 tablet:mb-[84px] ${
          id === "1"
            ? "mr-[24px]"
            : id === "2"
            ? "mr-[28px]"
            : id === "3"
            ? "mr-[24px]"
            : id === "4"
            ? "mr-[24px]"
            : "mr-[34px]"
        } ${selected === number ? " text-light-cream" : ""}`}
      >
        {description}
      </p>
    </div>
  );
};

export default CoffeeConfigOption;
