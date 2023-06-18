"use client";

import { FC } from "react";
import Link from "next/link";

import { ILinkButton } from "..";

import styles from "../styles.module.css";

const LinkButton: FC<ILinkButton> = ({
  showGradient,
  btnText,
  Icon,
  href,
  className,
  target,
  ...restProps
}) => {
  return (
    <Link
      className={`flex rounded-full items-center justify-center ${
        showGradient ? styles.btnGradientBg : styles.btnGradientBorder
      } ${className && className}`}
      href={href}
      target={target}
      {...restProps}
    >
      <div className="flex gap-2 items-center justify-center">
        {Icon && Icon.position === "left" && (
          <div className="flex items-center z-[200]">
            <Icon.Img className="text-[18px]" />
          </div>
        )}
        <div className="flex items-center translate-y-[1px] leading-[1] z-[200]">
          {btnText}
        </div>
        {Icon && Icon.position === "right" && (
          <div className="flex items-center z-[200]">
            <Icon.Img className="text-[18px]" />
          </div>
        )}
      </div>
    </Link>
  );
};

export default LinkButton;
