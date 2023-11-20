import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className='flex w-full sticky top-0 z-50 justify-around md:justify-between h-20 items-center bg-white dark:bg-zinc-950 dark:text-white'>
      <div className='flex gap-4 justify-around md:justify-between w-full'>
        <Link className='dark:text-white ml-3' to='/'>
          <h1 className='text-4xl font-bold'>LAWS</h1>
        </Link>
        {/* <SearchBar /> */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
