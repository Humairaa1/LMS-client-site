import React from 'react'

export default function Category({category}) {
  return (
    <div className='border-2 border-gray-300 rounded-md py-5 flex flex-col justify-center items-center'>
      <img className='w-[100px]' src={category.image} alt="category image" />
      <p className='text-center text-gray-500 font-semibold'>{category.category}</p>
    </div>
  )
}
