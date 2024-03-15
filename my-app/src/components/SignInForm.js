import React, { useState } from 'react';
import './SignInForm.css'; // Create and import corresponding CSS for styling

const SignInForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Endpoint URL from Power Automate
        const powerAutomateEndpoint = 'https://prod-25.southeastasia.logic.azure.com:443/workflows/4cf63c66c18d4326a3be6de024f950a3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=cANk_84AqvhzTZk8A2K7Lj6G8w-zNoixqp5qW94akpc';

        try {
            const response = await fetch(powerAutomateEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_addres: formData.email, // Zmienione na "email_addres" zgodnie ze schematem
                    Password: formData.password, // Zmienione na "Password" zgodnie ze schematem
                }),
            });

            if (response.ok) {
                console.log('Login successful!');
                onClose();
            } else if (response.status === 404) {
                console.error('Login failed: User not found');
                setError('Incorrect email or password. Please try again.');
            } else {
                console.error('Login failed!');
                setError('An error occurred. Please try again later.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="signin-form-container">
            <div className="signin-form">
                <h2>Sign In</h2>
                <button className="close-btn" onClick={onClose}>X</button>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="submit-btn">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
