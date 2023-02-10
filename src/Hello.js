import {useState} from 'react';

function Hello(){
      const [name,setName] = useState("EreH Yeager!");
      const [count,setCount] = useState(0);
      const [multi,setMulti] = useState(5);
      // var countee = count;
      return (
            <div>
                  Welcome!
                  {name}

            <p>{count} multiplier value {multi}</p>
            <button onClick={()=>{setCount(count+2);}}>Add </button>
            <button onClick={()=>{setMulti(5*count);}}>multiplier</button>
            <button onClick={()=>{setName('Bakhtawar');}}>Change name </button>
            </div>
      )
}
export default Hello;