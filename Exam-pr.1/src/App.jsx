import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./parts/SignUp";
import Login from "./parts/Login";
import Add from "./parts/Add";
import View from "./parts/View";
import Edit from "./parts/Edit";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });

  const handleSignup = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleAddData = (newData) => {
    const updatedData = [...data, { ...newData, isActive: true }];
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  const handleDeleteData = (index) => {
    const updatedData = data.filter((item, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  const handleToggleStatus = (index) => {
    const updatedData = data.map((item, i) =>
      i === index ? { ...item, isActive: !item.isActive } : item
    );
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  const handleSaveData = (index, updatedData) => {
    const updatedDataList = data.map((item, i) => (i === index ? updatedData : item));
    setData(updatedDataList);
    localStorage.setItem("data", JSON.stringify(updatedDataList));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!user ? <Signup onSignup={handleSignup} onLogin={handleLogin} /> : <Navigate to="/add" />}
        />
        <Route
          path="/login"
          element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/add" />}
        />
        <Route
          path="/add"
          element={user ? <Add onAddData={handleAddData} /> : <Navigate to="/login" />}
        />
        <Route
          path="/view"
          element={user ? <View data={data} onDelete={handleDeleteData} onToggleStatus={handleToggleStatus} /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit"
          element={user ? <Edit onSaveData={handleSaveData} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
