import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import ComponentWrapper from "./shared/ComponentWrapper";
import { MdFavorite } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-600 sticky top-0 z-20">
      <ComponentWrapper>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-5">
          <Link href={"/"}>
            <h2 className="text-3xl font-bold">Movies</h2>
          </Link>

          <div className="flex items-center gap-1">
            <Link href={"/watch-list"} className="flex items-center border p-1" title="Watch List"><MdFavorite className="text-3xl text-red-500" /> <span className="text-xl hidden md:flex">Watch List</span></Link>
            <DarkModeToggle />
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Navbar;
