import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            let { data } = await axios.get(`https://dummyjson.com/users`);
            setUsers(data.users);
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5" style={{ color: '#333', fontWeight: 'bold' }}>
                Api With Axios Method
            </h2>
            <div className="row">
                {users.map((user) => {
                    const { id, firstName, lastName, age, gender, email } = user;
                    return (
                        <div key={id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="card shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                                <div 
                                    className="card-body" 
                                    style={{
                                        backgroundColor: '#f8f9fa', 
                                        color: '#333', 
                                        borderRadius: '15px'
                                    }}
                                >
                                    <h4 className="card-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        {firstName} {lastName}
                                    </h4>
                                    <p className="card-text"><strong>Age:</strong> {age}</p>
                                    <p className="card-text"><strong>Gender:</strong> {gender}</p>
                                    <p className="card-text"><strong>Email:</strong> {email}</p>
                                    <div className="d-flex justify-content-between mt-3">
                                        
                                        <button 
                                            className="btn btn-outline-primary"
                                            style={{
                                                borderRadius: '5px', 
                                                padding: '8px 16px',
                                                fontWeight: '500',
                                            }}
                                        >
                                            Contact
                                        </button>
                                       
                                        <button 
                                            className="btn btn-outline-secondary"
                                            style={{
                                                borderRadius: '5px', 
                                                padding: '8px 16px',
                                                fontWeight: '500',
                                            }}
                                        >
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default App;
