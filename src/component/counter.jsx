import React,{useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const act =() =>{
        setCount(count+1)
    }
  return (
    <div>
      <div className='wrap' >
      <div className='card' >
        <h1>{count}</h1><br/>
        <button onClick={act}>+</button><br></br>
        <a href='sur'> <button >go</button></a>
        </div>
        </div>
    </div>
  )
}

export default Counter