import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function Add({ addTodo }) {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // For input error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      setIsLoading(true);
      setError(""); // Clear error message
      try {
        await addTodo(text); // Assuming addTodo might be async
        setText(""); // Clear input
        navigate("/view"); // Navigate to the View page after adding
      } catch (err) {
        setError("Something went wrong. Please try again!");
      } finally {
        setIsLoading(false); // Reset loading state
      }
    } else {
      setError("Please enter a todo!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="text-center mb-4">Add Todo</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a Todo..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : null}
            {isLoading ? " Adding..." : "Add Todo"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
