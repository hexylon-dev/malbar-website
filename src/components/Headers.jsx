"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import logo from "../asset/Group 1000001769 1.png"

const Header = () => {
    const [workDropdownOpen, setWorkDropdownOpen] = useState(false)
    const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false)

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                staggerChildren: 0.05,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: { duration: 0.15 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <div className="w-full flex items-center justify-between px-8 py-4 relative max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link to="/">
                    <img src={logo || "/placeholder.svg"} alt="Company Logo" className="h-10 w-auto" />
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="bg-gray-100 rounded-full px-8 py-3 flex items-center space-x-10 relative">
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors duration-200 font-medium">
                    Our Story
                </Link>

                {/* Dropdown for Our Work */}
                <div
                    className="relative"
                    onMouseEnter={() => setWorkDropdownOpen(true)}
                    onMouseLeave={() => setWorkDropdownOpen(false)}
                >
                    <div className="flex items-center group">
                        <span className="text-gray-600 group-hover:text-black transition-colors duration-200 font-medium">
                            Our Works
                        </span>
                        <motion.div
                            animate={{ rotate: workDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-1 text-gray-500 group-hover:text-black"
                        >
                            <ChevronDown size={16} />
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {workDropdownOpen && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={dropdownVariants}
                                className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl rounded-lg z-10 overflow-hidden border border-gray-100"
                            >
                                <div className="bg-orange-500 py-3 px-5">
                                    <h3 className="text-white font-semibold">Our Works</h3>
                                </div>
                                <motion.div variants={itemVariants} className="group">
                                    <Link
                                        to="/services"
                                        className="block px-5 py-4 text-gray-700 hover:bg-orange-50 transition-all duration-200 group-hover:pl-7"
                                    >
                                        <div className="font-medium flex items-center">
                                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            Construction
                                        </div>
                                    </Link>
                                </motion.div>

                                <motion.div variants={itemVariants} className="group">

                                    <Link
                                        to="/Petrolpump"
                                        className="block px-5 py-4 text-gray-700 hover:bg-orange-50 transition-all duration-200 border-b border-gray-100 group-hover:pl-7"
                                    >
                                        <div className="font-medium flex items-center">
                                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            Petrolpump
                                        </div>
                                    </Link>
                                </motion.div>

                                <motion.div variants={itemVariants} className="group">
                                    <Link
                                        to="/BricksShowcase"
                                        className="block px-5 py-4 text-gray-700 hover:bg-orange-50 transition-all duration-200 border-b border-gray-100 group-hover:pl-7"
                                    >
                                        <div className="font-medium flex items-center">
                                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            Bricks
                                        </div>
                                    </Link>
                                </motion.div>


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
                    <div className="flex items-center group">
                        <span className="text-gray-600 group-hover:text-black transition-colors duration-200 font-medium">
                            Our Projects
                        </span>
                        <motion.div
                            animate={{ rotate: projectsDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-1 text-gray-500 group-hover:text-black"
                        >
                            <ChevronDown size={16} />
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {projectsDropdownOpen && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={dropdownVariants}
                                className="absolute top-full left-0 mt-3 w-[28rem] bg-white shadow-xl rounded-lg z-10 overflow-hidden border border-gray-100"
                            >
                                <div className="bg-orange-500 py-3 px-5">
                                    <h3 className="text-white font-semibold">Our Projects</h3>
                                </div>

                                <div className="grid grid-cols-3">
                                    {/* Row 1 - 3 items */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="group block"
                                    >
                                        <div className="px-5 py-4 text-gray-700 transition-all duration-200 ">
                                            <div className="text-[20px] flex items-center">
                                                <span className="h-1.5 w-1.5 rounded-full mr-2 opacity-0"></span>
                                                Residential
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="group block"
                                    >
                                        <div className="px-5 py-4 text-gray-700">
                                            <div className="text-[20px] flex items-center">
                                                <span className="h-2 w-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                Commercial
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="group block"
                                    >
                                        <div className="px-5 py-4 text-gray-700 ">
                                            <div className="text-[20px] flex items-center">
                                                <span className="h-1.5 w-1.5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                On Going
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Row 2 - 3 items */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="group block"
                                    >
                                        <div className="px-5 py-4 text-gray-700 hover:bg-orange-50 transition-all duration-200 group-hover:pl-7 ">
                                            <div className="font-medium flex items-center">
                                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                Project 2
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="group block"
                                    >
                                        <div className="px-5 py-4 text-gray-700 hover:bg-orange-50 transition-all duration-200 group-hover:pl-7 ">
                                            <div className="font-medium flex items-center">
                                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                Project 5
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="group block"
                                    >
                                        <div className="px-5 py-4 text-gray-700 hover:bg-orange-50 transition-all duration-200 group-hover:pl-7 ">
                                            <div className="font-medium flex items-center">
                                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                Project 6
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Row 3 - 2 items */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="group block col-span-2"
                                    >
                                        <div className="px-5 py-4 text-gray-700 hover:bg-orange-50 transition-all duration-200 group-hover:pl-7 ">
                                            <div className="font-medium flex items-center">
                                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                Project 3
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="group block col-span-1"
                                    >
                                        <div className="px-5 py-4 text-gray-700 hover:bg-orange-50 transition-all duration-200 group-hover:pl-7 ">
                                            <div className="font-medium flex items-center">
                                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                Project 8
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Enquire Now Button */}
            <Link
                to="/contact"
                className="bg-[#ff6e00] text-white px-6 py-3 rounded font-medium border-none cursor-pointer transition-colors duration-300 hover:bg-[#e06200]"
            >
                Inquiry Now
            </Link>
        </div>
    )
}

export default Header
