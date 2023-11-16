import React from 'react';
import SideMenu from '../components/SideMenu';

const Home = () => {
  return (
    <main className='flex'>
      <SideMenu />
      <div className='flex justify-center items-center w-full'>
        <h2>Home</h2>
      </div>
    </main>
  );
};

export default Home;
