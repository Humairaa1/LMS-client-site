import React from 'react'
import UseCategoryPageTitle from '../../Hooks/UseCategoryPageTitle'
import useLoadBooks from '../../Hooks/useLoadBooks';
import BooksCard from '../../components/BooksCard';

export default function Law() {

    const [books, loading] = useLoadBooks();

    const lawBooks = books.filter(book => book.category === 'Law');

    return (
        <div>
            <UseCategoryPageTitle
                title="Bachelor of Laws (LLB)"
                subtitle="Access a wide range of books on legal systems, case laws, ethics, and jurisprudence."
            ></UseCategoryPageTitle>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
                {loading
                    ?
                    <span className="loading loading-bars loading-xl text-center"></span>
                    :
                    lawBooks.map(book => <BooksCard key={book._id} book={book}></BooksCard>)
                }
            </div>

        </div>
    )
}
