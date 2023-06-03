import React, { useState } from "react";
import { useSnapshot } from "valtio";

import { CoffeeConfigOption } from "../components";
import state from "../store";

import arrow from "../assets/plan/desktop/icon-arrow.svg";

const CoffeeConfigElement = ({
  id,
  title,
  option1title,
  option1description,
  option2title,
  option2description,
  option3title,
  option3description,
}) => {
  const [open, setOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState(0);

  const snap = useSnapshot(state);

  function handleOptionSelected(number, title) {
    setOptionSelected(number);

    if (id === "1") {
      state.element1option = title;
    }
    if (id === "2") {
      state.element2option = title;
    }
    if (id === "3") {
      state.element3option = title;
    }
    if (id === "4") {
      state.element4option = title;
    }
    if (id === "5") {
      state.element5option = title;
    }
  }

  return (
    <article
      data-aos="fade-left"
      id={id}
      className={`mx-6 tablet:mx-10 970:w-[890px] desktop:w-[730px] 970:mx-auto desktop:mx-0 overflow-hidden`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h2 className=" font-fraunces font-black text-[24px] leading-[28px] text-grey tablet:text-[32px] tablet:leading-[48px] desktop:text-[40px] pr-[54px] dark:text-white">
          {title}
        </h2>

        <img
          src={arrow}
          alt="arrow"
          className={`${open === true ? "rotate-180" : ""} duration-200`}
        />
      </div>

      <div
        className={`flex flex-col tablet:flex-row gap-4 tablet:gap-[10px] desktop:gap-[23px] duration-500 ${
          open === true
            ? "max-h-max mt-8 tablet:mt-10 desktop:mt-[56px]"
            : "max-h-0 mt-0"
        }`}
      >
        <CoffeeConfigOption
          title={option1title}
          description={option1description}
          id={id}
          selected={optionSelected}
          number={1}
          onClick={() => handleOptionSelected(1, option1title)}
        />
        <CoffeeConfigOption
          title={option2title}
          description={option2description}
          id={id}
          selected={optionSelected}
          number={2}
          onClick={() => handleOptionSelected(2, option2title)}
        />
        <CoffeeConfigOption
          title={option3title}
          description={option3description}
          id={id}
          selected={optionSelected}
          number={3}
          onClick={() => handleOptionSelected(3, option3title)}
        />
      </div>
    </article>
  );
};

export default CoffeeConfigElement;
