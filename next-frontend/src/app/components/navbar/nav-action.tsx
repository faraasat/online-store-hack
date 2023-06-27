"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { HeaderWrapper, MainNavWrapper, SmallNavContent } from "./nav-static";

const NavTheme = dynamic(() => import("./nav-theme-settings"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center">
      <AiOutlineLoading3Quarters className="animate-spin text-[28px] text-[color:var(--primary-1)]" />
    </div>
  ),
});

const MyCart = dynamic(() => import("./nav-cart"), {
  ssr: false,
});

const NavbarAction = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MainNavWrapper>
        <div className="flex items-center gap-2">
          <div
            className="border border-[color:var(--primary-1])] rounded-md w-[33px] h-[33px] cursor-pointer flex justify-center items-center md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <GiHamburgerMenu className="text-[23px]" />
          </div>
          <div className="cursor-pointer">
            <MyCart />
          </div>
          <div className="cursor-pointer">
            <NavTheme />
          </div>
        </div>
      </MainNavWrapper>
      <SmallNavContent open={open}>
        <div className="2xl:max-w-[1400px] w-[90%] flex items-center mt-2 md:hidden">
          {/* <CustomButtonComponent
            Icon={{ Img: TbPlugConnected, position: "left" }}
            btnText="Connect Wallet"
            showGradient={true}
          /> */}
        </div>
      </SmallNavContent>
    </HeaderWrapper>
  );
};

export default NavbarAction;
