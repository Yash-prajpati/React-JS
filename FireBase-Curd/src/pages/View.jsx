import { getDatabase, onValue, ref, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import "bootstrap/dist/css/bootstrap.min.css";

const View = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState("");

    const db = getDatabase(app);

    const viewData = () => {
        const users = ref(db, "users");

        onValue(users, (u) => {
            const data = u.val();
            setRecord(data);
        });
    };

    useEffect(() => {
        viewData();
    }, []);

    const deleteUser = (id) => {
        const users = ref(db, `users/${id}`);
        remove(users);
        alert("Record deleted successfully!");
        viewData();
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card shadow-lg border-0">
                        <div
                            className="card-header text-center text-white bg-dark"
                            style={{
                                borderBottom: "4px solid #444",
                            }}
                        >
                            <h2 className="fw-bold">User Records</h2>
                        </div>
                        <div
                            className="card-body"
                            style={{ backgroundColor: "#f8f9fa", borderRadius: "0 0 15px 15px" }}
                        >
                            <table
                                className="table table-hover text-center"
                                style={{
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <thead className="bg-secondary text-white">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {record ? (
                                        Object.entries(record).map(([key, val], index) => (
                                            <tr key={key}>
                                                <td className="fw-bold">{index + 1}</td>
                                                <td>{val.name}</td>
                                                <td>{val.phone}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm me-2"
                                                        style={{
                                                            borderRadius: "20px",
                                                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                                        }}
                                                        onClick={() => deleteUser(key)}
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        className="btn btn-warning btn-sm"
                                                        style={{
                                                            borderRadius: "20px",
                                                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                                        }}
                                                        onClick={() =>
                                                            navigate(`/edit`, { state: [key, val] })
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center text-muted">
                                                No records found!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="card-footer text-center"
                            style={{ background: "#fff", padding: "1rem" }}
                        >
                            <Link
                                to={`/add`}
                                className="btn btn-success"
                                style={{
                                    borderRadius: "25px",
                                    padding: "10px 30px",
                                    fontWeight: "bold",
                                    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
                                }}
                            >
                                Add New User
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
