import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
}

const Card: React.FC<Props> = (props) => {
  return <div className={clsx("card", props.className)}>{props.children}</div>;
};

export default Card;
