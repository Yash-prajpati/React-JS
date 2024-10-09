import { useState } from "react";
import './App.css';

function App() {
  const [password, setPassword] = useState("");

  const handlePass = () => {

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
    }
    else if (password.length > 20) {
      alert("Password must be at most 20 characters long");
    }
    

  };

  return (
    <div className="login-screen">
      <form onSubmit={handlePass} className="login-form">
        <input 
          type="password" 
          placeholder="Enter password" 
          className="input-field"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default App;
