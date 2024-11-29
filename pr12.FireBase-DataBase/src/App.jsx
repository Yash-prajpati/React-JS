import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import View from "./components/View";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Add addTodo={addTodo} />}
        />
        <Route
          path="/view"
          element={
            <View
              todos={todos}
              removeTodo={removeTodo}
              clearTodos={clearTodos}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
