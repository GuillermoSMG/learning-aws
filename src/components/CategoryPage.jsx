import { useParams } from 'react-router-dom';
import { SideMenu } from './SideMenu';

const CategoryPage = () => {
  const category = useParams();
  return (
    <main className='flex'>
      <SideMenu />
      <div className='w-full'>{category.name.split('-').join(' ')}</div>
    </main>
  );
};

export default CategoryPage;
