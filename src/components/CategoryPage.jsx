import { useParams } from 'react-router-dom';
import SideMenu from './SideMenu';

const CategoryPage = () => {
  const category = useParams();
  return (
    <main className='flex'>
      <SideMenu />
      <div className='w-full'>{category.name}</div>
    </main>
  );
};

export default CategoryPage;
