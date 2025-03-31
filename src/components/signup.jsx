import React from "react";
import "./login.css";

function Signup({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>Signup</h2>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="submit-btn">Sign Up</button>
                <p>Already have an account? <span>Login</span></p>
            </div>
        </div>
    );
}

export default Signup;
