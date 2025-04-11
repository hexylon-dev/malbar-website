import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import img from '../asset/PRIME.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');

    useEffect(() => {
        // Get the current path from the window location
        setCurrentPath(window.location.pathname);
    }, []);
    // @ts-ignore
    const isActive = (path) => currentPath === path;

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <nav className="w-full py-4">
                <div className="flex items-center justify-between px-4 md:px-8 lg:px-16">
                    {/* Logo */}
                    <div className="flex-none">
                        <a href="/" className="text-2xl font-bold text-orange-500">
                            <img src={img} alt="logo" className="w-18 h-5" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-gray-600 hover:text-orange-500"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-grow justify-center">
                        <div className="flex space-x-8">
                            <a
                                href="/"
                                className={`px-4 py-2 ${isActive('/')
                                    ? 'text-orange-500 border-b-2 border-orange-500'
                                    : 'text-gray-600 hover:text-orange-500'
                                    }`}
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className={`px-4 py-2 ${isActive('/about')
                                    ? 'text-orange-500 border-b-2 border-orange-500'
                                    : 'text-gray-600 hover:text-orange-500'
                                    }`}
                            >
                                About Us
                            </a>
                            <a
                                href="/services"
                                className={`px-4 py-2 ${isActive('/services')
                                    ? 'text-orange-500 border-b-2 border-orange-500'
                                    : 'text-gray-600 hover:text-orange-500'
                                    }`}
                            >
                                Services
                            </a>
                        </div>
                    </div>

                    {/* Desktop Contact Button */}
                    <div className="hidden lg:block flex-none">
                        <a
                            href="/contact"
                            className={`px-4 py-2 ${isActive('/contact')
                                ? 'bg-orange-600'
                                : 'bg-orange-500 hover:bg-orange-600'
                                } text-white rounded transition`}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'
                        } bg-white border-t border-gray-100`}
                >
                    <div className="px-4 py-2 space-y-1">
                        <a
                            href="/"
                            className={`block px-4 py-2 ${isActive('/')
                                ? 'text-orange-500 font-medium border-l-4 border-orange-500'
                                : 'text-gray-600 hover:text-orange-500'
                                }`}
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className={`block px-4 py-2 ${isActive('/about')
                                ? 'text-orange-500 font-medium border-l-4 border-orange-500'
                                : 'text-gray-600 hover:text-orange-500'
                                }`}
                        >
                            About Us
                        </a>
                        <a
                            href="/services"
                            className={`block px-4 py-2 ${isActive('/services')
                                ? 'text-orange-500 font-medium border-l-4 border-orange-500'
                                : 'text-gray-600 hover:text-orange-500'
                                }`}
                        >
                            Services
                        </a>
                        <a
                            href="/contact"
                            className={`block px-4 py-2 ${isActive('/contact')
                                ? 'text-orange-500 font-medium border-l-4 border-orange-500'
                                : 'text-gray-600 hover:text-orange-500'
                                }`}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;