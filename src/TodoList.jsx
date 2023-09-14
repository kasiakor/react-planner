/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({ todos }) {
  return (
    <ul className="list">
      {/* Short-circuit evaluation */}
      {todos.length === 0 && "Nothing to do"}
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
}
