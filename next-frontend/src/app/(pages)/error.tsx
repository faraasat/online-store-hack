"use client";

import { BiErrorCircle } from "react-icons/bi";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <>
      <div className="h-[calc(100vh-60px-100px)] min-h-[350px] flex justify-center">
        <div className="2xl:max-w-[1400px] w-[90%] flex flex-col gap-5 items-center justify-center">
          <div className="flex justify-center items-center">
            <BiErrorCircle className="animate-pulse text-red-600 text-[100px]" />
          </div>
          <h2 className="text-[45px]">An Error Occured</h2>
          <p className="text-center">{error.message}</p>
          <button
            onClick={reset}
            className="bg-[color:var(--bg-color-1)] text-[color:var(--primary-color-1)] border-none outline-none py-3 px-5 rounded-md"
          >
            Refresh the Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
