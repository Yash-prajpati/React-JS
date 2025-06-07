import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmployeeList.css';

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
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column p-4">
      <h1 className="text-center mb-4 text-dark fw-bold">Employee Directory</h1>

      {employees.length === 0 ? (
        <div className="text-center mt-5">
          <h5 className="text-muted">No employees found. Add one to get started!</h5>
          <Link to="/add" className="btn btn-primary btn-lg mt-3">Add Employee</Link>
        </div>
      ) : (
        <div className="card shadow-lg border-0">
          <div className="card-body p-4">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Salary</th>
                    <th>Designation</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index} className="table-row-hover">
                      <td>{employee.emp_name}</td>
                      <td>{employee.emp_email}</td>
                      <td>{employee.emp_city}</td>
                      <td>${employee.emp_salary}</td>
                      <td>{employee.emp_designation}</td>
                      <td className="text-center">
                        <Link to={`/edit/${index}`} className="btn btn-warning btn-sm mx-1">
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteEmployee(index)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-4">
              <Link to="/add" className="btn btn-success btn-lg">
                Add New Employee
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
