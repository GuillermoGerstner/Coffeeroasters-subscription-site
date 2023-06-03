import React from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";

import {
  PlanButton,
  CoffeeType,
  CoffeeBenefit,
  CoffeeStep,
} from "../components";

import { coffeeCollection, brandBenefits, coffeeSteps } from "../constants";
import state from "../store";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <main className="mb-[120px] tablet:mb-[144px] desktop:mb-[200px]">
      <section
        data-aos="fade-up"
        className="bg-[#0a0a0c] rounded-[10px] mx-6 tablet:mx-10 desktop:mx-auto desktop:w-[1280px] h-[500px] desktop:h-[600px] relative overflow-hidden"
      >
        <img
          src={{}}
          alt="background"
          className="w-full home-hero-image dark:sepia-[50%]"
        />

        <h1 className="font-fraunces font-black text-[40px] leading-[40px] text-center text-light-cream tablet:text-[48px] tablet:leading-[48px] tablet:text-left desktop:text-[72px] desktop:leading-[72px] absolute top-12 mobile:top-[100px] left-1/2 -translate-x-1/2 w-10/12 tablet:top-[104px] tablet:left-[58px] tablet:-translate-x-0 tablet:w-1/2 desktop:top-[117px] desktop:left-[85px]">
          Great coffee made simple.
        </h1>

        <p className="font-barlow font-normal text-[15px] leading-[25px] text-center text-light-cream mix-blend-normal opacity-[0.8] tablet:text-left desktop:text-[16px] desktop:leading-[26px] absolute top-60 mobile:top-[205px] left-1/2 -translate-x-1/2 w-10/12 tablet:top-[225px] tablet:left-[58px] tablet:-translate-x-0 tablet:w-3/5 desktop:top-[294px] desktop:left-[85px] desktop:w-1/3">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>

        <Link to={"/plan"}>
          <PlanButton styles="absolute top-[26rem] mobile:top-[345px] left-1/2 -translate-x-1/2 tablet:top-[340px] tablet:left-[58px] tablet:-translate-x-0 desktop:top-[428px] desktop:left-[85px]" />
        </Link>
      </section>

      <section className="mt-[120px] tablet:mt-[144px] desktop:mt-[136px] desktop:w-[1114px] mx-auto relative tablet:pt-[59px] desktop:pt-[126px]">
        <h3
          data-aos="fade-up"
          className={`font-fraunces font-black text-[40px] leading-[72px] text-center bg-grey tablet:text-[90px] desktop:text-[126px] w-full tablet:absolute tablet:top-[27px] desktop:top-[70px] desktop:h-[100px] desktop:pt-[16px] ${
            snap.darkMode === false
              ? "coffee-collection-title-gradient"
              : "coffee-collection-dark-gradient"
          }`}
        >
          our collection
        </h3>

        <div className="grid 705:grid-cols-2 tablet:grid-cols-1 1373:grid-cols-2 desktop:grid-cols-4 gap-6 mobile:gap-12 tablet:gap-8 desktop:gap-[30px] mx-[46px] tablet:mx-[97.5px] desktop:mx-auto">
          {coffeeCollection.map((coffee) => (
            <CoffeeType key={coffee.id} {...coffee} />
          ))}
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="mt-[120px] tablet:mt-[144px] desktop:mt-[200px] mx-6 tablet:mx-10 desktop:mx-auto desktop:w-[1280px] relative pt-[305px] tablet:pt-[275px] desktop:pt-[346px]"
      >
        <div className="bg-[#2C343E] rounded-[10px] w-full h-[902px] tablet:h-[573px] desktop:h-[577px] pt-[64px] tablet:pt-[56px] desktop:pt-[100px] absolute top-0 dark:bg-[#423d33]">
          <h2
            data-aos="fade-down"
            className="font-fraunces font-black text-[28px] leading-[28px] text-center text-light-cream tablet:text-[32px] tablet:leading-[48PX] desktop:text-[40px]"
          >
            Why choose us?
          </h2>

          <p
            data-aos="fade-down"
            className="font-barlow font-normal text-[15px] leading-[25px] text-center text-light-cream mix-blend-normal opacity-[0.8] desktop:text-[16px] desktop:leading-[26px] mt-6 desktop:mt-8 mx-6 473:mx-auto 473:w-[377px] tablet:w-[494px] desktop:w-[528px]"
          >
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>

        <div className="flex flex-col desktop:flex-row gap-6 desktop:gap-[30px] desktop:w-[1110px] desktop:mx-auto">
          {brandBenefits.map((benefit) => (
            <CoffeeBenefit key={benefit.id} {...benefit} />
          ))}
        </div>
      </section>

      <section className="mt-[120px] tablet:mt-[144px] desktop:mt-[200px] mx-6 tablet:mx-10 940:mx-auto 940:w-[860px] desktop:w-[1045px]">
        <h2
          data-aos="fade-right"
          className=" font-fraunces font-black text-[24px] leading-[32px] text-center text-grey tablet:text-left dark:text-white"
        >
          How it works
        </h2>

        <div
          data-aos="fade-right"
          data-aos-delay="250"
          className="h-[31px] w-full hidden tablet:flex mt-10 desktop:mt-20 justify-between pr-[192px] desktop:pr-[254px] relative overflow-hidden"
        >
          <div className="w-[31px] h-[31px] border-[2px] border-dark-cyan rounded-full bg-light-cream z-10" />
          <div className="w-[31px] h-[31px] border-[2px] border-dark-cyan rounded-full bg-light-cream z-10" />
          <div className="w-[31px] h-[31px] border-[2px] border-dark-cyan rounded-full bg-light-cream z-10" />

          <div className="h-[2px] bg-pale-orange absolute top-1/2 -translate-y-1/2 right-[207.5px] left-[15.5px] desktop:right-[269.5px]" />
        </div>

        <div className="flex flex-col tablet:flex-row gap-14 tablet:gap-[10px] desktop:gap-[95px] mt-20 tablet:mt-12 desktop:mt-[67px] items-center tablet:justify-between">
          {coffeeSteps.map((step) => (
            <CoffeeStep key={step.id} {...step} />
          ))}
        </div>

        <Link to={"/plan"}>
          <PlanButton styles="mt-[79px] tablet:mt-[44px] desktop:mt-[64px] mx-auto tablet:mx-0 block" />
        </Link>
      </section>
    </main>
  );
};

export default Home;
