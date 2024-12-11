import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const db = getFirestore(app);

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "users"), {
                name: name,
                phone: phone,
            });
            alert("Record added successfully.");
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Add User</h2>
                            <form onSubmit={handlesubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                    <Link to="/Table" className="btn btn-secondary">
                                        View Records
                                    </Link>
                                    <Link to="/" className="btn pt-4">
                                        Login Page
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
