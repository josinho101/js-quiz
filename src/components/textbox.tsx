import clsx from "clsx";
import React from "react";

interface Props {
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextBox: React.FC<Props> = (props) => {
  const { className, placeholder, onChange, value } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx("textbox", className)}
    />
  );
};

export default TextBox;
