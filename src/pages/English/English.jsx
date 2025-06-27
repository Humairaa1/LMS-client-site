import React from 'react'
import UseCategoryPageTitle from '../../Hooks/UseCategoryPageTitle'
import useLoadBooks from '../../Hooks/useLoadBooks';
import BooksCard from '../../components/BooksCard';

export default function English() {

  const [books, loading] = useLoadBooks();

  const englishBooks = books.filter(book => book.category === 'English');

  return (
    <div>
      <UseCategoryPageTitle
        title="Bachelor of Arts in English"
        subtitle="Journey through classic literature, modern prose, linguistics, and creative writing."
      ></UseCategoryPageTitle>

      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
        {loading
          ?
          <span className="loading loading-bars loading-xl text-center"></span>
          :
          englishBooks.map(book => <BooksCard key={book._id} book={book}></BooksCard>)
        }
      </div>

    </div>
  )
}
