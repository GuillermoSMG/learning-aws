import { useParams } from 'react-router-dom';
import { SideMenu } from './SideMenu';
import { Category } from './Category';

const CategoryPage = () => {
  const category = useParams();
  return (
    <main className='flex'>
      <SideMenu />
      <div className='w-full'>
      <Category categorys={category.name.split('-').join(' ')} />
      </div>
     
    </main>
  );
};

export default CategoryPage;
