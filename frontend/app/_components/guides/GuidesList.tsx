import { Guide } from "@/app/_types";
import classes from "./GuidesList.module.css";
import DeletIcon from "../svgs/DeletIcon";
import EditIcon from "../svgs/EditIcon";
import AddGuide from "./AddGuide";

const GuidesList = ({ guides }: { guides: Guide[] }) => {
  return (
    <>
      <ul className={classes.guideList}>
        {guides.map(({ id, firstName, lastName }: Guide) => (
          <li key={id}>
            <span className={classes.guideDetails}>
              {firstName} {lastName}
            </span>
            <span className={classes.guideActions}>
              <DeletIcon />
              <EditIcon />
            </span>
          </li>
        ))}
      </ul>
      <AddGuide />
    </>
  );
};

export default GuidesList;
