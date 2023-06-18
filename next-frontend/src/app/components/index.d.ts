import { LinkProps } from "next/link";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ICustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  showGradient?: boolean;
  loading?: boolean;
  btnText: string;
  Icon?: {
    Img: any;
    position: "left" | "right";
  };
}

export interface ICustomButtonUnstyled
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  btnText: string;
  Icon?: {
    Img: any;
    position: "left" | "right";
  };
}

export interface ILinkButton extends LinkProps {
  showGradient?: boolean;
  btnText: string;
  Icon?: {
    Img: any;
    position: "left" | "right";
  };
  target?: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ITopHeader {
  title: string;
  desc: string;
  className?: string;
  style?: React.CSSProperties;
}
