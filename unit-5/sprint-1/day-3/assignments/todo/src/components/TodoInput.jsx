
import React from 'react'
import { useState } from 'react'
const TodoInput = () => {
    const[value,setvalue]=useState("")
  return (
    <div>
        <input type="text" placeholder="new todoitem"
        onChange={(e)=>{
            setvalue(e.target.value)
        }}/>
        <button onClick={()=>{
            console.log(value)
            // addtodo(value)
              setvalue("")
        }}>add</button>
    </div>
  )
}

export default TodoInput