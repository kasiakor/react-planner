/* eslint-disable react/prop-types */
export function TodoList({ todos }) {
  return (
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
                //   onChange={(e) => toggleCheck(todo.id, e.target.checked)}
              />
            </label>
            <button
              // onClick={() => handleDelete(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
