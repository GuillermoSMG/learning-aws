import React from 'react';
import { SideMenu } from '../components/SideMenu';

const Home = () => {
  return (
    <main className='flex min-h-screen bg-white dark:bg-[#242424] relative'>
      <SideMenu />
      <div className='flex justify-center items-center w-full blur'>
        <img
          src='https://media.discordapp.net/attachments/1152650302802104414/1176314158237622395/aws-removebg-preview.png?ex=656e6aee&is=655bf5ee&hm=1bd6fbd4d6eb4386c769b7d9841516c498b33f827bc338f15c53493546af17f5&='
          alt='AWS Logo'
          className=''
        />
      </div>
    </main>
  );
};

export default Home;
