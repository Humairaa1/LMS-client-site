import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


export default function BookDetails() {
    const book = useLoaderData();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { image, name, author, details, genre, link, quantity, _id } = book;

    const [requestSent, setRequestSent] = useState(false);


    const handleBorrowBook = (book) => {
        console.log('Borrowing book:', book);
        const bookRequest = {
            bookId: _id,
            email: user.email,
            image,
            name,
        }
        axiosSecure.post('/borrowBooks', bookRequest)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Request to borrow book sent successfully!');
                    setRequestSent(true);
                }
            })

    }

    return (
        <div className="card card-side bg-base-100 shadow-sm my-10 max-w-4xl mx-auto">
            <figure className='w-full flex-1/3'>
                <img
                    className='w-full'
                    src={image}
                    alt="Book" />
            </figure>
            <div className="card-body flex-2/3">
                <h2 className="card-title">{name}</h2>
                <p>Author : {author}</p>
                <p>Genre : {genre}</p>
                <p>Quantity : {quantity}</p>
                <p>{details}</p>
                <div className="card-actions gap-5">

                    {
                        quantity === 0
                            ? <button className='btn btn-disabled'>Not Available</button>
                            : requestSent
                                ? <button className='btn btn-info btn-disabled'>Request Sent</button>
                                : <button onClick={() => handleBorrowBook(book)} className="btn btn-success text-white">Add to Borrow</button>
                    }

                    <a href={link} target='_blank' className="btn btn-success text-white">Download</a>
                </div>
            </div>
        </div>
    )
}
