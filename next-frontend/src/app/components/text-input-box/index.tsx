"use client";

import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

import styles from "../styles.module.css";

const TextArea = ({
  className,
  ...props
}: DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) => {
  return (
    <textarea
      className={`${styles.textArea} ${className}`}
      {...props}
    ></textarea>
  );
};

export default TextArea;
