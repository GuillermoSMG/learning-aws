import { useParams } from 'react-router-dom';
import { SideMenu } from './SideMenu';
import { Category } from './Category';
import { useFilter } from '../hooks/useFilter';

const CategoryPage = () => {
  const { name } = useParams();
  const filteredLabs = useFilter(name);
  return (
    <main className='flex'>
      <SideMenu />
      <div className='w-full'>
        <Category labs={filteredLabs} category={name.split('-').join(' ')} />
      </div>
    </main>
  );
};

export default CategoryPage;
