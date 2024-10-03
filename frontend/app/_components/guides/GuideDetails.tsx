import { Guide } from "@/app/_types";
import classes from "./Guide.module.css";
import DeleteIcon from "../svgs/DeleteIcon";
import EditIcon from "../svgs/EditSVG";

const GuideDetails = ({ id, firstName, lastName, onClick }: Guide) => {
  return (
    <li>
      <span className={classes.guideDetails}>
        {firstName} {lastName}
      </span>
      <span className={classes.guideActions}>
        <DeleteIcon itemId={id} onClick={onClick} />
        <EditIcon />
      </span>
    </li>
  );
};

export default GuideDetails;
