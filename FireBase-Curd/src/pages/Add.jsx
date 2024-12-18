import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div
                        className="card shadow-lg border-0"
                        style={{ borderRadius: "15px", overflow: "hidden" }}
                    >
                        <div
                            className="card-header text-center text-white bg-primary"
                            style={{
                                borderBottom: "4px solid #444",
                            }}
                        >
                            <h2 className="fw-bold">Add New Record</h2>
                        </div>
                        <div
                            className="card-body"
                            style={{ backgroundColor: "#f8f9fa", padding: "2rem" }}
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label fw-bold">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control shadow-sm"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        placeholder="Enter your name"
                                        style={{ borderRadius: "10px" }}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="form-label fw-bold">
                                        Phone Number:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control shadow-sm"
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                        placeholder="Enter your phone number"
                                        style={{ borderRadius: "10px" }}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary text-white fw-bold"
                                        style={{
                                            borderRadius: "30px",
                                            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
                                        }}
                                    >
                                        Add Record
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div
                            className="card-footer text-center"
                            style={{
                                backgroundColor: "#ffffff",
                                borderTop: "1px solid #ddd",
                                padding: "1rem",
                            }}
                        >
                            <Link
                                to={`/`}
                                className="btn btn-link text-decoration-none"
                                style={{ fontWeight: "bold", color: "#0d6efd" }}
                            >
                                View Records
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;
