import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [budget, setBudget] = useState(0); // State for budget
  const [expenses, setExpenses] = useState([]); // State for expenses
  const [title, setTitle] = useState(""); // State for expense title
  const [expenseAmount, setExpenseAmount] = useState(""); // State for expense amount
  const [budgetInput, setBudgetInput] = useState(""); // State for budget input

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = budget - totalExpenses;

  const handleSetBudget = (e) => {
    e.preventDefault();
    if (budgetInput > 0) {
      setBudget(Number(budgetInput));
      setBudgetInput("");
    }
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (title && expenseAmount > 0) {
      setExpenses([...expenses, { id: Date.now(), title, amount: Number(expenseAmount) }]);
      setTitle("");
      setExpenseAmount("");
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container">
      <h1>Budget Tracker</h1>

      {/* Budget Section */}
      <div className="budget-section">
        <form onSubmit={handleSetBudget}>
          <h2>Budget</h2>
          <input
            type="number"
            placeholder="Enter Total Amount"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
          />
          <button type="submit">Set Budget</button>
        </form>
      </div>

      {/* Expense Section */}
      <div className="expense-section">
        <form onSubmit={handleAddExpense}>
          <h2>Expenses</h2>
          <input
            type="text"
            placeholder="Enter Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="summary-card">
          <h3>Total Budget</h3>
          <p>${budget}</p>
        </div>
        <div className="summary-card">
          <h3>Expenses</h3>
          <p>${totalExpenses}</p>
        </div>
        <div className="summary-card">
          <h3>Balance</h3>
          <p>${balance}</p>
        </div>
      </div>

      {/* Expense List */}
      <div className="expense-list">
        <h2>Expense List</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>${expense.amount}</span>
              <button onClick={() => handleDeleteExpense(expense.id)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
