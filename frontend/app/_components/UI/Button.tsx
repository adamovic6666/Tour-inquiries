import { ButtonProps } from "@/app/_types";

const Button = ({ onClick, children, isPending }: ButtonProps) => {
  return (
    <button className={isPending ? "btn-pending" : ""} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
