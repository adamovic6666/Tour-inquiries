"use client";

import { useEffect, useRef } from "react";
import { ACTIONS } from "@/app/_constants/index";
import { ModalDialogProps } from "@/app/_types";
import CloseIcon from "../svgs/CloseIcon";
import Button from "./Button";
import classes from "./ModalDialog.module.css";

const ModalDialog = ({
  children,
  onOk,
  onCancel,
  showModal,
}: ModalDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // show modal on showModal prop change
  useEffect(() => {
    if (dialogRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      showModal ? dialogRef.current.showModal() : dialogRef.current.close();
    }
  }, [showModal]);

  // on close modal
  const onCloseModalHandler = () => {
    if (dialogRef.current) dialogRef.current.close();
    onCancel();
  };

  // on click outside of dialog
  const onDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onCloseModalHandler();
  };

  // on click on OK button
  const handleOkClick = () => {
    onCloseModalHandler();
    onOk();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={onCloseModalHandler}
      className={classes.modalDialog}
      onClick={onDialogClick}
    >
      <div>
        <CloseIcon onClick={onCloseModalHandler} />
        <h4>{children}</h4>
        <Button onClick={handleOkClick}>{ACTIONS.OK}</Button>
      </div>
    </dialog>
  );
};

export default ModalDialog;
