import React from 'react'
import {useState,useEffect} from 'react'

let users = [{
      name:"Luffy",
      age:19,
      title:"King Of Pirates"
},
{
      name:"Naruto",
      age:34,
      title:"Hokage"
},
{
      name:"Lelouch",
      age:20,
      title:"zero"
}]

function Friday2() {
     //first part commented
      // let users = [{
      //       name:"Luffy",
      //       age:19,
      //       title:"King Of Pirates"
      // },
      // {
      //       name:"Naruto",
      //       age:34,
      //       title:"Hokage"
      // },
      // {
      //       name:"Lelouch",
      //       age:20,
      //       title:"zero"
      // }]
      // return (
      //       <div>
      //         {data.map((item)=> {
      //                    return <div>
      //                                 <p style={{fontSize:'20px',fontFamily:"Helvetica"}}>{ item.name} </p>
      //                                 <p style={{fontSize:'16px'}}>{item.title}</p>
      //                           </div>
      //               })
      //         }
      //       </div>
      //     )
      // 2nd part of the hehe
      //   const [data,setData]= useState(users);
      //   return (
      //     <div>
      //       {data.map((item)=> {
      //                  return <div>
      //                               <p style={{fontSize:'20px',fontFamily:"Helvetica"}}>{ item.name} </p>
      //                               <p style={{fontSize:'16px'}}>{item.title}</p>
      //                         </div>
      //             })
      //       }
      //     </div>
      //   )
      //   lifecycle in react component hoho
      //   before 2019 there's only class based component and after that function based was here
      //   now class based is depriciated.
      //part 3 useEffects

      // const [data,setData]= useState(nil); gives error hehe check why
      // const [data,setData] = useState([]);
      // useEffect(()=>{
      //       setData(users);
      //       return ()=>{return "hehehe"}


      // },[]);
//       -->hook:provides lifecycle methods   useEffect(
//
//          )
//
//
//
//
//

      // return (
      // <div>
      // {data.map((item)=> {
      //             return <div>
      //                         <p style={{fontSize:'20px',fontFamily:"Helvetica"}}>{ item.name} </p>
      //                         <p style={{fontSize:'16px'}}>{item.title}</p>
      //                   </div>
      //       })
      // }
      // </div>
      // )

      // part 4 fetching data from API using fetch API.
      const [data, setData] = useState([])

      useEffect(async () => {
          const data = await fetch('https://jsonplaceholder.typicode.com/users');
          const json  = data.json

      //     debugger
          setData(json);

      }, [])
      return (
            <div>
            {data.map((item)=> {
                        return <div>
             <p style={{fontSize:'20px',fontFamily:"Helvetica"}}>{ item.name} </p>
                                    <p style={{fontSize:'16px'}}>{item.name}</p>
                              </div>
                  })
            }
            </div>
            )

}

export default Friday2