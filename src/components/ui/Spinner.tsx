import { ImSpinner9 } from "react-icons/im";
import { twMerge } from "tailwind-merge";

const Spinner = ({ className }: { className?: string }) => {
  const style = twMerge("animate-spin w-full text-center text-3xl", className);
  return <ImSpinner9 className={style} />;
};

export default Spinner;
