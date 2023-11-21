import { useContext } from 'react';
import { themeContext } from './ThemeContext';
import { Moon, Sun } from '../icons/Icons';

const ThemeToggle = () => {
  const { theme, handleTheme } = useContext(themeContext);
  const icon = theme === 'dark' ? <Sun /> : <Moon />;

  return (
    <button onClick={handleTheme} className='text-xl mr-4'>
      {icon}
    </button>
  );
};

export default ThemeToggle;
