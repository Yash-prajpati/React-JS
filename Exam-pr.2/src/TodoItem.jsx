import React from "react";

const TodoItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "10px",
        background: "#f9f9f9",
        borderRadius: "5px",
      }}
    >
      <div>
        <h3 style={{ margin: "0", textDecoration: task.completed ? "line-through" : "none" }}>
          {task.name}
        </h3>
        <p style={{ margin: "0", color: "gray" }}>{task.description}</p>
      </div>
      <div>
        <button
          onClick={() => onToggleComplete(task.id)}
          style={{
            marginRight: "10px",
            background: task.completed ? "green" : "orange",
            color: "white",
            border: "none",
            borderRadius: "3px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          {task.completed ? "Completed" : "Complete"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          style={{
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "3px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
