import "./styles.css";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  console.log(newItem);

  return (
    <>
      <form className="new-item-form">
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
      <h1 className="header">Planner</h1>
      <ul className="list">
        <li>
          <label>
            item 1
            <input type="checkbox" />
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            item 2
            <input type="checkbox" />
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
