import React, { useEffect, useState } from 'react'

export default function useLoadBooks() {
    const [books,setBooks] = useState([]);
    
         useEffect(()=>{
            fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.error(err));
         },[]);
  return books;
}
