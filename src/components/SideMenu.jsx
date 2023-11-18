import { Link } from 'react-router-dom';
import { CATEGORIES } from '../const/menuCategories';
import { useState } from 'react';

const SideMenu = () => {
  const [open, setOpen] = useState(true);
  const toggleMenu = () => () => {
    setOpen(!open);
  };
  return (
    <aside
      className={`${open ? 'min-h-screen' : 'h-auto'} flex ${
        open ? 'bg-slate-600' : 'bg-transparent'
      } ${open ? 'text-white' : 'text-black'} ${
        open ? 'w-[275px]' : 'w-auto'
      } flex-col items-end`}
    >
      <p className='mx-4 cursor-pointer' onClick={toggleMenu()}>
        {open ? 'x' : '>'}
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

export default SideMenu;
