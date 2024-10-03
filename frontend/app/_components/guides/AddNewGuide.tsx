import Input from "../UI/Input";
import classes from "./AddGuide.module.css";

const AddNewGuide = () => {
  return (
    <form className={classes.addGuide}>
      <div className={classes.addGuideInputElements}>
        <Input />
        <Input />
      </div>
      <button>Dodaj vodica</button>
    </form>
  );
};

export default AddNewGuide;
