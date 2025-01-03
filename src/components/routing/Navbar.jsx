import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-[50%] mx-auto bg-blue-600 text-white">
            <div className="container mx-auto flex items-center justify-center gap-10 p-4">
                <Link to={"/"} className="hover:text-gray-200">Home</Link>
                <Link to={"/products"} className="hover:text-gray-200">Products</Link>
                <Link to={"/service"} className="hover:text-gray-200">Service</Link>
                <Link to={"/contact"} className="hover:text-gray-200">Contact</Link>

                {/* <NavLink to="/contact"
                    className={(e) => e.isActive ? "text-red-500 " : "hover:text-gray-200"}
                    style={(e) => e.isActive ? { textDecoration: "underline" } : undefined} > Contact </NavLink> */}
            </div>
        </nav >
    );
};

export default Navbar;
