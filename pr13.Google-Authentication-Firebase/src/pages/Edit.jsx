import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [editid, setEditId] = useState("");

    const db = getFirestore(app);

    useEffect(() => {
        if (location?.state) {
            setName(location.state.name || "");
            setPhone(location.state.phone || "");
            setEditId(location.state.id || "");
        }
    }, [location?.state]);

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const user = doc(db, `users/${editid}`);
            await updateDoc(user, {
                name: name,
                phone: phone,
            });
            alert("Record updated successfully.");
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
                            <h2 className="text-center mb-4">Edit User</h2>
                            <form onSubmit={handlesubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter name"
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
                                        placeholder="Enter phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
                                        Update
                                    </button>
                                    <Link to="/Table" className="btn btn-secondary">
                                        View Records
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

export default Edit;
