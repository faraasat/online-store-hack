import { FaCompass, FaHome, FaInfoCircle } from "react-icons/fa";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { SiProducthunt } from "react-icons/si";

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
        url: "/products/men",
        Icon: BiMaleSign,
      },
      {
        name: "Women",
        url: "/products/women",
        Icon: BiFemaleSign,
      },
      {
        name: "Kids",
        url: "/products/kids",
        Icon: TbMoodKid,
      },
      {
        name: "All Products",
        url: "/products",
        Icon: SiProducthunt,
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
    url: "/products/men",
    Icon: BiMaleSign,
    showIcon: true,
  },
  {
    name: "Women",
    url: "/products/women",
    Icon: BiFemaleSign,
    showIcon: true,
  },
  {
    name: "Kids",
    url: "/products/kids",
    Icon: TbMoodKid,
    showIcon: true,
  },
  {
    name: "All Products",
    url: "/products",
    Icon: SiProducthunt,
    showIcon: true,
  },
];

export const aboutData: Array<string> = [
  "Welcome to Xenrir, the ultimate fashion destination for trendsetters who want to redefine their style and unlock incredible rewards along the way! Our cutting-edge platform revolutionizes the fashion industry, empowering customers to discover unique pieces and establish their fashion prowess with verifiable authenticity. Step into a world where self-expression meets innovation, where every wardrobe choice is a statement waiting to be made.",
  "At Xenrir, we believe in more than just fashion – we believe in a community that thrives on individuality. With our innovative tokenization technology, you can now take ownership of your favorite fashion items and showcase your personal style like never before. Say goodbye to impersonal transactions and hello to a world where your fashion choices are celebrated and rewarded.",
  "But that's not all – with Xenrir, fashionistas can also earn rewards by lending, borrowing, and staking their tokens, creating a dynamic ecosystem that rewards both creativity and investment. Unlock a world of possibilities and be part of the fashion revolution that transcends boundaries.",
  "Don't settle for ordinary fashion experiences or generic styles. Join Xenrir today and let your wardrobe reflect your true essence. It's time to level up your fashion game and embrace the limitless possibilities of style.",
];
