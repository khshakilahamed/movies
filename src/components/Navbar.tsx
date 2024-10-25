import DarkModeToggle from "./DarkModeToggle";
import ComponentWrapper from "./shared/ComponentWrapper";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-600">
      <ComponentWrapper>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-5">
          <h2 className="text-3xl font-bold">Movies</h2>
          <DarkModeToggle />
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Navbar;
