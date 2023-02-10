import {useState} from 'react'

function Welcome() {
            const [name, setName]= useState('lofi');
            const [count, setCount]=useState(1);
      return (
      <div>
      Welcome.<br/>
      {name}
      <br />
      {count}

      <button onClick={()=> setCount(count*2)}>multlipier</button>
    </div>
  )
}

export default Welcome