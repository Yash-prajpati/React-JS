import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import TodoApp from "./TodoItem";


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
