import React from 'react';

export const Category = ({ labs, category }) => {
  return (
    <main className='w-screen justify-center'>
      <h2 className='text-black text-[2em]'>{category}</h2>
      <div>
        {labs.length > 0 ? (
          labs?.map(lab => (
            <article key={lab.id}>
              <h3>{lab.title}</h3>
              <p>{lab.description}</p>
            </article>
          ))
        ) : (
          <>Aun no hay labs</>
        )}
      </div>
    </main>
  );
};
