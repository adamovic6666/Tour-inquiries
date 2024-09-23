"use client";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./AddGuide.module.css";

const AddGuide = () => {
  return (
    <form className={classes.addGuide}>
      <div className={classes.addGuideInputElements}>
        <Input />
        <Input />
      </div>
      <Button onClick={() => {}}>Dodaj vodica</Button>
    </form>
  );
};

export default AddGuide;
