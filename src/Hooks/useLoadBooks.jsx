import React, { useEffect, useState } from 'react'

export default function useLoadBooks() {
    const [books,setBooks] = useState([]);
    const [loading, setLoading] = useState(true);  
    
         useEffect(()=>{
            fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
               setBooks(data);
               setLoading(false);
            })
            .catch(err => console.error(err));
         },[]);
  return [books, loading];
}
