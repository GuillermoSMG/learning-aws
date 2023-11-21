import { Link } from 'react-router-dom';
import { CATEGORIES } from '../const/menuCategories';
import { useContext, useState } from 'react';
import { ArrowRight } from '../icons/Icons';
import { themeContext } from './ThemeContext';

export const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(themeContext);
  const toggleMenu = () => () => {
    setOpen(!open);
  };
  return (
    <aside
      className={`${open ? 'h-full' : 'h-auto'} flex ${
        open ? 'bg-slate-600' : 'bg-transparent'
      } ${open ? 'text-white' : 'text-black'} ${
        open ? 'w-[275px]' : 'w-auto'
      } flex-col items-end
      relative`}
    >
      <p className='mx-4 cursor-pointer' onClick={toggleMenu()}>
        {open ? (
          'x'
        ) : (
          <ArrowRight color={theme === 'light' ? '#000' : '#fff'} />
        )}
      </p>
      {open && (
        <nav>
          <ul className='flex flex-col gap-2 mx-2'>
            {CATEGORIES.map((cat, i) => (
              <Link
                key={i}
                className='hover:bg-orange-300 block cursor-pointer text-lg ml-1'
                to={`/category/${cat.split(' ').join('-').toLocaleLowerCase()}`}
              >
                {cat}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
};
