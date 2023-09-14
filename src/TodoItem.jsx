/* eslint-disable react/prop-types */
export function TodoItem({ id, completed, title }) {
  return (
    <li key={id}>
      <label>
        {title}
        <input
          type="checkbox"
          checked={completed}
          //   onChange={(e) => toggleCheck(id, e.target.checked)}
        />
      </label>
      <button
        // onClick={() => handleDelete(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
