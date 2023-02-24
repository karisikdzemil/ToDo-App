import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./style.css"
import { useState } from "react";
function App(props) {
  const [todo, setTodo] = useState([])
  const getItem = (item) =>{
    setTodo((prevState)=>{
     return  [...prevState, item]
    })
  }
  const getCompleted = (id) =>{
    console.log(id) 
  }
  return(
   <div className="main">
     <div className="parent">
    <h1 className="heading">ToDo list</h1>
      <AddTodo item={getItem}/>
      {todo && todo.map((todo, index) => (<TodoItem id={index} item={todo} completed={getCompleted}/>))}

    </div>
   </div>
  )
}

export default App;