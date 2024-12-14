import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './EmployeeList.css'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((_, index) => index !== id);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
  };

  return (
    <div className="container-fluid bg-black text-light min-vh-100 d-flex flex-column">
      
        <h1 className="text-center mb-4 text-primary">Employee List</h1>
        {employees.length === 0 ? (
          <p className="text-center">No employees found. Add one!</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-dark table-bordered table-striped mx-auto" >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Salary</th>
                  <th>Designation</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.emp_name}</td>
                    <td>{employee.emp_email}</td>
                    <td>{employee.emp_city}</td>
                    <td>{employee.emp_salary}</td>
                    <td>{employee.emp_designation}</td>
                    <td>
                      <Link to={`/edit/${index}`} className="btn btn-warning btn-sm mx-1">Edit</Link>
                      <button onClick={() => deleteEmployee(index)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <nav className="text-center mb-4">
          <Link to="/add" className="btn btn-primary btn-lg mx-2">Add Employee</Link>
        </nav>
      </div>
 
  );
};

export default EmployeeList;
