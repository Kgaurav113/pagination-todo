import React, { useEffect, useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const saveInfo = () => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
        iscompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodos([...todos, d]);
      });
  };
  useEffect(()=>{

    fetch("http://localhost:8080/posts")
    .then((r)=>r.json())
    .then((d)=>{
        setTodos(d);
        console.log(d)
    });
  },[]);
  return (
    <div>
        Todos
    <div>
      <input  value={newTodo} onChange={({target})=>setNewTodo(target.value)}/>
      <button onClick={saveInfo}>+</button>
    </div>
    {todos.map((todo)=>{
        return <div key={todo.id}>{todo.text}</div>



    })}
    </div>
  );
};
