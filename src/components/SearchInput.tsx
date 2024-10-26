import { twMerge } from "tailwind-merge";
import Button from "./ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

type Inputs = {
  search: string;
};

const SearchInput = ({
  className,
  setSearchValue,
}: {
  className?: string;
  setSearchValue: (value: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSearchValue(data.search);
  };

  const searchValue = watch("search");

  useEffect(() => {
    if (!searchValue) {
      setSearchValue("");
    }
  }, [searchValue, setSearchValue]);

  const style = twMerge(
    "bg-background bg-white border text-black placeholder:text-gray-600 outline-none py-2 px-5 rounded-l-md",
    className
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-5 sticky top-24 z-10">
      <div>
        <input
          placeholder="Search here..."
          type="search"
          {...register("search", {
            // required: "Search term is require",
            minLength: { value: 3, message: "Minimum length is 3 characters" },
          })}
          className={style}
        />

        <Button
          type="submit"
          className="text-white bg-gray-600 dark:bg-gray-400 py-[9px] px-5 rounded-r-md"
        >
          Search
        </Button>
      </div>
      {errors.search && <span>{errors?.search?.message}</span>}
    </form>
  );
};

export default SearchInput;
