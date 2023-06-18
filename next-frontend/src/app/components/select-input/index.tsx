"use client";

import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

import styles from "../styles.module.css";

const SelectInput = ({
  className,
  children,
  ...props
}: DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>) => {
  return (
    <select className={`${styles.selectInput} ${className}`} {...props}>
      {children}
    </select>
  );
};

export default SelectInput;
