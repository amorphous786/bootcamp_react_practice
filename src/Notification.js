import React from 'react'
import { useState,useEffect } from 'react'
import { Alert } from 'react-bootstrap';

function Notification({message,variant,timeout}) {
      const [show,setShow] = useState(true);
      useEffect(()=>{
            const timer = setTimeout(()=>setShow(false),timeout);
            return ()=>clearTimeout(timer);
      },[]);

  return (
            show && <Alert variant={variant} onClose={()=>setShow(false)} dismissible>{message}</Alert>
  )
}

export default Notification;