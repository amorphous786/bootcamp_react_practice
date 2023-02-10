import {React,useEffect} from 'react'
import { useState } from 'react';

function PracticeB1() {
      const [data,setData]    = useState([]);
      const fetchData=async()=>{
            try{
                  const response = await fetch('https://jsonplaceholder.typicode.com/users')
                  var json = await response.json();
                  console.log("I am here")
                  console.log(json)
                  setData(json);
            }
            catch(e){
                  console.log(e)
            }
      };
      useEffect(()=>{
            fetchData();
      },[]);
      // return

  return (
    <div>
      <div>
            {data.map((obj)=>{
                  return(

            <h3>{obj.name}
            </h3>
                  )


      })}</div>

    </div>
  )
}

export default PracticeB1