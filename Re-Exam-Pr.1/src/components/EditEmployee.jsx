import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddEmployee.css'; // Assuming shared styles for Add and Edit

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    emp_name: '',
    emp_email: '',
    emp_password: '',
    emp_city: '',
    emp_salary: '',
    emp_designation: '',
  });

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = employees[id];
    if (employee) setForm(employee);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((value) => value.trim() === '')) {
      alert('All fields are required!');
      return;
    }
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees[id] = form;
    localStorage.setItem('employees', JSON.stringify(employees));
    navigate('/');
  };

  const handleViewEmployees = () => {
    navigate('/');
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="card shadow-lg p-4 border-0 rounded" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4 text-primary fw-bold">Edit Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="emp_name"
              className="form-control"
              placeholder="Enter employee name"
              value={form.emp_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="emp_email"
              className="form-control"
              placeholder="Enter email address"
              value={form.emp_email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="emp_password"
              className="form-control"
              placeholder="Enter password"
              value={form.emp_password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              name="emp_city"
              className="form-control"
              placeholder="Enter city"
              value={form.emp_city}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              type="number"
              name="emp_salary"
              className="form-control"
              placeholder="Enter salary"
              value={form.emp_salary}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Designation</label>
            <input
              type="text"
              name="emp_designation"
              className="form-control"
              placeholder="Enter designation"
              value={form.emp_designation}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success btn-lg">
              Update Employee
            </button>
          </div>
        </form>
        <div className="d-grid mt-3">
          <button className="btn btn-secondary btn-lg" onClick={handleViewEmployees}>
            View All Employees
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
