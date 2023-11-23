import React from 'react';
import LabCard from './LabCard';

export const Category = ({ labs, category }) => {
  return (
    <main className='w-screen justify-center'>
      <h2 className='text-black text-[2em]'>{category}</h2>
      <div>
        {labs.length > 0 ? (
          labs?.map(lab => <LabCard key={lab.id} lab={lab} />)
        ) : (
          <>Aun no hay labs</>
        )}
      </div>
    </main>
  );
};
