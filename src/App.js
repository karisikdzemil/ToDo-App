import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
function App(props) {
  
  return(
    <div>
      <AddTodo/>
      <TodoItem/>
    </div>
  )
}

export default App;