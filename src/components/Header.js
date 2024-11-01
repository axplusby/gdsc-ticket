import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gdscLogo.png";

const Header = () => {
    return (
        <div className="bg-blue-600 flex justify-evenly text-white">
            <div className="flex justify-center items-center space-x-6">
                <img className="h-8 logo" src={logo} />
                <h1 className="text-xl">Google Developer on Campus - <strong>MAKAUT</strong> </h1>
            </div>
            <div className="py-4 flex justify-end">
                <ul className="flex space-x-6">
                    <li className="hover:bg-sky-500 py-2 px-4 rounded-lg"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="hover:bg-sky-500 py-2 px-4 rounded-lg"><Link to="/support">Support</Link></li>
                    <li className="hover:bg-sky-500 py-2 px-4 rounded-lg"><Link to="/contact">Contact</Link></li>
                    <li className="hover:bg-sky-500 py-2 px-4 rounded-lg"><Link to="/">Log In</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;