import React, { useState } from "react";
import { useSnapshot } from "valtio";

import { CoffeeStep, CoffeeConfigElement, PlanButton } from "../components";
import state from "../store";

import { coffeeSteps, coffeeConfiguration } from "../constants";
import styles from "../styles";

const Plan = () => {
  const snap = useSnapshot(state);
  const [linkSelected, setLinkSelected] = useState(0);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  return (
    <main className="mb-[120px] tablet:mb-[144px] desktop:mb-[168px] relative">
      <section
        data-aos="fade-up"
        className="rounded-[10px] mx-6 tablet:mx-10 desktop:mx-auto desktop:w-[1280px] h-[400px] desktop:h-[450px] relative overflow-hidden"
      >
        <img
          src={{}}
          alt="background"
          className="h-full mobile:h-[unset] w-full plan-hero-image dark:sepia-[50%]"
        />

        <h1 className="font-fraunces font-black text-[40px] leading-[40px] text-center text-light-cream tablet:text-[48px] tablet:leading-[48px] tablet:text-left desktop:text-[72px] desktop:leading-[72px] absolute top-20 mobile:top-[101px] left-1/2 -translate-x-1/2 w-10/12 tablet:top-[127px] tablet:left-[58px] tablet:-translate-x-0 tablet:w-1/2 desktop:top-[134px] desktop:left-[85px]">
          Create a plan
        </h1>

        <p className="font-barlow font-normal text-[15px] leading-[25px] text-center text-light-cream mix-blend-normal opacity-[0.8] tablet:text-left desktop:text-[16px] desktop:leading-[26px] absolute top-52 mobile:top-[163px] left-1/2 -translate-x-1/2 w-11/12 544:w-[455px] tablet:top-[199px] tablet:left-[58px] tablet:-translate-x-0 tablet:w-[56%] 970:w-[498px] desktop:top-[238px] desktop:left-[85px] desktop:w-1/3">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>

      <section
        data-aos="fade-up"
        className="bg-[#2C343E] rounded-[10px] mt-[120px] tablet:mt-[144px] desktop:mt-[168px] mb-[120px] tablet:mb-[144px] desktop:mb-[168px] desktop:mx-auto desktop:w-[1280px] py-20 px-6 tablet:pt-[97px] tablet:px-10 tablet:pb-[70px] desktop:px-0d desktop:py-[100px] dark:bg-[#423d33]"
      >
        <article className="940:mx-auto 940:w-[860px] desktop:ml-[85px] desktop:w-[1045px]">
          <div
            data-aos="fade-right"
            className="h-[31px] w-full hidden tablet:flex justify-between pr-[192px] desktop:pr-[254px] relative overflow-hidden"
          >
            <div className="w-[31px] h-[31px] border-[2px] border-dark-cyan rounded-full z-10" />
            <div className="w-[31px] h-[31px] border-[2px] border-dark-cyan rounded-full z-10" />
            <div className="w-[31px] h-[31px] border-[2px] border-dark-cyan rounded-full z-10" />

            <div className="h-[2px] bg-pale-orange absolute top-1/2 -translate-y-1/2 right-[207.5px] left-[15.5px] desktop:right-[269.5px]" />
          </div>

          <div className="flex flex-col tablet:flex-row gap-14 tablet:gap-[10px] desktop:gap-[95px] mt-20 tablet:mt-12 desktop:mt-[67px] items-center tablet:justify-between">
            {coffeeSteps.map((step) => (
              <CoffeeStep key={step.id} {...step} styles="text-white" />
            ))}
          </div>
        </article>
      </section>

      <section className="w-full desktop:w-[1110px] desktop:mx-auto desktop:flex desktop:justify-between">
        <div
          data-aos="fade-right"
          className="hidden desktop:block w-[255px] bg-yellow-000"
        >
          <a
            className={`flex relative duration-200 ${
              snap.element1option != "_____" ? "opacity-100" : "opacity-25"
            }`}
            onClick={() => setLinkSelected(1)}
          >
            <span
              className={`${styles.configLinkText} text-dark-cyan dark:text-dark-cyan`}
            >
              01
            </span>

            <h2
              className={`${styles.configLinkText} absolute left-[58.5px] text-dark-grey-blue dark:text-[#d3cec4]`}
            >
              Preferences
            </h2>
          </a>

          <hr className="my-6 w-full bg-grey" />

          <a
            className={`flex relative duration-200 ${
              snap.element2option != "_____" ? "opacity-100" : "opacity-25"
            }`}
            onClick={() => setLinkSelected(2)}
          >
            <span
              className={`${styles.configLinkText} text-grey dark:text-[#a39e93]`}
            >
              02
            </span>

            <h2
              className={`${styles.configLinkText} absolute left-[58.5px] text-dark-grey-blue dark:text-[#d3cec4]`}
            >
              Bean Type
            </h2>
          </a>

          <hr className="my-6 w-full bg-grey" />

          <a
            className={`flex relative duration-200 ${
              snap.element3option != "_____" ? "opacity-100" : "opacity-25"
            }`}
            onClick={() => setLinkSelected(3)}
          >
            <span
              className={`${styles.configLinkText} text-grey dark:text-[#a39e93]`}
            >
              03
            </span>

            <h2
              className={`${styles.configLinkText} absolute left-[58.5px] text-dark-grey-blue dark:text-[#d3cec4]`}
            >
              Quantity
            </h2>
          </a>

          <hr className="my-6 w-full bg-grey" />

          <a
            className={`flex relative duration-200 ${
              snap.element4option != "_____" ? "opacity-100" : "opacity-25"
            }`}
            onClick={() => setLinkSelected(4)}
          >
            <span
              className={`${styles.configLinkText} text-grey dark:text-[#a39e93]`}
            >
              04
            </span>

            <h2
              className={`${styles.configLinkText} absolute left-[58.5px] text-dark-grey-blue dark:text-[#d3cec4]`}
            >
              Grind Option
            </h2>
          </a>

          <hr className="my-6 w-full bg-grey" />

          <a
            className={`flex relative duration-200 ${
              snap.element5option != "_____" ? "opacity-100" : "opacity-25"
            }`}
            onClick={() => setLinkSelected(5)}
          >
            <span
              className={`${styles.configLinkText} text-grey dark:text-[#a39e93]`}
            >
              05
            </span>

            <h2
              className={`${styles.configLinkText} absolute left-[58.5px] text-dark-grey-blue dark:text-[#d3cec4]`}
            >
              Deliveries
            </h2>
          </a>
        </div>

        <div className="">
          <div className="flex flex-col gap-24 tablet:gap-[100px] desktop:gap-[88px]">
            {coffeeConfiguration.map((config) => (
              <CoffeeConfigElement key={config.id} {...config} />
            ))}
          </div>

          <article
            data-aos="fade-left"
            className="bg-[#2C343E] rounded-[10px] mx-6 tablet:mx-10 970:mx-auto 970:w-[890px] desktop:w-[730px] py-8 tablet:py-[27px] mt-[120px] tablet:mt-[144px] desktop:mt-[88px] mb-14 tablet:mb-10 dark:bg-[#423d33]"
          >
            <span className="font-barlow font-normal text-[16px] leading-[26px] uppercase text-white mix-blend-normal opacity-50 ml-[25px] tablet:ml-11 desktop:ml-16">
              Order Summary
            </span>

            <p className="font-fraunces font-black text-[24px] leading-[40px] text-white mt-2 mx-6 tablet:mx-11 desktop:mx-16">
              “I drink my coffee as{" "}
              <span className="text-dark-cyan">{snap.element1option}</span>,
              with a{" "}
              <span className="text-dark-cyan">{snap.element2option}</span> type
              of bean.{" "}
              <span className="text-dark-cyan">{snap.element3option}</span>{" "}
              ground ala{" "}
              <span className="text-dark-cyan">{snap.element4option}</span>,
              sent to me{" "}
              <span className="text-dark-cyan">{snap.element5option}</span>
              .”
            </p>
          </article>

          <PlanButton
            onClick={() => {
              setShowOrderSummary(true);
            }}
            styles={`block mx-auto desktop:ml-[513px] ${
              snap.element1option === "_____"
                ? "bg-stone-300 cursor-auto pointer-events-none"
                : ""
            } ${
              snap.element2option === "_____"
                ? "bg-stone-300 cursor-auto pointer-events-none"
                : ""
            } ${
              snap.element3option === "_____"
                ? "bg-stone-300 cursor-auto pointer-events-none"
                : ""
            } ${
              snap.element4option === "_____"
                ? "bg-stone-300 cursor-auto pointer-events-none"
                : ""
            } ${
              snap.element5option === "_____"
                ? "bg-stone-300 cursor-auto pointer-events-none"
                : ""
            }`}
          />
        </div>
      </section>

      <div
        className={`${
          showOrderSummary === false ? "hidden" : ""
        } w-full h-[7000px] z-10 absolute -top-[91px] tablet:-top-[121px] desktop:-top-[115px]`}
      >
        <div
          onClick={() => setShowOrderSummary(false)}
          className="bg-transparent-black mix-blend-normal w-full h-full"
        />

        <article className="bg-light-cream rounded-lg fixed top-1/2 -translate-y-1/2 left-[24px] right-[24px] tablet:left-1/2 tablet:-translate-x-1/2 tablet:w-[540px] pb-6 tablet:pb-14 dark:bg-[#b8b2a7]">
          <h2 className="font-fraunces font-black text-[28px] leading-[32px] text-white tablet:text-[40px] tablet:leading-[48px] bg-dark-grey-blue rounded-t-lg py-7 pl-6 tablet:pt-12 tablet:pb-10 tablet:pl-14 dark:bg-[#423d33]">
            Order Summary
          </h2>

          <p className="font-fraunces font-black text-[24px] leading-[40px] text-grey mt-10 tablet:mt-[57px] mx-6 tablet:mx-14 dark:text-white">
            “I drink my coffee as{" "}
            <span className="text-dark-cyan">{snap.element1option}</span>, with
            a <span className="text-dark-cyan">{snap.element2option}</span> type
            of bean.{" "}
            <span className="text-dark-cyan">{snap.element3option}</span> ground
            ala <span className="text-dark-cyan">{snap.element4option}</span>,
            sent to me{" "}
            <span className="text-dark-cyan">{snap.element5option}</span>
            .”
          </p>

          <p className="font-barlow font-normal text-[15px] leading-[25px] tablet:text-[16px] tablet:leading-[26px] text-dark-grey-blue mix-blend-normal opacity-80 mx-6 tablet:mx-14 tablet:mt-[7px] dark:text-white">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>

          <div className="flex mt-6 tablet:mt-[47px] mx-6 tablet:mx-14 justify-between items-center">
            <PlanButton
              styles={"w-full mx-auto tablet:hidden"}
              onClick={() => location.reload()}
              text={`Checkout - $14.00 / mo`}
            />

            <span className="hidden tablet:block font-fraunces font-black text-[32px] leading-[36px] text-dark-grey-blue dark:text-white">
              $14.00 / mo
            </span>

            <PlanButton
              styles={"hidden tablet:block"}
              onClick={() => location.reload()}
              text={`Checkout`}
            />
          </div>
        </article>
      </div>
    </main>
  );
};

export default Plan;
