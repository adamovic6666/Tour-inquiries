"use client";
import { InputProps } from "@/app/_types";
import classes from "./Input.module.css";

const Input = ({ name, errors, ...props }: InputProps) => {
  return (
    <div className={classes.input}>
      <div className={classes.inputWrapper}>
        <input type="text" id={name} name={name} {...props} />
        {errors?.[name] && <span>{errors[name].message}</span>}
      </div>
    </div>
  );
};

export default Input;
