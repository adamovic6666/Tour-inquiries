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

      const id = setTimeout(() => {
        setToasts([]);
      }, 3500);

      return () => {
        clearTimeout(id);
      };
    },
    [toasts]
  );

  const ToastItem = useCallback(
    ({ message, type }: ToastProps) => (
      <div
        className={classes.ToastItem}
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
    <div className={classes.ToastWrapper}>
      {toasts.map((toast, i) => (
        <ToastItem key={`TOAST_ITEM_${toast}_${i}`} {...toast} />
      ))}
    </div>
  );
};

export default Toast;
