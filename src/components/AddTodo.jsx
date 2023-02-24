import React from "react";
import "../style.css";
import { useState } from "react";

export default function AddTodo(props) {
  const [item, setItem] = useState("");
  const handleChange = (event) => {
    setItem(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.item(item);
  };

  return (
    <form onSubmit={handleSubmit} className="AddTodo" method="post">
      <input
        className="AddTodoInput"
        value={item}
        onChange={handleChange}
        type="text"
        name="item"
        placeholder="Enter Todo"
      />
      <button type="submit" className="AddTodoButt">
        Add
      </button>
    </form>
  );
}
