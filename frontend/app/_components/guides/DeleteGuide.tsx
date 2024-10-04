"use client";
import React from "react";
import ModalDialog from "../UI/ModalDialog";
import { GuideDeletionProps } from "@/app/_types";
import { TEXT } from "@/app/_utils";
import { deleteGuideAction } from "@/app/_actions/delete-data";
import Portal from "../UI/Portal";

const DeleteGuide = ({
  showModal,
  onCancel,
  guideToDeleteId,
}: GuideDeletionProps) => {
  return (
    showModal && (
      <Portal>
        <ModalDialog
          showModal={showModal}
          onOk={() => guideToDeleteId && deleteGuideAction(guideToDeleteId)}
          onCancel={onCancel}
        >
          {TEXT.DELETE_GUIDE_QUESTION}
        </ModalDialog>
      </Portal>
    )
  );
};

export default DeleteGuide;
