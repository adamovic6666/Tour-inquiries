import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.input}>
      <label htmlFor="firstName">Ime</label>
      <input type="text" id="firstName" />
    </div>
  );
};

export default Input;
