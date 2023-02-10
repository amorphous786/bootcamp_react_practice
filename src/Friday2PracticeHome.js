import React from 'react'
import {useState,useEffect} from 'react'
import "./style.css";
function Friday2PracticeHome() {

      const [data, setData] = useState([])
      const data_fetcher =async ()=>{
            try{
                  const data = await fetch("https://jsonplaceholder.typicode.com/users");

                  let x =await data.json();

                  setData(x);
            }
                catch (e){
                  console.log(e)
                }
            return ()=>{return <p>unmOunt</p>}
      }
      useEffect(() => {
            data_fetcher()
      }, [])
  return (
      <div className='cards'>
            <div className='name'>
                  <h4>Name</h4>
                  {data.map((object)=><div>{object.name} </div>)}
            </div>
            <div className="username">
                  <h4>Username</h4>
                  {data.map((object)=><div>{object.username} </div>)}
            </div>
            <div className="email">
                  <h4>Email</h4>
                  {data.map((object)=><div>{object.email} </div>)}
            </div>
            <div className='phone'>
                  <h4>Phone No</h4>
                  {data.map((object)=><div>{object.phone} </div>)}
            </div>
            <div className='website'>
                  <h4>Website</h4>
                  {data.map((object)=><div>{object.website} </div>)}
            </div>
      </div>

  )
}

export default Friday2PracticeHome;