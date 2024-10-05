"use client";
import { ToastProps } from "@/app/_types";
/* eslint-disable react/no-array-index-key */
import classes from "./Toast.module.css";
import { useCallback, useState } from "react";

// eslint-disable-next-line
export let createToast: (toast: ToastProps) => void;

const Toast = () => {
  const [toasts, setToasts] = useState<Array<ToastProps>>([]);

  createToast = useCallback(
    (toast: ToastProps) => {
      const newToasts = [toast, ...toasts];
      setToasts(newToasts);

      setTimeout(() => {
        setToasts([]);
      }, 2500);
    },
    [toasts]
  );

  const ToastItem = useCallback(
    ({ message, type }: ToastProps) => (
      <div
        className={classes.toast}
        style={{
          background: type === "error" ? "#C32127" : "#219653",
        }}
      >
        {message}
      </div>
    ),
    []
  );

  return (
    <>
      {toasts.map((toast, i) => (
        <ToastItem key={`TOAST_ITEM_${toast}_${i}`} {...toast} />
      ))}
    </>
  );
};

export default Toast;
