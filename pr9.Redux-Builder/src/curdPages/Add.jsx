import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/Action/curdActions';
import { Link, useNavigate } from 'react-router-dom';

function Add() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fileHandling = (e) => {
        e.preventDefault();
        if (!name || !phone) {
            alert('All fields are required!');
            return false;
        }

        let obj = {
            id: Math.floor(Math.random() * 1000000),
            name: name,
            phone: phone,
        };

        dispatch(addUser(obj));
        navigate('/');
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
        form: {
            border: '1px solid #444', // Subtle border
            borderRadius: '8px',
            padding: '20px',
            width: '300px',
            backgroundColor: '#1E1E1E', // Form background
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Darker shadow
        },
        input: {
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '4px',
            border: '1px solid #555', // Subtle border
            backgroundColor: '#2C2C2C', // Dark input background
            color: '#fff', // Light text
        },
        button: {
            backgroundColor: '#4CAF50', // Green for submit
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        buttonHover: {
            backgroundColor: '#45A049',
        },
        link: {
            textDecoration: 'none',
            color: '#4CC9F0', // Bright link color
            marginTop: '10px',
            display: 'block',
        },
    };

    return (
        <div style={styles.container}>
            <h1>Add Notes</h1>
            <form style={styles.form} onSubmit={fileHandling}>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    style={styles.input}
                    type="text"
                    placeholder="Write notes"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
                <button style={styles.button} type="submit">
                    Add Note
                </button>
            </form>
            <Link style={styles.link} to={'/'}>
                View Notes
            </Link>
        </div>
    );
}

export default Add;
