"use client";
import React from "react";
import ModalDialog from "../UI/ModalDialog";
import { GuideDeletionProps } from "@/app/_types";
import { TEXT } from "@/app/_constants";
import { deleteGuideAction } from "@/app/_actions/delete-data";
import Portal from "../UI/Portal";
import { createToast } from "../UI/Toast";
import { withErrorHandling } from "@/app/_utils";

const DeleteGuide = ({
  showModal,
  onCancel,
  guideToDeleteId,
}: GuideDeletionProps) => {
  const deleteGuideHandler = withErrorHandling(async (id: string) => {
    const toast = await deleteGuideAction(id);
    createToast({ ...toast });
  });

  return (
    showModal && (
      <Portal>
        <ModalDialog
          showModal={showModal}
          onOk={() => guideToDeleteId && deleteGuideHandler(guideToDeleteId)}
          onCancel={onCancel}
        >
          {TEXT.DELETE_GUIDE_QUESTION}
        </ModalDialog>
      </Portal>
    )
  );
};

export default DeleteGuide;
