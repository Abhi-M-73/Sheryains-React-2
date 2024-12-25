import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-[50%] mx-auto bg-blue-600 text-white">
            <div className="container mx-auto flex items-center justify-center gap-10 p-4">
                <Link to={"/"} className="hover:text-gray-200">Home</Link>
                <Link to={"/about"} className="hover:text-gray-200">About</Link>
                <Link to={"/services"} className="hover:text-gray-200">Services</Link>
                <Link to={"/contact"} className="hover:text-gray-200">Contact</Link>
                {/* <NavLink className={(e) => e.isActive ? "bg-red-500 : ""} to={"/contact"} className="hover:text-gray-200">Contact</NavLink> */}
            </div>
        </nav>
    );
};

export default Navbar;
