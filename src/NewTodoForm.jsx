/* eslint-disable react/prop-types */
import { useState } from "react";

export function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item </label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
