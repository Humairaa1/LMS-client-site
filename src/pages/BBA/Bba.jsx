import React from 'react'
import UseCategoryPageTitle from '../../Hooks/UseCategoryPageTitle'
import useLoadBooks from '../../Hooks/useLoadBooks';
import BooksCard from '../../components/BooksCard';

export default function Bba() {

  const [books,loading] = useLoadBooks();
  
       const bbaBooks = books.filter(book => book.category === 'BBA');

  return (
    <div>
      <UseCategoryPageTitle
        title="Bachelor of Business Administration (BBA)"
        subtitle=" Discover books on management, marketing, finance, and entrepreneurship for tomorrow's leaders."
      ></UseCategoryPageTitle>

      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
                  {loading 
                  ?
                  <span className="loading loading-bars loading-xl"></span>
                  :
                      bbaBooks.map(book=> <BooksCard key={book._id} book={book}></BooksCard>)
                  }
              </div>
    </div>
  )
}
