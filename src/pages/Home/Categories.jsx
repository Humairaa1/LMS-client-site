import React, { useEffect, useState } from 'react'
import Category from './Category';

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    })

    return (
        <div className='w-8/12 mx-auto'>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold mb-2'>Explore by Department</h1>
                <p>Browse books and resources categorized by academic departments to find exactly what you need.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5'>
                {categories.map(category=> <Category
                 key={category.id}
                 category={category}
                 ></Category>)}
            </div>
        </div>
    )
}
