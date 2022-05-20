import React, { useState } from 'react'
import './App.css';

function App() {

const[Item,SetItem]=useState("")
const[List,SetList]=useState([])


const itemEvent=(event)=>{
SetItem(event.target.value);
};

const listofItem=(event)=>{
  SetList((olditem)=>{
    return [...olditem,Item]
  });
SetItem('')
};

const sdelete=(event)=>{
  return SetList("")
}


  return (
   <>
   <div className='main_div'>
<div className='center_div'>
<br/>
<h1>Todo list</h1>
<br/>
<input type="text" placeholder='Add item' value={Item}
onChange={itemEvent}></input>
<button onClick={listofItem}>Add</button>
<button onClick={sdelete}>delete</button>
</div>
   </div>
   <ol>
     {List.map((itemval) =>{
return <li>{itemval}</li>
     })}
   </ol>
   </>
  );
}

export default App;