import React, { useState } from "react"
import "./app.css";

function App() {

  const [input, setInput] = useState([
    { name: ' ', phone: ' ' },

  ])

  const addMore = () => {
    let newFiled = { id: Math.floor(Math.random() * 10000), name: "", phone: "" }
    setInput([...input, newFiled])
  }
  const deleteRow = (id) => {
    let d = input.filter(val => val.id != id);
    setInput(d)
  }

  return (
    <>
      <div align="center" className="container">
        <h2>Dynamic-Form</h2>
        {
          input.map((item, index) => {
            return (
              <div key={++index}  className="form-row">
                Name:- <input type="text" value={name}/> &nbsp;
                Phone:- <input type="text"  value={phone} />
                {
                  index === 0 ? (
                    " "
                  ):(
                    <button onClick={ ()=> deleteRow(item.id)} className="delete-btn">X</button>
                  )
                }
              </div>

            )
          })
        }
        <br></br><br></br>
        <button onClick={() => addMore()} className="add-btn">Add</button>

      </div>
    </>
  )
}

export default App
