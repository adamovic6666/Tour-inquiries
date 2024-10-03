"use client";
import React from "react";
import ModalDialog from "../UI/ModalDialog";
import { GuideDeletionProps } from "@/app/_types";
import { TEXT } from "@/app/_utils";
import { deleteGuideAction } from "@/app/_actions/delete-data";

const DeleteGuide = ({
  guideToDelete,
  showModal,
  onCancel,
}: GuideDeletionProps) => {
  return (
    showModal && (
      <ModalDialog
        onOk={() =>
          guideToDelete && deleteGuideAction(guideToDelete.documentId)
        }
        onCancel={onCancel}
      >
        {TEXT.DELETE_GUIDE}
        <br />
        {guideToDelete?.firstName} {guideToDelete?.lastName}?
      </ModalDialog>
    )
  );
};

export default DeleteGuide;
