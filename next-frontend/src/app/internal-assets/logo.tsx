import React from "react";

const Logo = ({
  className,
  gradient1 = "#FF02C7",
  gradient2 = "#FF02C7",
}: {
  className?: string;
  gradient1?: string;
  gradient2?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="inherit"
      // height="inherit"
      fill="none"
      viewBox="0 0 150 100"
      className={className}
    >
      <path
        fill="url(#paint0_linear_4_8)"
        d="M150 .013s-40.032-1.85-71.575 39.395C54.218 71.054 45.205 100 45.205 100l10.166-5c7.545-12.498 11.474-17.647 18.863-24.996 13.256 3.7 27.089 3.25 39.088-9.999-10.48-2.8-18.863-2.15-31.229-.95 13.885-9.049 23.369-11.048 36.469-9.049l5.239-9.998c-9.431-1.7-15.719-1.85-25.046.2 10.323-6.95 17.501-10.85 30.286-10.2l6.34-9.648c-8.174-.55-13.099.3-22.478 2.5 8.436-7.3 16.138-10.599 27.351-11.249 0 0 5.502-9.449 9.746-11.598z"
      ></path>
      <path
        fill="url(#paint1_linear_4_8)"
        d="M0 .013s40.032-1.85 71.575 39.395C95.782 71.054 104.795 100 104.795 100l-10.166-5c-7.545-12.498-11.475-17.647-18.863-24.996-13.256 3.7-27.089 3.25-39.088-9.999 10.48-2.8 18.863-2.15 31.229-.95-13.885-9.049-23.37-11.048-36.469-9.049l-5.24-9.998c9.432-1.7 15.72-1.85 25.047.2-10.323-6.95-17.501-10.85-30.286-10.2l-6.34-9.648c8.174-.55 13.1.3 22.478 2.5C28.661 15.56 20.96 12.26 9.746 11.61c0 0-5.502-9.449-9.746-11.598z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_4_8"
          x1="48.794"
          x2="153.552"
          y1="0.98"
          y2="75.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopColor={gradient1}></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_4_8"
          x1="101.206"
          x2="-3.552"
          y1="0.98"
          y2="75.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopColor={gradient2}></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
