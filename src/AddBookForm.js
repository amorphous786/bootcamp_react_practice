import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import ListOfBooks from './ListOfBooks';
import axios from 'axios';
function AddBookForm() {

      const [title,setTitle] = useState("");
      const [author,setAuthor] = useState("");
      const [books,setBooks]=useState([]);
      const addFunction =async (e)=>{
            e.preventDefault();
            const res =  await fetch("http://localhost:4000/books",{
                  method:"POST",
                   headers: {
                  'Content-Type': 'application/json'
                },
                 body: JSON.stringify({
                  title: title,
                  author: author
                })}).then(res => res.json()).catch(error => {console.log("Got some issue",error)});
            //     [{...},{...},{...}...]
            setBooks(res);

      }

      const booksFunction = async ()=>{
            // const response = await axios.get("http://localhost:4000").then(
            //                                     response => response.json())
            //                                     .catch(
            //                                     error => {console.log(error)})
            // setBooks(response);
            const res = await fetch("http://localhost:4000/").
                              then(res => res.json()).
                              catch(error => {console.log("error agay",error)})
                  setBooks(res);
      }
      useEffect(()=>{booksFunction()},[])
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
      <ListOfBooks booksData={books}/>
    </>
  )
}

export default AddBookForm;