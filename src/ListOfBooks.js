import React from 'react'
import Table from 'react-bootstrap/Table';
import {useState,useEffect} from 'react';
function ListOfBooks() {
      const [books,setBooks] = useState([]);
      const fetchBooks = async ()=>{
            const response = await fetch("http://localhost:4000");
            const json_data = await response.json();

            setBooks(json_data);

      }
      useEffect(()=>{fetchBooks()},[]);

  return (
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Book Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book)=>{
            return (<tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>)})}
      </tbody>
    </Table>
  )
}

export default ListOfBooks