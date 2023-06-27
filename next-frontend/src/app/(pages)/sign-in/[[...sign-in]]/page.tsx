import React from "react";

import { SignIn } from "@clerk/nextjs";

const MySignIn = () => {
  return (
    <div className="w-full h-full flex items-center self-center justify-center pt-[80px] pb-[30px]">
      <SignIn />
    </div>
  );
};

export default MySignIn;
