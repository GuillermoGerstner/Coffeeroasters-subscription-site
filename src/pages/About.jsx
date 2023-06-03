import React from "react";

import { HeadquarterElement } from "../components";

import { headquartersData } from "../constants";

const About = () => {
  return (
    <main className="mb-[120px] tablet:mb-[144px] desktop:mb-[168px]">
      <section
        data-aos="fade-up"
        className="rounded-[10px] mx-6 tablet:mx-10 desktop:mx-auto desktop:w-[1280px] h-[400px] desktop:h-[450px] relative overflow-hidden"
      >
        <img
          src={{}}
          alt="background"
          className="h-full mobile:h-[unset] w-full about-us-hero-image dark:sepia-[50%]"
        />

        <h1 className="font-fraunces font-black text-[28px] leading-[28px] text-center text-light-cream tablet:text-[32px] tablet:leading-[48px] tablet:text-left desktop:text-[40px] desktop:leading-[48px] absolute top-20 mobile:top-[111px] left-1/2 -translate-x-1/2 w-10/12 tablet:top-[118px] tablet:left-[58px] tablet:-translate-x-0 tablet:w-1/2 desktop:top-[137px] desktop:left-[85px]">
          About Us
        </h1>

        <p className="font-barlow font-normal text-[15px] leading-[25px] text-center text-light-cream mix-blend-normal opacity-[0.8] tablet:text-left desktop:text-[16px] desktop:leading-[26px] absolute top-32 mobile:top-[163px] left-1/2 -translate-x-1/2 w-10/12 tablet:top-[182px] tablet:left-[58px] tablet:-translate-x-0 tablet:w-3/5 desktop:top-[209px] desktop:left-[85px] desktop:w-1/3">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </section>

      <section className="mt-[120px] tablet:mt-[144px] desktop:mt-[168px] mx-6 tablet:mx-10 desktop:mx-auto desktop:w-[1110px] tablet:flex tablet:justify-center tablet:gap-[68px] desktop:gap-[125px]">
        <img
          data-aos="fade-right"
          src={{}}
          alt="image"
          className="about-us-commitment-image rounded-lg mx-auto 544:w-[496px] tablet:mx-0 tablet:w-[281px] desktop:w-[445px] dark:sepia-[50%]"
        />

        <div className="w-full tablet:w-[339px] desktop:w-[540px] mt-12 tablet:mt-2 desktop:mt-[90px]">
          <h2
            data-aos="fade-left"
            className="font-fraunces font-black text-[32px] leading-[48px] text-center text-dark-grey-blue tablet:text-left desktop:text-[40px] dark:text-white"
          >
            Our commitment
          </h2>

          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="font-barlow font-normal text-[15px] leading-[25px] text-center text-dark-grey-blue mix-blend-normal opacity-[0.8] tablet:text-left desktop:text-[16px] desktop:leading-[26px] mt-[30px] desktop:pr-[2px] dark:text-white"
          >
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="mx-6 tablet:mx-auto tablet:w-[688px] desktop:w-[1280px] mt-[120px] tablet:mt-[144px] desktop:mt-[168px] pt-[78px] tablet:pt-[160px] desktop:pt-[88px] relative"
      >
        <div className="bg-[#2C343E] rounded-[10px] tablet:h-[488px] desktop:h-[474px] pt-[142px] tablet:pt-[224px] desktop:pt-[88px] pb-[61px] dark:bg-[#423d33]">
          <h2
            data-aos="fade-right"
            className="font-fraunces font-black text-[28px] leading-[28px] text-center text-light-cream tablet:text-[32px] tablet:leading-[48px] desktop:text-left desktop:text-[40px] mobile:mx-6 tablet:mx-auto desktop:ml-[85px] desktop:w-fit"
          >
            Uncompromising quality
          </h2>

          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="font-barlow font-normal text-[15px] leading-[25px] text-center text-light-cream mix-blend-normal opacity-[0.8] desktop:text-left desktop:text-[16px] desktop:leading-[26px] mt-6 desktop:mt-[32px] mx-6 tablet:mx-[75px] desktop:ml-[85px] desktop:w-[540px]"
          >
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>

        <img
          src={{}}
          alt="image"
          className="about-us-quality-image rounded-lg absolute top-0 left-1/2 -translate-x-1/2 desktop:left-[750px] desktop:translate-x-0 mobile:w-[85.33%] 435:w-[330px] tablet:w-[573px] desktop:w-[445px] dark:sepia-[50%]"
        />
      </section>

      <section className="mt-[120px] tablet:mt-[144px] desktop:mt-[168px] mx-6 tablet:mx-10 desktop:mx-auto desktop:w-[1045px]">
        <h2
          data-aos="fade-right"
          className="font-fraunces font-black text-[24px] leading-[32px] text-center text-grey tablet:text-left dark:text-white"
        >
          Our headquarters
        </h2>

        <div className="mt-[72px] flex flex-col tablet:flex-row gap-20 tablet:gap-0 items-center tablet:items-start tablet:justify-between 940:mx-auto 940:w-[860px] desktop:w-full">
          {headquartersData.map((headquarter) => (
            <HeadquarterElement key={headquarter.id} {...headquarter} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
