//SignUpForm.js
import React from 'react';
import './SignUpForm.css'; // Make sure you duplicate and rename the CSS file too

const SignUpForm = ({ onClose }) => {
    return (
        <div className="signup-form-container">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <button className="close-btn" onClick={onClose}>X</button>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName"></label>
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName"></label>
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>

                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;