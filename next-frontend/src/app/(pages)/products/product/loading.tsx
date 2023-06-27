import { Logo } from "@/app/internal-assets";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="fixed z-[10000001] bg-[color:rgba(var(--bg-1-color),0.7)] h-full w-full flex flex-col gap-3 items-center justify-center">
      <div className="relative flex justify-center items-center h-[150px]">
        <Logo className="absolute w-[100px] h-[100px] text-[color:var(--primary-1)]" />
        <AiOutlineLoading3Quarters className="absolute animate-spin text-[180px] text-[color:var(--primary-1)]" />
      </div>
      <div className="font-russo_one text-[40px]">Loading...</div>
    </div>
  );
};

export default Loading;
