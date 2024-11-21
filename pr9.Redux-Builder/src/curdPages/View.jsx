import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletUser } from '../Redux/Action/curdActions';
import Table from 'react-bootstrap/Table';

function View() {
  const user = useSelector((state) => state.curd.userData);
  const dispatch = useDispatch();

  const deletDate = (id) => {
    dispatch(deletUser(id));
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      marginTop: '50px',
      backgroundColor: '#121212', // Dark background
      color: '#ffffff', // Light text color
      minHeight: '100vh',
      padding: '20px',
    },
    table: {
      width: '80%',
      margin: '20px 0',
      borderCollapse: 'collapse',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      backgroundColor: '#1E1E1E', // Dark table background
    },
    th: {
      backgroundColor: '#333333', // Slightly lighter header background
      color: '#ffffff',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #444444', // Subtle border for rows
      color: '#dddddd',
    },
    button: {
      backgroundColor: '#E63946', // Red button for delete
      color: 'white',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    link: {
      textDecoration: 'none',
      color: '#4CC9F0', // Bright link color for dark mode
      fontSize: '16px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>View Notes</h1>
      <Table striped bordered hover size="sm" style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Id</th>
            <th style={styles.th}>Notes</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((val) => (
            <tr key={val.id}>
              <td style={styles.td}>{val.name}</td>
              <td style={styles.td}>{val.phone}</td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => deletDate(val.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/Add" style={styles.link}>
        Add Notes
      </Link>
    </div>
  );
}

export default View;
