import React, { useState } from 'react'
import UseCategoryPageTitle from '../../Hooks/UseCategoryPageTitle'
import useLoadBooks from '../../Hooks/useLoadBooks';
import BooksCard from '../../components/BooksCard';
import UseSearch from '../../Hooks/useSearch';

export default function Civil() {
  const [books, loading] = useLoadBooks();
  const [search, setSearch] = useState('');

  const civilBooks = books.filter(book => book.category === 'Civil');
  // Filter books by search term (case-insensitive)
  const filteredBooks = civilBooks.filter(book =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <UseCategoryPageTitle
        title="Civil Engineering"
        subtitle=" Explore resources on structural design, construction materials, and sustainable infrastructure."
      ></UseCategoryPageTitle>

      {/* search  */}
      <UseSearch search={search} setSearch={setSearch}></UseSearch>

      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
        {loading
          ?
          <span className="loading loading-bars loading-xl text-center"></span>
          :
          filteredBooks.map(book => <BooksCard key={book._id} book={book}></BooksCard>)
        }
      </div>

    </div>
  )
}
