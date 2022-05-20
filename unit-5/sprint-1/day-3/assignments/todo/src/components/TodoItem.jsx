import React from 'react'

const TodoItem = ({title,status,id}) => {
  return (
    <div>
      <h3>{`${title}`}</h3>
    </div>
  )
}

export default TodoItem;