import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

import { INavigationData } from "@/data";

const NavDropDown = ({
  nd,
  navWidth,
}: {
  nd: Array<INavigationData>;
  navWidth?: string;
}) => {
  return (
    <>
      <div className="hidden group-hover:flex absolute rotate-180 mt-[20px] transition-all">
        <IoMdArrowDropdown className="text-[40px]" />
      </div>
      <div className="hidden group-hover:flex group-hover:flex-col absolute pt-[19px] mt-[25px] text-[color:var(--primary-1)]">
        <div
          className={`flex flex-col py-5 px-5 gap-3 transition-all bg-[color:rgba(var(--bg-1-color),0.8)] rounded-lg shadow-[0px_0px_2px_1px_rgba(var(--primary-1-color),0.5)] 
          ${navWidth ? navWidth : "w-[230px]"}`}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {nd.map((di: INavigationData) => {
            return (
              <div className={`flex flex-col`} key={di.name}>
                <Link
                  href={di.url}
                  className={`flex gap-1 max-lg:gap-1 items-center relative transition ease-in-out duration-[0.2s] hover:text-[color:var(--accent-2)]`}
                >
                  <div className="flex items-center">
                    {di.Icon && <di.Icon className="text-[17px]" />}
                  </div>
                  <div className="flex items-center font-pridi">{di.name}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavDropDown;
