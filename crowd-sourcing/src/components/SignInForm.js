import React from 'react';
import './SignInForm.css'; // Create and import corresponding CSS for styling

const SignInForm = ({ onClose }) => {
    return (
        <div className="signin-form-container">
            <div className="signin-form">
                <h2>Sign In</h2>
                <button className="close-btn" onClick={onClose}>X</button>
                <form>
                   
                    <div className="form-group">
                        <label htmlFor="email"> </label>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"> </label>
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>

                    <button type="submit" className="submit-btn">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;