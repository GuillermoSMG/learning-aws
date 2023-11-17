import React from 'react';
import SideMenu from '../components/SideMenu';

const Home = () => {
  return (
    <main className='flex'>
      <SideMenu />
      <div className='flex justify-center items-center w-full'>
        <img src='https://inforges.es/wp-content/uploads/2022/07/migracion-aws.png' />
      </div>
    </main>
  );
};

export default Home;
