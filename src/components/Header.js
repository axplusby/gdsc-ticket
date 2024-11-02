import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/gdscLogo.png";

const Header = () => {
    const location = useLocation();

    // Determine if the current route is in the admin section
    const isAdmin = location.pathname.startsWith("/admin");

    return (
        <div className="bg-blue-600 flex justify-evenly text-white">
            <div className="flex justify-center items-center space-x-6">
                <img className="h-8 logo" src={logo} alt="Logo" />
                <h1 className="text-xl">
                    {isAdmin ? "Admin Dashboard - GDSC MAKAUT" : "Google Developer on Campus - MAKAUT"}
                </h1>
            </div>
            <div className="py-4 flex justify-end">
                <ul className="flex space-x-6">
                    {isAdmin ? (
                        <>
                            <li className="hover:bg-sky-500 py-2 px-4 rounded-lg">
                                <Link to="/admin-dashboard">Dashboard</Link>
                            </li>
                            <li className="hover:bg-sky-500 py-2 px-4 rounded-lg">
                                <Link to="/admin-technical-report">Technical Report</Link>
                            </li>
                            <li className="hover:bg-sky-500 py-2 px-4 rounded-lg">
                                <Link to="/admin-non-technical-report">Non-Technical Report</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="hover:bg-sky-500 py-2 px-4 rounded-lg">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="hover:bg-sky-500 py-2 px-4 rounded-lg">
                                <Link to="/support">Support</Link>
                            </li>
                            <li className="hover:bg-sky-500 py-2 px-4 rounded-lg">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </>
                    )}
                    <li className="hover:bg-sky-500 py-2 px-4 rounded-lg">
                        <Link to="/">Log In</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;