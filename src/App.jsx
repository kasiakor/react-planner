import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleCheck = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
    <NewTodoForm />
      <h1 className="header">Planner</h1>
      <ul className="list">
        {/* Short-circuit evaluation */}
        {todos.length === 0 && "Nothing to do"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                {todo.title}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleCheck(todo.id, e.target.checked)}
                />
              </label>
              <button
                onClick={() => handleDelete(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
