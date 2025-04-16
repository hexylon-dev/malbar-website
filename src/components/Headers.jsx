// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import img from '../asset/PRIME.png';

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [currentPath, setCurrentPath] = useState('/');

//     useEffect(() => {
//         // Get the current path from the window location
//         setCurrentPath(window.location.pathname);
//     }, []);
//     // @ts-ignore
//     const isActive = (path) => currentPath === path;

//     return (
//         <header className="bg-white shadow-md fixed w-full top-0 z-50">
//             <nav className="w-full py-4">
//                 <div className="flex items-center justify-between px-4 md:px-8 lg:px-16">
//                     {/* Logo */}
//                     <div className="flex-none">
//                         <a href="/" className="text-2xl font-bold text-orange-500">
//                             <img src={img} alt="logo" className="w-18 h-5" />
//                         </a>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="lg:hidden text-gray-600 hover:text-orange-500"
//                         aria-label="Toggle menu"
//                     >
//                         {isMenuOpen ? (
//                             <X className="h-6 w-6" />
//                         ) : (
//                             <Menu className="h-6 w-6" />
//                         )}
//                     </button>

//                     {/* Desktop Navigation */}
//                     <div className="hidden lg:flex flex-grow justify-center">
//                         <div className="flex space-x-8">
//                             <a
//                                 href="/"
//                                 className={`px-4 py-2 ${isActive('/')
//                                     ? 'text-orange-500 border-b-2 border-orange-500'
//                                     : 'text-gray-600 hover:text-orange-500'
//                                     }`}
//                             >
//                                 Home
//                             </a>
//                             <a
//                                 href="/about"
//                                 className={`px-4 py-2 ${isActive('/about')
//                                     ? 'text-orange-500 border-b-2 border-orange-500'
//                                     : 'text-gray-600 hover:text-orange-500'
//                                     }`}
//                             >
//                                 About Us
//                             </a>
//                             <a
//                                 href="/services"
//                                 className={`px-4 py-2 ${isActive('/services')
//                                     ? 'text-orange-500 border-b-2 border-orange-500'
//                                     : 'text-gray-600 hover:text-orange-500'
//                                     }`}
//                             >
//                                 Services
//                             </a>
//                         </div>
//                     </div>

//                     {/* Desktop Contact Button */}
//                     <div className="hidden lg:block flex-none">
//                         <a
//                             href="/contact"
//                             className={`px-4 py-2 ${isActive('/contact')
//                                 ? 'bg-orange-600'
//                                 : 'bg-orange-500 hover:bg-orange-600'
//                                 } text-white rounded transition`}
//                         >
//                             Contact Us
//                         </a>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation */}
//                 <div
//                     className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'
//                         } bg-white border-t border-gray-100`}
//                 >
//                     <div className="px-4 py-2 space-y-1">
//                         <a
//                             href="/"
//                             className={`block px-4 py-2 ${isActive('/')
//                                 ? 'text-orange-500 font-medium border-l-4 border-orange-500'
//                                 : 'text-gray-600 hover:text-orange-500'
//                                 }`}
//                         >
//                             Home
//                         </a>
//                         <a
//                             href="/about"
//                             className={`block px-4 py-2 ${isActive('/about')
//                                 ? 'text-orange-500 font-medium border-l-4 border-orange-500'
//                                 : 'text-gray-600 hover:text-orange-500'
//                                 }`}
//                         >
//                             About Us
//                         </a>
//                         <a
//                             href="/services"
//                             className={`block px-4 py-2 ${isActive('/services')
//                                 ? 'text-orange-500 font-medium border-l-4 border-orange-500'
//                                 : 'text-gray-600 hover:text-orange-500'
//                                 }`}
//                         >
//                             Services
//                         </a>
//                         <a
//                             href="/contact"
//                             className={`block px-4 py-2 ${isActive('/contact')
//                                 ? 'text-orange-500 font-medium border-l-4 border-orange-500'
//                                 : 'text-gray-600 hover:text-orange-500'
//                                 }`}
//                         >
//                             Contact Us
//                         </a>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default Header;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
    const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    return (
        <div className="w-full flex items-center justify-between px-8 py-4 relative max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0">
                <svg width="130" height="60" viewBox="0 0 130 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M91 30 L91 15 L110 15 L110 30 L91 30 Z" stroke="#000000" strokeWidth="2" fill="none" />
                    <path d="M91 45 L91 30 L110 30 L110 45 L91 45 Z" stroke="#000000" strokeWidth="2" fill="none" />
                    <path d="M110 30 L125 30 L125 45 L110 45 L110 30 Z" stroke="#000000" strokeWidth="2" fill="none" />
                    <path d="M110 15 L125 15 L125 30 L110 30 L110 15 Z" stroke="#000000" strokeWidth="2" fill="none" />
                    <path d="M91 15 L91 45 M125 15 L125 45" stroke="#000000" strokeWidth="2" />
                </svg>
            </div>

            {/* Navigation Links */}
            <div className="bg-gray-100 rounded-full px-8 py-3 flex items-center space-x-10 relative">
                <Link
                    to="/"
                    className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    className="text-gray-600 hover:text-black transition-colors duration-200 font-medium"
                >
                    Our Story
                </Link>

                {/* Dropdown for Our Work */}
                <div
                    className="relative"
                    onMouseEnter={() => setWorkDropdownOpen(true)}
                    onMouseLeave={() => setWorkDropdownOpen(false)}
                >
                    <div className="flex items-center cursor-pointer">
                        <span className="text-gray-600 hover:text-black transition-colors duration-200 font-medium">
                            Our Work
                        </span>
                        <motion.span
                            animate={{ rotate: workDropdownOpen ? 180 : 0 }}
                            className="ml-1"
                        >

                        </motion.span>
                    </div>

                    <AnimatePresence>
                        {workDropdownOpen && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={dropdownVariants}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-3 w-56 bg-orange-400 shadow-xl rounded-lg z-10 overflow-hidden border border-gray-200 text-white"
                            >
                                <Link
                                    to="/services"
                                    className="block px-5 py-3 text-gray-700 hover:bg-orange-50 transition-colors duration-200 border-b border-gray-100"
                                >
                                    <div className="font-medium">Services</div>
                                    <div className="text-xs text-gray-500 mt-1">Explore our offerings</div>
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="block px-5 py-3 text-gray-700 hover:bg-orange-50 transition-colors duration-200"
                                >
                                    <div className="font-medium">Portfolio</div>
                                    <div className="text-xs text-gray-500 mt-1">See our work samples</div>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Dropdown for Our Projects */}
                <div
                    className="relative"
                    onMouseEnter={() => setProjectsDropdownOpen(true)}
                    onMouseLeave={() => setProjectsDropdownOpen(false)}
                >
                    <div className="flex items-center cursor-pointer">
                        <span className="text-gray-600 hover:text-black transition-colors duration-200 font-medium">
                            Our Projects
                        </span>
                        <motion.span
                            animate={{ rotate: projectsDropdownOpen ? 180 : 0 }}
                            className="ml-1"
                        >

                        </motion.span>
                    </div>

                    <AnimatePresence>
                        {projectsDropdownOpen && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={dropdownVariants}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-3 w-64 bg-orange-400 shadow-xl rounded-lg z-10 overflow-hidden border border-gray-200"
                            >
                                <Link
                                    to="/current-projects"
                                    className="block px-5 py-3 text-gray-700 hover:bg-orange-50 transition-colors duration-200 border-b border-gray-100"
                                >
                                    <div className="font-medium">Current Projects</div>
                                    <div className="text-xs text-gray-500 mt-1">Ongoing initiatives</div>
                                </Link>
                                <Link
                                    to="/past-projects"
                                    className="block px-5 py-3 text-gray-700 hover:bg-orange-50 transition-colors duration-200 border-b border-gray-100"
                                >
                                    <div className="font-medium">Past Projects</div>
                                    <div className="text-xs text-gray-500 mt-1">Completed works</div>
                                </Link>
                                <Link
                                    to="/case-studies"
                                    className="block px-5 py-3 text-gray-700 hover:bg-orange-50 transition-colors duration-200"
                                >
                                    <div className="font-medium">Case Studies</div>
                                    <div className="text-xs text-gray-500 mt-1">Detailed analyses</div>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Enquire Now Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium shadow-md"
            >
                Enquire Now
            </motion.button>
        </div>
    );
};

export default Header;