import React from "react";
import "./login.css";

function Login({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="submit-btn">Login</button>
                <p>Don't have an account? <span>Sign up</span></p>
            </div>
        </div>
    );
}

export default Login;
