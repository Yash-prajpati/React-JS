import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoApp from "./TodoApp";
import SignUp from "./SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/todos" element={<TodoApp />} />
      </Routes>
    </Router>
  );
};

export default App;
