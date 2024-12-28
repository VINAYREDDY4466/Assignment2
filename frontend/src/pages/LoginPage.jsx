import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            localStorage.setItem('token', res.data.token);
            setMessage('Login successful!');
        } catch (error) {
            setMessage(error.response.data.message || 'Something went wrong.');
        }
    };

    const handleRegister = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                email,
                password,
            });
            setMessage(res.data.message);
        } catch (error) {
            setMessage(error.response.data.message || 'Something went wrong.');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Login</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={handleRegister}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
