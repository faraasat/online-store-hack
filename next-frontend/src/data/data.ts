import { FaCompass, FaHome, FaInfoCircle } from "react-icons/fa";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";

import { INavigationData, INavigationWithDropDown } from "@/data";
import { TbMoodKid } from "react-icons/tb";

export const navigationData: Array<INavigationWithDropDown> = [
  { name: "Home", url: "/", Icon: FaHome },
  {
    name: "About",
    url: "/about",
    Icon: FaInfoCircle,
  },
  {
    name: "Discover",
    url: "/",
    Icon: FaCompass,
    dropdown: true,
    dropdownItems: [
      {
        name: "Men",
        url: "/men",
        Icon: BiMaleSign,
      },
      {
        name: "Women",
        url: "/women",
        Icon: BiFemaleSign,
      },
      {
        name: "Kids",
        url: "/kids",
        Icon: TbMoodKid,
      },
    ],
  },
];

export const smallNavigationData: Array<INavigationData> = [
  { name: "Home", url: "/", Icon: FaHome, showIcon: true },
  {
    name: "About",
    url: "/about",
    Icon: FaInfoCircle,
    showIcon: true,
  },
  {
    name: "Men",
    url: "/men",
    Icon: BiMaleSign,
    showIcon: true,
  },
  {
    name: "Women",
    url: "/women",
    Icon: BiFemaleSign,
    showIcon: true,
  },
  {
    name: "Kids",
    url: "/kids",
    Icon: TbMoodKid,
    showIcon: true,
  },
];
