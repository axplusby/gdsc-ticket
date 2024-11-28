import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/gdscLogo.png";


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            // Log out
            setIsLoggedIn(false);
            navigate('/'); // Redirect to the login page on logout
        } else {
            // Redirect to login page
            navigate('/');
        }
    };

    return (
        <header className="bg-blue-600 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between  py-4 px-6">
                <div className="flex justify-center items-center space-x-6">
                    <img className="h-8 logo" src={logo} alt="Logo" />
                    <h1 className="text-xl">Google Developer on Campus - MAKAUT</h1>
                </div>
                <nav className="flex space-x-6">
                    <button
                        className="hover:bg-sky-500 py-2 px-4 rounded-lg"
                        onClick={() => navigate('/support')}
                    >
                        Support
                    </button>
                    <button
                        className="hover:bg-sky-500 py-2 px-4 rounded-lg"
                        onClick={() => navigate('/contact')}
                    >
                        Contact
                    </button>
                    <button
                        className="hover:bg-sky-500 py-2 px-4 rounded-lg"
                        onClick={handleLoginLogout}
                    >
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
