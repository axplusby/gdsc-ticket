import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple authentication logic
        if (username === 'admin' && password === 'password') {
            navigate('/admin-dashboard'); // Redirect to dashboard on successful login
        } else if (username === "client" && password === "client") {
            navigate("/dashboard")
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form 
                onSubmit={handleLogin} 
                className="bg-white p-8 rounded shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="border rounded w-full py-2 px-3 text-gray-700"
                        required 
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700">Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="border rounded w-full py-2 px-3 text-gray-700"
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;