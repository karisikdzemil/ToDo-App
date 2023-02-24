import React from 'react'
import "../style.css"

export default function TodoItem(props) {
  return (
    <div className='AddTodoItem'>
      <input className='checkTodo' type="checkbox" onChange={()=>props.completed(props.id)} />
      <p className='TodoItem-p'>{props.item}</p>
    </div>
  )
}