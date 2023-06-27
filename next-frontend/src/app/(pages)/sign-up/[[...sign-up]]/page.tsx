import React from "react";

import { SignUp } from "@clerk/nextjs";

const MySignUp = () => {
  return (
    <div className="w-full h-full flex items-center self-center justify-center pt-[80px] pb-[50px]">
      <SignUp />
    </div>
  );
};

export default MySignUp;
