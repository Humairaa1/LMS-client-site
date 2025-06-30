import React from 'react'
import UseBorrowBooks from '../Hooks/UseBorrowBooks';
import MyRequestList from './MyRequestList';

export default function MyRequest() {

    const [borrowedBooks,refetch] = UseBorrowBooks();

  return (
    <div className='max-w-5xl mx-auto mb-10'>
        <h1 className='text-4xl text-center font-bold my-10'>My Request</h1>

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                       
                        <th>Image</th>
                        <th>Name</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                {
                borrowedBooks.map(book=> <MyRequestList 
                    key={book._id}
                    book={book}
                    refetch={refetch}
                     ></MyRequestList>)
            }              
            </table>
        </div>

      
    </div>
  )
}
