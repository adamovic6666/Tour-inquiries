import { ButtonProps } from "@/app/_types";

const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
