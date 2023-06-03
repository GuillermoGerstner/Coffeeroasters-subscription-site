import React from "react";

const PlanButton = ({ styles, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[217px] h-14 rounded-md bg-dark-cyan hover:bg-dark-cyan-hover cursor-pointer font-fraunces font-black text-[18px] leading-[25px] text-center text-light-cream duration-300 hover:scale-105 active:scale-95 ${styles}`}
    >
      {text ? text : "Create your plan"}
    </button>
  );
};

export default PlanButton;
