import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function View() {
  const [records, setRecords] = useState([]);

    useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(storedRecords);
  }, []);

  return (
    <div>
      <Link to="/">Add</Link>

      <div className="container mt-5">
        <h2>Record List</h2>
        {records.length > 0 ? (
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
               
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                 
                  <td>{record.date}</td>
                  <td>{record.gender}</td>
                  <td>{record.course}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No records available.</p>
        )}
      </div>
    </div>
  );
}
