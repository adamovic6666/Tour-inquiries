"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import classes from "./ModalDialog.module.css";
import { ACTIONS } from "@/app/_utils";
import { ModalDialogProps } from "@/app/_types";

const ModalDialog = ({ children, onOk, onCancel }: ModalDialogProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const onCloseModalHandler = () => {
    setMounted(false);
    onCancel();
  };

  return mounted
    ? createPortal(
        <dialog className={classes.modalDialog} onClick={onCloseModalHandler}>
          <div onClick={(event) => event.stopPropagation()}>
            {children}
            <div className={classes.modalActions}>
              <button
                className={classes.modalButtonCancel}
                onClick={onCloseModalHandler}
              >
                {ACTIONS.CANCEL}
              </button>
              <button
                className={classes.modalButtonOk}
                onClick={() => {
                  onCloseModalHandler();
                  onOk();
                }}
              >
                {ACTIONS.OK}
              </button>
            </div>
          </div>
        </dialog>,
        document?.getElementById("portal") as HTMLElement
      )
    : null;
};

export default ModalDialog;
