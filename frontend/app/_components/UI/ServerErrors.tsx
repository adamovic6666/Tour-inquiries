import classes from "./ServerErrors.module.css";

const ServerErrors = ({ errors }: { errors: string[] }) => {
  return (
    <div className={classes.ServerErrors}>
      {errors.map((error, i) => (
        <span key={`ERROR_${i}`}>x {error}</span>
      ))}
    </div>
  );
};

export default ServerErrors;
