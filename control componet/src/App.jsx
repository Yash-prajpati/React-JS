import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlebar = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
  }

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #121212;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          .form-container {
            background-color: #1e1e1e;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
            padding: 30px;
            width: 400px;
            text-align: center;
          }

          h2 {
            margin-bottom: 20px;
            color: #ffffff;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          input {
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #444;
            border-radius: 6px;
            background-color: #2c2c2c;
            color: #ffffff;
            transition: border-color 0.3s;
          }

          input::placeholder {
            color: #aaa;
          }

          input:focus {
            border-color: #bb86fc;
            outline: none;
          }

          .button-container {
            margin-top: 20px;
          }

          button {
            padding: 12px;
            background-color: #bb86fc;
            color: #fff;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
          }

          button:hover {
            background-color: #3700b3;
          }
        `}
      </style>
      <div className="form-container">
        <h2>FORM</h2>
        <form onSubmit={handlebar}>
          <input 
            onChange={(e) => setName(e.target.value)} 
            type="text" 
            placeholder='Your Name' 
          />
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder='Your Email' 
          />
          <div className="button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
