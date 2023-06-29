import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const NavAuthBtn = () => {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton mode={"modal"} redirectUrl={window.location.href} />
      </SignedOut>
    </>
  );
};

export default NavAuthBtn;
