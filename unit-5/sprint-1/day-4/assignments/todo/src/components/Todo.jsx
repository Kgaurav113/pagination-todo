import React from 'react'
import { useState } from 'react'

export const Todo = () => {


    const[newtodo,setnewTodo]=useState([])
  return (
    <div>
<h1>Todo List</h1>
<input type="text" value={newtodo} onChange={(e)=>setnewTodo(e.target.value)}/>
<button onClick={()=>{let value=newtodo.trim();

if(value){
    onAdd(value);
    setn
}

}}></button>




    </div>
  )
}
