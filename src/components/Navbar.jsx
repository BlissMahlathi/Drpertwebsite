import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../constants";
import LogoImg from "../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <nav className="max-sm:bg-gray-500/25 bg-white text-lavender-400 p-4 fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    <img
                        src={LogoImg}
                        alt="Clinic Logo"
                        width="100px"
                        height="70px"
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6">
                    {NAV_ITEMS.map((item, index) => (
                        <li key={item.name} className="relative group">
                            {item.subItems ? (
                                <>
                                    <button className="text-lavender-400 hover:text-blue-300 hover:underline">
                                        {item.name}
                                    </button>
                                    <ul className="absolute left-0 hidden group-hover:block bg-purple-800 p-2 rounded shadow-md">
                                        {item.subItems.map((subItem) => (
                                            <li key={subItem.name}>
                                                <Link
                                                    to={subItem.path}
                                                    className="block px-4 py-2 hover:bg-purple-700 hover:underline"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="text-lavender-400 hover:text-blue-300 hover:underline"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="text-3xl md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <ul
                className={`md:hidden absolute left-0 top-16 w-full bg-purple-900 bg-opacity-95 text-center transition-all ease-in-out duration-300 ${
                    isOpen ? "block opacity-100" : "hidden opacity-0"
                }`}
            >
                {NAV_ITEMS.map((item, index) => (
                    <li key={item.name} className="p-4 border-b border-purple-700">
                        {item.subItems ? (
                            <>
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="w-full text-center text-lavender-400 hover:text-blue-300 hover:underline"
                                >
                                    {item.name}
                                </button>
                                <ul
                                    className={`bg-purple-300 bg-opacity-60 transition-all duration-300 ${
                                        openDropdown === index ? "block" : "hidden"
                                    }`}
                                >
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem.name} className="py-2">
                                            <Link
                                                to={subItem.path}
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    setOpenDropdown(null);
                                                }}
                                                className="block px-4 py-2 hover:bg-purple-700 hover:underline"
                                            >
                                                {subItem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <Link
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-lavender-400 hover:text-blue-300 hover:underline"
                            >
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
