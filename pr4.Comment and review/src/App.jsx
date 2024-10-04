import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([{ name: "", email: "", salary: "" }]);

  const handleClick = () => {
    setData([...data, { name: "", email: "", salary: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const updatedData = [...data];
    updatedData[i][name] = value;
    setData(updatedData);
  };

  const handleCancel = (i) => {
    const updatedData = data.filter((_, index) => index !== i);
    setData(updatedData);
  };

  return (
    <div className="container">
      <h1 className="title">Dynamic Form</h1>
      <button className="add-button" onClick={handleClick}>
        ADD
      </button>
      {data.map((val, i) => (
        <div className="input-group" key={i}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={val.name}
              onChange={(e) => handleChange(e, i)}
              className="input-field"
              placeholder="Enter name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={val.email}
              onChange={(e) => handleChange(e, i)}
              className="input-field"
              placeholder="Enter email"
            />
          </label>
          <label>
            Salary:
            <input
              type="text"
              name="salary"
              value={val.salary}
              onChange={(e) => handleChange(e, i)}
              className="input-field"
              placeholder="Enter salary"
            />
          </label>
          <button className="cancel-button" onClick={() => handleCancel(i)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
