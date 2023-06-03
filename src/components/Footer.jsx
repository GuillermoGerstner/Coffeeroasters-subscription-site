import React from "react";
import { Link } from "react-router-dom";

import logoFooter from "../assets/shared/desktop/logo-white.svg";

import facebookColor from "../assets/shared/desktop/icon-facebook-color.svg";

import instagramColor from "../assets/shared/desktop/icon-instagram-color.svg";

import twitterColor from "../assets/shared/desktop/icon-twitter-color.svg";

import styles from "../styles";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      className="bg-[#2C343E] mx-6 mb-[72px] h-[346px] tablet:mx-10 tablet:mb-[72px] tablet:h-[270px] desktop:mx-auto desktop:mb-[88px] desktop:h-[120px] desktop:w-[1280px] flex flex-col desktop:flex-row desktop:items-center pt-[54px] desktop:pt-0 dark:bg-[#423d33]"
    >
      <Link to={"/"} className="w-fit mx-auto desktop:ml-[86px] desktop:mr-0">
        <img
          src={logoFooter}
          alt="logo"
          className="w-[217px] tablet:w-[236px] desktop:w-[235px]"
        />
      </Link>

      <div className="flex flex-col gap-6 justify-center items-center w-fit tablet:flex-row tablet:gap-8 mt-[50px] mx-auto mb-[50px] tablet:mt-8 tablet:mb-16 desktop:mt-0 desktop:ml-[103px] desktop:mr-0 desktop:mb-0">
        <Link
          to={"/"}
          onClick={() => window.screenTop(0)}
          className={`${styles.footerLink}`}
        >
          Home
        </Link>
        <Link
          to={"/about"}
          onClick={() => window.screenTop(0)}
          className={`${styles.footerLink}`}
        >
          About Us
        </Link>
        <Link
          to={"/plan"}
          onClick={() => window.screenTop(0)}
          className={`${styles.footerLink}`}
        >
          Create Your Plan
        </Link>
      </div>

      <div className="flex gap-6 justify-between items-center w-fit mx-auto desktop:ml-[368px]">
        <img
          src={facebookColor}
          alt="facebook"
          className="cursor-pointer to-white-filter hover:filter-none"
        />
        <img
          src={twitterColor}
          alt="twitter"
          className="cursor-pointer to-white-filter hover:filter-none"
        />
        <img
          src={instagramColor}
          alt="instagram"
          className="cursor-pointer to-white-filter hover:filter-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
