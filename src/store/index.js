import { proxy } from "valtio";

const state = proxy({
  element1option: "_____",
  element2option: "_____",
  element3option: "_____",
  element4option: "_____",
  element5option: "_____",

  modalNavbar: false,
  darkMode: false,
});

export default state;
