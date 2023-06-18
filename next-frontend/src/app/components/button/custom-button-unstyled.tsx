"use client";

import { FC } from "react";

import { ICustomButtonUnstyled } from "..";

const CustomButtonUnstyled: FC<ICustomButtonUnstyled> = ({
  btnText,
  Icon,
  className,
  ...restProps
}) => {
  return (
    <button
      className={`flex rounded-full items-center justify-start ${className}`}
      {...restProps}
    >
      <div className="flex gap-2 items-center justify-center">
        {Icon && Icon.position === "left" && (
          <div className="flex items-center z-[200]">
            <Icon.Img className="text-[18px]" />
          </div>
        )}
        <div className="flex items-center leading-[1] z-[200] font-russo_one">
          {btnText}
        </div>
        {Icon && Icon.position === "right" && (
          <div className="flex items-center z-[200]">
            <Icon.Img className="text-[18px]" />
          </div>
        )}
      </div>
    </button>
  );
};

export default CustomButtonUnstyled;
