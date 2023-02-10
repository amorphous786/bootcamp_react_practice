import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import ListOfBooks from './ListOfBooks';
function AddBookForm() {

      const [title,setTitle] = useState("");
      const [author,setAuthor] = useState("");
      // const handleChangeTitle = (event) =>{
      //       setTitle(event.target.value);
      // }
      // const handleChangeAuthor = (event) =>{
      //       setAuthor(event.target.value);
      // }
      const addFunction =async (e)=>{
            e.preventDefault();
             await fetch("http://localhost:4000/books",{
                  method:"POST",
                   headers: {
                  'Content-Type': 'application/json'
                },
                 body: JSON.stringify({
                  title: title,
                  author: author
                })});
      }
  return (
      <>
            <Form onSubmit={addFunction}>
                  <Form.Group className="mb-3" controlId="book">
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" value={title} placeholder="Enter Book" onChange={e=>setTitle(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="author" >
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" value={author} placeholder="Author Name" onChange={e =>setAuthor(e.target.value)} />
                  </Form.Group>

                  <Button variant="primary" type="submit" >
                        Add
                  </Button>

            </Form>
      <ListOfBooks/>
    </>
  )
}

export default AddBookForm;