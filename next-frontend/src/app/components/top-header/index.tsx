import { FC } from "react";
import { ITopHeader } from "..";

const TopHeader: FC<ITopHeader> = ({ title, desc, className = "", style }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center w-full ${className}`}
      style={style}
    >
      <h1 className="font-sansita text-[25px] leading-[1] mb-1 text-[color:var(--accent-2)]">
        {title}
      </h1>
      <h2 className="text-[35px] leading-[1]">{desc}</h2>
    </div>
  );
};

export default TopHeader;
