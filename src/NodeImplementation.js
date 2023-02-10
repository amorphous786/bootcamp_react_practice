import React from 'react'
import { useState,useEffect } from 'react';

function NodeImplementation() {
      const [data,setData] = useState([]);
      const fetchData = async ()=>{
            const response = await fetch("http://localhost:4000/books/")
            const result = await response.json()

            setData(result);
      }
      useEffect(()=>{
            fetchData();
      },[])

    return (
    <div>
            {/* {} */}
    </div>
  )
}

export default NodeImplementation