import React from "react";

const TodoItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "10px",
        background: "#f9f9f9",
        borderRadius: "5px",
      }}
    >
      <div>
        <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.name}
        </h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Completed" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
