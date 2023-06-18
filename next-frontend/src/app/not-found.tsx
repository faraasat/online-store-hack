import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Xenrir - Page Not Found",
};

const NotFound = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="font-mochiy text-[50px]">404</h1>
      <p className="text-[25px]">Page Not Found</p>
    </div>
  );
};

export default NotFound;
