import "./styles.css";

function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item </label>
          <input
            type="text"
            id="item" // onChange={handleChange}
          ></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Planner</h1>
      <ul className="list">
        <li>
          <label>
            item
            <input type="checkbox" />
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
