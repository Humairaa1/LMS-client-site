
import BooksCard from '../../components/BooksCard';
import UseCategoryPageTitle from '../../Hooks/UseCategoryPageTitle'
import useLoadBooks from '../../Hooks/useLoadBooks';

export default function Cse() {

    const [books,loading] = useLoadBooks();

     const cseBooks = books.filter(book => book.category === 'CSE');


  return (
    <div>
        <UseCategoryPageTitle 
        title="Computer Science and Engineering (CSE)"
        subtitle="Dive into algorithms, software engineering, AI, and everything shaping the digital future."
        ></UseCategoryPageTitle>

        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
            {loading 
            ?
            <span className="loading loading-bars loading-xl text-center"></span>
            :
                cseBooks.map(book=> <BooksCard key={book._id} book={book}></BooksCard>)
            }
        </div>
    </div>
  )
}
