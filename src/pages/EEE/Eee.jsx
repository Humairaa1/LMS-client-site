import React from 'react'
import UseCategoryPageTitle from '../../Hooks/UseCategoryPageTitle'
import BooksCard from '../../components/BooksCard'
import useLoadBooks from '../../Hooks/useLoadBooks';

export default function Eee() {

  const [books,loading] = useLoadBooks();
  
       const eeeBooks = books.filter(book => book.category === 'EEE');

  return (
    <div>
      <UseCategoryPageTitle
        title="Electrical and Electronics Engineering (EEE)"
        subtitle="Delve into circuits, electromagnetics, control systems, and renewable energy technologies."
      ></UseCategoryPageTitle>

      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
        {loading
          ?
          <span className="loading loading-bars loading-xl text-center"></span>
          :
          eeeBooks.map(book => <BooksCard key={book._id} book={book}></BooksCard>)
        }
      </div>

    </div>
  )
}
