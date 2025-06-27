import React, { useState } from 'react';
import BooksCard from '../../components/BooksCard';
import UseCategoryPageTitle from '../../Hooks/UseCategoryPageTitle'
import useLoadBooks from '../../Hooks/useLoadBooks';
import UseSearch from '../../Hooks/useSearch';

export default function Cse() {
    const [books, loading] = useLoadBooks();
    const [search, setSearch] = useState('');

    const cseBooks = books.filter(book => book.category === 'CSE');

    // Filter books by search term (case-insensitive)
    const filteredBooks = cseBooks.filter(book =>
        book.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <UseCategoryPageTitle
                title="Computer Science and Engineering (CSE)"
                subtitle="Dive into algorithms, software engineering, AI, and everything shaping the digital future."
            />

            {/* search  */}
            <UseSearch search={search} setSearch={setSearch}></UseSearch>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
                {loading
                    ? <span className="loading loading-bars loading-xl text-center"></span>
                    : filteredBooks.map(book => <BooksCard key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}
