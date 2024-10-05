"use client";
import { Guide, GuidesListProps } from "@/app/_types";
import classes from "./GuidesList.module.css";
import AddNewGuide from "./AddNewGuide";
import DeleteGuide from "./DeleteGuide";
import { useState } from "react";
import { TEXT } from "@/app/_constants";
import GuideDetails from "./GuideDetails";

const GuidesList = ({ guides }: GuidesListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [guideToDeleteId, setGuideToDeleteId] = useState<string | null>(null);

  return (
    <>
      {guides.length > 0 ? (
        <ul className={classes.guideList}>
          {guides.map((guide: Guide) => (
            <GuideDetails
              key={guide.id}
              {...guide}
              onClick={(id: string) => {
                setGuideToDeleteId(
                  guides.find(({ id: guideId }) => guideId === id)
                    ?.documentId || null
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
        guideToDeleteId={guideToDeleteId}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
};

export default GuidesList;
