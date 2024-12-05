import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { googleAuthProvider, auth } from "../firebase";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            let data = await signInWithPopup(auth, googleAuthProvider);
            navigate('/');
        } catch (err) {
            console.error(err);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body text-center">
                    <h1 className="card-title mb-3">Welcome Back!</h1>
                    <p className="card-text text-muted mb-4">Sign in to continue</p>
                    <button className="btn btn-outline-primary d-flex align-items-center justify-content-center w-100 mb-3" onClick={handleSubmit}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                            alt="Google Logo"
                            style={{ width: '20px', marginRight: '10px' }}
                        />
                        Sign In with Google
                    </button>
                    <div className="d-flex justify-content-between">
                        <Link to="/add" className="btn btn-link text-decoration-none">Add</Link>
                        <Link to="/Table" className="btn btn-link text-decoration-none">View</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
