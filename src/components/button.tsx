import clsx from "clsx";
import React from "react";

interface Props {
  text: string;
  size?: "medium" | "large" | "small";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className={clsx("button", props.size)} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const defaultProps: Props = {
  text: "",
  size: "medium",
};

Button.defaultProps = defaultProps;

export default Button;
