// Add.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../parts/Add.css';

export default function Add() {
  const { state } = useLocation();  // Get the passed state (record and index)
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (state) {
      const { record } = state;  // Extract record from passed state
      setName(record.name);
      setEmail(record.email);
      setPass(record.pass);
      setDate(record.date);
      setGender(record.gender);
      setCourse(record.course);
      setStatus(record.status);
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { name, email, pass, date, gender, course, status };

    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    let updatedRecords;

    if (state) {
      // If editing, update the record at the passed index
      updatedRecords = storedRecords.map((record, index) =>
        index === state.index ? newRecord : record
      );
    } else {
      // If adding, add the new record
      updatedRecords = [...storedRecords, newRecord];
    }

    localStorage.setItem('records', JSON.stringify(updatedRecords));

    // Reset the form fields
    setName('');
    setEmail('');
    setPass('');
    setDate('');
    setGender('');
    setCourse('');
    setStatus('');

    alert(state ? 'Record updated successfully!' : 'Record added successfully!');
    navigate('/View');  // Navigate to View page after submission
  };

  return (
    <>
      <Link to="/View">View</Link>

      <section>
        <div className="container mt-5">
          <div className="card" style={{ backgroundColor: '#3c3c50', color: 'white', boxShadow: '0px 0px 4px 1px white', borderRadius: '10px' }}>
            <h2 className="card-title">{state ? 'Edit Record' : 'Add Record'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <h6 style={{ textAlign: 'left' }}>Name</h6>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" style={{ backgroundColor: '#5e5e6f', boxShadow: '0px 0px 5px 0px white', border: 'none', color: 'white' }} onChange={(e) => setName(e.target.value)} value={name} />
              </div>

              <div className="mb-3">
                <h6 style={{ textAlign: 'left' }}>Email</h6>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{ backgroundColor: '#5e5e6f', boxShadow: '0px 0px 5px 0px white', border: 'none', color: 'white' }} onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>

              <div className="mb-3">
                <h6 style={{ textAlign: 'left' }}>Password</h6>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" style={{ backgroundColor: '#5e5e6f', boxShadow: '0px 0px 5px 0px white', border: 'none', color: 'white' }} onChange={(e) => setPass(e.target.value)} value={pass} />
              </div>

              <div className="mb-3">
                <h6 style={{ textAlign: 'left' }}>Date of Birth</h6>
                <input type="date" className="form-control" id="date" style={{ backgroundColor: '#5e5e6f', boxShadow: '0px 0px 5px 0px white', border: 'none', color: 'white' }} onChange={(e) => setDate(e.target.value)} value={date} />
              </div>

              <div className="mb-3">
                <h6 style={{ textAlign: 'left' }}>Gender</h6>
                <select className="form-select" style={{ backgroundColor: '#5e5e6f', boxShadow: '0px 0px 5px 0px white', border: 'none', color: 'white' }} onChange={(e) => setGender(e.target.value)} value={gender}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <h6 style={{ textAlign: 'left' }}>Course</h6>
                <input type="text" className="form-control" id="course" placeholder="Enter your course" style={{ backgroundColor: '#5e5e6f', boxShadow: '0px 0px 5px 0px white', border: 'none', color: 'white' }} onChange={(e) => setCourse(e.target.value)} value={course} />
              </div>

              <div className="mb-3">
                <h6 style={{ textAlign: 'left' }}>Status</h6>
                <input type="text" className="form-control" id="status" placeholder="Enter your status" style={{ backgroundColor: '#5e5e6f', boxShadow: '0px 0px 5px 0px white', border: 'none', color: 'white' }} onChange={(e) => setStatus(e.target.value)} value={status} />
              </div>

              <button type="submit" className="btn btn-primary">{state ? 'Update' : 'Submit'}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
