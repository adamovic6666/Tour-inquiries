"use client";
import { Guide, GuidesListProps } from "@/app/_types";
import classes from "./GuidesList.module.css";
import AddNewGuide from "./AddNewGuide";
import DeleteGuide from "./DeleteGuide";
import { useState } from "react";
import { TEXT } from "@/app/_utils";
import GuideDetails from "./GuideDetails";

const GuidesList = ({ guides }: GuidesListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [guideToDelete, setGuideToDelete] = useState<Guide | null>(null);

  return (
    <>
      {guides.length > 0 ? (
        <ul className={classes.guideList}>
          {guides.map((guide: Guide) => (
            <GuideDetails
              key={guide.id}
              {...guide}
              onClick={(id: string) => {
                setGuideToDelete(
                  guides.find(({ id: guideId }) => guideId === id) || null
                );
                setShowModal(true);
              }}
            />
          ))}
        </ul>
      ) : (
        <p className={classes.guideListEmpty}>{TEXT.NO_GUIDES_FOUND}</p>
      )}
      {/* GUIDE ADD */}
      <AddNewGuide />
      {/* GUIDE DELETION */}
      <DeleteGuide
        showModal={showModal}
        guideToDelete={guideToDelete}
        onCancel={() => {
          setShowModal(false);
          setGuideToDelete(null);
        }}
      />
    </>
  );
};

export default GuidesList;
