import React from 'react'

export const Category = ({categorys}) => {
  
    return (
    <main className='flex flex-wrap justify-center'> 
   <h2 className='text-black text-[2em]'>{categorys}</h2>
   <div><h3 id='Title lab'></h3>
   <p id='Description'></p>
    <img src="" alt="" /></div>
    </main>
   
  )
}
