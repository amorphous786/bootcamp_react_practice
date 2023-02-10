import React from 'react'
import {useEffect,useState} from 'react'
function File() {
      const arr = ["Grapes","SAary","Banana","Starweberry"]
      const [fruits,setFruits]= useState([])
      const dataFetcher = ()=>{
            setFruits(arr);
            // setFruits(arr);
            return ()=>{<p>Bye Bye</p>}
      }
      const is_iterable = 40;

      var sentence,thetha;
      // try{
      //       let x = 115/0;
      //       throw 34565
      //       sentence = " LORD ITACHI hhe"
      //       thetha = "I am genius";
      // }
      // catch (error){
      //       sentence = error
      //       thetha = "Abu ko bula kr lao mery sy ni hona!"
      // }
      // useEffect(dataFetcher(),)
      //
      //
      //1. componentDidMount
      //2. update --> if applicable
      //3. componentDidUnMount
      //
      //
      //
      // useEffect(dataFetcher(),[])
      return (
      <div>
            {fruits.map((obj)=>{return <p>obj</p>})}
      </div>
      )
}

export default File