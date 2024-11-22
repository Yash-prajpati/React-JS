import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Add() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        let id = Math.floor(Math.random() * 100000);
        set(ref(db, `users/${id}`), {
            name: name,
            phone: phone,
        });
        alert("Record added successfully!");
        setName("");
        setPhone("");
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ width: "25rem" }}>
                <h2 className="card-title text-center text-primary mb-4">Add Record</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                            type="number"
                            id="phone"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
                <div className="text-center mt-3">
                    <Link to="/" className="text-decoration-none text-secondary">
                        View Records
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Add;
