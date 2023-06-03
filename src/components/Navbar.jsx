import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";

import logoNavbar from "../assets/shared/desktop/logo.svg";
import logoWhite from "../assets/shared/desktop/logo-white.svg";
import hamburgerMenu from "../assets/shared/mobile/icon-hamburger.svg";
import hamburgerWhite from "../assets/shared/mobile/icon-hamburger-white.svg";
import closeMenu from "../assets/shared/mobile/icon-close.svg";
import closeWhite from "../assets/shared/mobile/icon-close-white.svg";

import moon from "../assets/shared/moon.svg";

import styles from "../styles";
import state from "../store";

const Navbar = () => {
  const snap = useSnapshot(state);

  function handleDarkMode() {
    document.documentElement.classList.toggle("dark");
    state.darkMode = !state.darkMode;

    if (snap.darkMode === true) {
      localStorage.theme = "light";
    }
    if (snap.darkMode === false) {
      localStorage.theme = "dark";
    }
  }

  return (
    <nav className="flex items-center justify-between mt-8 mx-6 mb-10 tablet:mt-10 tablet:mx-10 tablet:mb-[54px] desktop:mt-11 desktop:mx-auto desktop:mb-11 desktop:w-[1280px] relative">
      <Link to={"/"}>
        <img
          data-aos="fade-down-right"
          src={snap.darkMode === false ? logoNavbar : logoWhite}
          alt="logo"
          className="w-[163px] tablet:w-[235px] desktop:w-[236px]"
        />
      </Link>

      <div
        data-aos="fade-down-left"
        className="w-[80px] flex justify-between absolute top-[-2px] tablet:top-[2px] right-8 tablet:right-[314px]"
      >
        <label className="">
          <input
            type="checkbox"
            className="appearance-none invisible hidden"
            checked={snap.darkMode}
            onChange={() => handleDarkMode()}
          />
          <span
            className={`relative block w-12 h-[24px] bg-dark-grey-blue dark:bg-light-cream cursor-pointer rounded-[20px] overflow-hidden before:absolute before:top-[2px] before:left-[2px] before:bg-light-cream before:dark:bg-dark-grey-blue before:w-[20px] before:h-[20px] before:rounded-full ${
              snap.darkMode === true ? "before:translate-x-[24px]" : ""
            } before:duration-300`}
          />
        </label>

        <img
          src={moon}
          alt="moon"
          className={`${
            snap.darkMode === true ? "to-white-filter rotate-[360deg]" : ""
          } duration-500`}
        />
      </div>

      <div data-aos="fade-down-left" className="flex items-center">
        <div className="hidden tablet:flex gap-8">
          <Link to={"/"} className={`${styles.navLink}`}>
            Home
          </Link>
          <Link to={"/about"} className={`${styles.navLink}`}>
            About Us
          </Link>
          <Link to={"/plan"} className={`${styles.navLink}`}>
            Create Your Plan
          </Link>
        </div>

        <img
          src={
            snap.darkMode === false && snap.modalNavbar === false
              ? hamburgerMenu
              : snap.darkMode === false && snap.modalNavbar === true
              ? closeMenu
              : snap.darkMode === true && snap.modalNavbar === false
              ? hamburgerWhite
              : closeWhite
          }
          alt="menu"
          className="tablet:hidden cursor-pointer"
          onClick={() => {
            state.modalNavbar = !state.modalNavbar;
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
