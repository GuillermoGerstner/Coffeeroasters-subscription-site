import React from "react";

const CoffeeBenefit = ({ id, title, description, image }) => {
  return (
    <article
      data-aos="flip-down"
      data-aos-delay={`${
        id === "gift" ? "500" : id === "truck" ? "1000" : "0"
      }`}
      className="bg-dark-cyan rounded-lg w-[272px] mobile:w-[279px] h-[382px] tablet:w-[573px] tablet:h-[180px] desktop:w-[350px] desktop:h-[382px] relative mx-auto"
    >
      <img
        src={image}
        alt="icon"
        className={`w-[72px] tablet:w-[56px] desktop:w-[72px] absolute left-1/2 -translate-x-1/2 tablet:left-[70px] tablet:translate-x-0 desktop:left-1/2 desktop:-translate-x-1/2 ${
          id === "truck"
            ? "top-[83px] tablet:top-[71px] desktop:top-[83px]"
            : "top-[72px] tablet:top-[62px] desktop:top-[72px]"
        }`}
      />

      <h3 className="font-fraunces font-black text-[24px] leading-[32px] text-center text-light-cream tablet:text-left desktop:text-center absolute top-[200px] left-1/2 -translate-x-1/2 w-10/12 tablet:top-[41px] tablet:left-[181px] tablet:translate-x-0 tablet:w-6/12 desktop:top-[200px] desktop:left-1/2 desktop:-translate-x-1/2 desktop:w-8/12">
        {title}
      </h3>

      <p className="font-barlow font-normal text-[15px] leading-[25px] text-center text-light-cream tablet:text-left desktop:text-[16px] desktop:leading-[26px] desktop:text-center absolute top-[256px] tablet:top-[89px] desktop:top-[256px] left-1/2 -translate-x-1/2 w-[70%] tablet:left-[181px] tablet:translate-x-0 tablet:w-[60%] desktop:left-1/2 desktop:-translate-x-1/2 desktop:w-[74%]">
        {description}
      </p>
    </article>
  );
};

export default CoffeeBenefit;
