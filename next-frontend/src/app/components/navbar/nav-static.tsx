import dynamic from "next/dynamic";
import { ReactNode } from "react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

import { Logo } from "@/app/internal-assets";
import {
  INavigationData,
  INavigationWithDropDown,
  navigationData,
  smallNavigationData,
} from "@/data";

const NavDropDown = dynamic(() => import("./nav-dropdown"), {
  ssr: false,
});

export const HeaderWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <header
      className={`w-full fixed text-[color:var(--primary-1)] h-[80px] flex justify-center items-center py-[10px] max-md:h-[80px] max-md:flex-col z-[5000] max-md:justify-start bg-[color:rgba(var(--bg-1-color),0.8)]`}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {children}
    </header>
  );
};

const LinkItems = ({ nd }: { nd: INavigationWithDropDown }) => {
  return (
    <>
      <div
        className={`flex items-center gap-1 justify-center relative transition ease-in-out duration-[0.2s] hover:text-[color:var(--accent-2)]`}
      >
        {nd.showIcon && (
          <div className="flex items-center translate-y-[-2px]">
            {nd.Icon && <nd.Icon className="text-[17px]" />}
          </div>
        )}
        <div className="flex items-center gap-0.5">
          <div
            className={`flex items-center justify-center leading-[1] font-pridi relative z-[10000]`}
          >
            <h3 className="flex font-pridi leading-[1] relative z-[10000]">
              {nd.name}
            </h3>
          </div>
          {nd.dropdown && (
            <div className="flex items-center group-hover:rotate-180 group-hover:translate-y-[-1px] transition-all">
              <IoMdArrowDropdown className="text-[25px] translate-y-[-1px]" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const MainNavWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="2xl:max-w-[1400px] w-[90%] flex items-center justify-between">
      <div className="flex relative self-start">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-3 w-auto"
        >
          <Logo className="w-[75px] h-[75px]" />
          <h2 className="flex text-[30px] font-sansita">Xenrir</h2>
        </Link>
      </div>
      <nav className="flex gap-[30px] font-medium text-[16px] items-center max-md:hidden max-lg:gap-[18px] translate-y-[5px]">
        {navigationData.map((nd: INavigationWithDropDown, i: number) => {
          return (
            <div
              key={i}
              className={`flex text-[color:var(--primary-1)] leading-[1] items-center group`}
            >
              {nd.dropdown ? (
                <div className="flex flex-col relative items-center cursor-pointer">
                  <LinkItems nd={nd} />
                  {nd.dropdown && <NavDropDown nd={nd.dropdownItems!} />}
                </div>
              ) : (
                <Link href={nd.url}>
                  <LinkItems nd={nd} />
                </Link>
              )}
            </div>
          );
        })}
      </nav>
      {children}
    </div>
  );
};

export const SmallNavContent = ({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) => {
  return (
    <nav
      className={`${
        open ? "flex" : "hidden"
      } justify-center fixed bg-gradient-to-r from-[color:var(--bg-color-1)] to-[color:var(--bg-color-2)] h-auto mt-[70px] w-full md:hidden transition-all z-[10000]`}
    >
      <div className="flex flex-col bg-gradient-to-r from-[color:var(--bg-color-1)] to-[color:var(--bg-color-2)] absolute text-[color:var(--primary-color-1)] py-4 w-full justify-center items-center">
        <div className="2xl:max-w-[1400px] w-[90%] flex flex-col gap-[5px]">
          {smallNavigationData.map((snd: INavigationData, i: number) => {
            return (
              <div key={i} className="flex items-center">
                <Link href={snd.url} className="flex gap-1 items-center">
                  <div>
                    <snd.Icon />
                  </div>
                  <div>{snd.name}</div>
                </Link>
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </nav>
  );
};
