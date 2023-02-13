import React from 'react'
import Table from 'react-bootstrap/Table';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import DeleteBook from './DeleteBook';
import Notification from './Notification';
function ListOfBooks({booksData}) {
  // [1,2,3,4,5]   arr.map((a)=>{return a*3})
  // const [bookId,setBookId] = useState("");
  const [books,setBooks] = useState([]);
  const [status,setStatus] = useState(false);

  const deleteFunction = async (id)=>{
    const res  = await axios.delete(`http://localhost:4000/book/${id}`).
                            then(res=>res.data).
                            catch(error=>console.log("eEron agya",error));
      setBooks(res);
      setStatus(true);
      setTimeout(()=>setStatus(false),1000);

  }

  useEffect(()=>{setBooks(booksData)},[booksData])
  return (<>
    {status && <Notification variant='danger' message='Deleted!' timeout={2000} />}
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
                        <td><Link className='btn-c' to={`/update/${book.id}`}>Update</Link></td>
                        <td><DeleteBook id={book.id} onDelete={deleteFunction} /></td>
                    </tr>)})}
      </tbody>
    </Table>
    </>
  )
}
export default ListOfBooks