import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function BookDetails() {
    const book = useLoaderData();
    const { image, name, author, details, genre, link } = book;
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
                <p>{details}</p>
                <div className="card-actions gap-5">
                    <button className="btn btn-success text-white">Add to Read</button>
                    <a href={link} target='_blank' className="btn btn-success text-white">Download</a>
                </div>
            </div>
        </div>
    )
}
