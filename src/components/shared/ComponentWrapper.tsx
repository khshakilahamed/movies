import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const ComponentWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const style = twMerge("max-w-screen-xl mx-auto px-2 xl:px-0", className);

  return <div className={style}>{children}</div>;
};

export default ComponentWrapper;
