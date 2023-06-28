"use client";

import {
  ToastContainer,
  ToastOptions,
  TypeOptions,
  UpdateOptions,
  toast,
} from "react-toastify";

export const ToastContainerClient = () => {
  return <ToastContainer />;
};

const genericConfig: UpdateOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const toastLoading = (
  id: string,
  msg: string,
  type: TypeOptions,
  isLoading: boolean = true
) => {
  toast.update(id, {
    render: msg,
    ...genericConfig,
    type: type,
    isLoading: isLoading,
  });
};

export const toastUpdate = (
  id: string,
  msg: string,
  type: TypeOptions,
  isLoading: boolean = false
) => {
  toast.update(id, {
    render: msg,
    ...genericConfig,
    type: type,
    isLoading: isLoading,
  });
};

const genericConfig2: ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const toastSuccess = (
  id: string,
  msg: string,
  isLoading: boolean = false
) => {
  toast.success(msg, {
    ...genericConfig2,
    toastId: id,
    isLoading: isLoading,
  });
};

export const toastError = (
  id: string,
  msg: string,
  isLoading: boolean = false
) => {
  toast.error(msg, {
    ...genericConfig2,
    toastId: id,
    isLoading: isLoading,
  });
};

export const toastInfo = (
  id: string,
  msg: string,
  isLoading: boolean = false
) => {
  toast.info(msg, {
    ...genericConfig2,
    toastId: id,
    isLoading: isLoading,
  });
};

export const toastWarning = (
  id: string,
  msg: string,
  isLoading: boolean = false
) => {
  toast.warning(msg, {
    ...genericConfig2,
    toastId: id,
    isLoading: isLoading,
  });
};
