import React from 'react';
import { SideMenu } from '../components/SideMenu';

const Home = () => {
  return (
    <main className='flex min-h-full'>
      <SideMenu />
      <div className='flex justify-center items-center w-full'></div>
    </main>
  );
};

export default Home;
