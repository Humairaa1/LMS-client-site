import React from 'react'
import UseCategoryPageTitle from '../../Hooks/UseCategoryPageTitle'
import useLoadBooks from '../../Hooks/useLoadBooks';
import BooksCard from '../../components/BooksCard';

export default function Civil() {
  const [books, loading] = useLoadBooks();

  const civilBooks = books.filter(book => book.category === 'Civil');
  return (
    <div>
      <UseCategoryPageTitle
        title="Civil Engineering"
        subtitle=" Explore resources on structural design, construction materials, and sustainable infrastructure."
      ></UseCategoryPageTitle>

      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
        {loading
          ?
          <span className="loading loading-bars loading-xl text-center"></span>
          :
          civilBooks.map(book => <BooksCard key={book._id} book={book}></BooksCard>)
        }
      </div>

    </div>
  )
}
