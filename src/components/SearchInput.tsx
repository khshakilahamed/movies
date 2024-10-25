const SearchInput = ({
  setSearchValue,
}: {
  setSearchValue: (value: string) => void;
}) => {
  return (
    <input
      placeholder="Search here..."
      onChange={(e) => setSearchValue(e.target.value)}
      className="bg-background bg-white border text-black placeholder:text-gray-600 outline-none py-2 px-5 rounded-full mb-10"
    />
  );
};

export default SearchInput;
