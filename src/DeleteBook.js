import React from 'react'
import { Button } from 'react-bootstrap';
function DeleteBook({id,onDelete}) {


  return (

            <Button onClick={()=> onDelete(id)} variant='danger'>Remove</Button>
       )
}

export default DeleteBook