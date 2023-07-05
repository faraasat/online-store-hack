import React from "react";

import { SignUp } from "@clerk/nextjs";

import { ScrollToTop } from "@/app/utils";

const MySignUp = () => {
  return (
    <>
      <ScrollToTop />
      <div className="w-full h-full flex items-center self-center justify-center pt-[80px] pb-[30px]">
        <SignUp
          path="sign-up"
          redirectUrl={window.location.href}
          signInUrl="/sign-in"
        />
      </div>
    </>
  );
};

export default MySignUp;
