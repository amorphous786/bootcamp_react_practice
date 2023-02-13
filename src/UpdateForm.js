import React from 'react'
import {Button,Form} from 'react-bootstrap';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Notification from './Notification';
function UpdateForm() {
      const [title,setTitle] = useState("");
      const [author,setAuthor] = useState("");
      const {id} = useParams();
      const [status,setStatus] = useState(false);
      const updateFunction = async ()=>{
            await axios.put(`http://localhost:4000/book/${id}`,{title:title,author:author})
            setStatus(true);
            setTimeout(()=>setStatus(false),1000);
      }
      return (
            <>

            <Form.Group className='m-3'>
             <Form.Label>Title</Form.Label>
               <Form.Control  type='text' onChange={e=>setTitle(e.target.value)} placeholder="Title" ></Form.Control>
               <Form.Label>Author</Form.Label>
               <Form.Control  type='text' onChange={e=>setAuthor(e.target.value)} placeholder="Author" ></Form.Control>
            </Form.Group>
               <Button onClick={updateFunction} className='m-3'>Update</Button>
               <NavLink to='/' className={"btn-c m-3"}>home</NavLink>
               {status && <Notification message="successfully updated!" variant="success" timeout={2000}></Notification>}
            </>
      )
}

export default UpdateForm;