import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function View({ todos, removeTodo, clearTodos }) {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>

      <div className="list-group">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center">No todos available. Add some!</p>
        )}
      </div>

      {todos.length > 0 && (
        <div className="text-center mt-4">
          <button
            onClick={clearTodos}
            className="btn btn-danger btn-lg"
          >
            Clear List
          </button>
        </div>
      )}

      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary btn-lg"
        >
          Go to Add Todo
        </button>
      </div>
    </div>
  );
}

export default View;
