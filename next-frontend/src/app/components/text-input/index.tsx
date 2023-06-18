"use client";

import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import styles from "../styles.module.css";

const TextInput = ({
  className,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return <input className={`${styles.textInput} ${className}`} {...props} />;
};

export default TextInput;
