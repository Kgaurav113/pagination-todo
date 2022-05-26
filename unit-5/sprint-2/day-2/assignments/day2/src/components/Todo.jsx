import React from 'react'
import axios from 'axios';
import { useState ,useEffect} from 'react';

export const Todo = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [totalCount, setTotalCount] = useState(0);
    const [todos, setTodos] = React.useState([]);
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
        .then((r) => {
          setTodos(r.data);
          setTotalCount(Number(r.headers["x-total-count"]));
        });
    }, [page, limit]);
    return (
      <div className="App">
        <button disabled={page<=1} onClick={()=>setPage(page-1)}
  >{`<`}</button>
  <select onChange={(e)=>setLimit(Number(e.target.value))}>
  <option value={5}>5</option>
  <option value={10}>10</option>
  <option value={20}>20</option>
  </select>
  <button disabled={totalCount< page *5} onClick={()=>setPage(page-1)}>{`<`}</button>
       
        {todos.map((todo) => {
          
          return (
            <div key={todo.id}>
              {todo.id}
              {`:`}
              {todo.value}
            </div>
          );
        })}
        <button
          disable={page <= 1}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          {" "}
          {`<`}{" "}
        </button>
        <button onClick={() => setPage(page + 1)}>{">"}</button>
      </div>
    );
}
