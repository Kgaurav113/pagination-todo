

import React, { useState } from 'react'
import TodoItem from './TodoItem'
import {v4 as uuid} from "uuid"
const Todo = () => {
const [query,setquery]=useState("")
const [task,settask]=useState([])
const handlechange =(e)=>{
    const {value}=e.target;
    setquery(value)
}
const handleadd=()=>{
    const payload={
      id:uuid(),
    title:query,
    status:false
    };
    let newtask=[...task,payload]
    settask(newtask)
}
  return (
    <>
    <h1>Task</h1>
    <input value={query} 
    onChange={handlechange}
    placeholder='add something'/>
    <button onClick={handleadd}>ADD</button>
    <div>
        {task.map((item,index)=>{
            return <TodoItem color={"red"} {...item}/>
        })}

    </div>
    <input type="checkbox"/>
    </>
  )
}

export default Todo