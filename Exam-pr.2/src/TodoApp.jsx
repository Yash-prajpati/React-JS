import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = () => {
    if (taskName.trim() && taskDescription.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), name: taskName, description: taskDescription, completed: false },
      ]);
      setTaskName("");
      setTaskDescription("");
    }
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoApp;
