import { Children, ReactNode } from "react";

interface ShowProps {
  children: ReactNode;
  isTrue?: boolean;
  isFalse?: boolean;
  render?: ReactNode;
}

const Show = ({ children, isTrue, isFalse, render }: ShowProps) => {
  let when = null;
  let otherwise = null;

  if (isTrue) {
    when = children;
    return when;
  } else if (isFalse) {
    otherwise = children;
    return otherwise;
  } else if (render) {
    when = render;
    return when;
  } else {
    throw new Error("You need to pass a condition to Show");
  }
};

export default Show;
