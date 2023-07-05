import React from "react";

import { SignIn } from "@clerk/nextjs";

import { ScrollToTop } from "@/app/utils";

const MySignIn = () => {
  return (
    <>
      <ScrollToTop />
      <div className="w-full h-full flex items-center self-center justify-center pt-[80px] pb-[30px]">
        <SignIn
          path="sign-in"
          redirectUrl={window.location.href}
          signUpUrl="/sign-up"
        />
      </div>
    </>
  );
};

export default MySignIn;
