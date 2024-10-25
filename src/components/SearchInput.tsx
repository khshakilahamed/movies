import { twMerge } from "tailwind-merge";

const SearchInput = ({
  className,
  setSearchValue,
}: {
  className?: string;
  setSearchValue: (value: string) => void;
}) => {
  const style = twMerge('bg-background bg-white border text-black placeholder:text-gray-600 outline-none py-2 px-5 rounded-full mb-5', className)
  return (
    <input
      placeholder="Search here..."
      onChange={(e) => setSearchValue(e.target.value)}
      className={style}
    />
  );
};

export default SearchInput;
