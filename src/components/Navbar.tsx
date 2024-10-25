import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
      return (
            <div className='bg-white dark:bg-gray-600'>
                  <div className='max-w-screen-xl mx-auto flex justify-between items-center py-5'>
                        <h2 className='text-3xl font-bold'>Movies</h2>
                        <input placeholder='Search here...' className='bg-background dark:bg-white placeholder:text-gray-600 outline-none py-3 px-5 rounded-full'/>
                        <DarkModeToggle />
                  </div>
            </div>
      );
};

export default Navbar;