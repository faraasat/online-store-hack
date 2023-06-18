"use client";

import { FC } from "react";

import styles from "../styles.module.css";

import { ICustomButton } from "..";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CustomButton: FC<ICustomButton> = ({
  showGradient,
  btnText,
  Icon,
  className,
  loading = false,
  ...restProps
}) => {
  return (
    <button
      className={`flex rounded-full items-center justify-center py-2 px-4 ${
        showGradient ? styles.btnGradientBg : styles.btnGradientBorder
      } ${className}`}
      {...restProps}
    >
      <div className="flex gap-2 items-center justify-center">
        {Icon && Icon.position === "left" && loading === false && (
          <div className="flex items-center z-[200]">
            <Icon.Img className="text-[18px]" />
          </div>
        )}
        {Icon && Icon.position === "left" && loading === true && (
          <div className="flex items-center z-[200]">
            <AiOutlineLoading3Quarters className="text-[18px] animate-spin" />
          </div>
        )}
        <div className="flex items-center translate-y-[1px] leading-[1] z-[200]">
          {btnText}
        </div>
        {Icon && Icon.position === "right" && loading === false && (
          <div className="flex items-center z-[200]">
            <Icon.Img className="text-[18px]" />
          </div>
        )}
        {Icon && Icon.position === "right" && loading === true && (
          <div className="flex items-center z-[200]">
            <AiOutlineLoading3Quarters className="text-[18px] animate-spin" />
          </div>
        )}
      </div>
    </button>
  );
};

export default CustomButton;
