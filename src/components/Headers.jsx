"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
// import logo from "../asset/Group 1000001769 1.png"
import logo2 from "../asset/logo2.png"

const Header = () => {
    const [workDropdownOpen, setWorkDropdownOpen] = useState(false)
    const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false)
    const [openSubCategory, setOpenSubCategory] = useState(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            x: "100%",
            transition: { duration: 0.3, ease: "easeIn" },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    }

    // Project categories with sub-items
    const projectCategories = [
        {
            title: "Residential",
            path: "/projects/residential",
            subItems: [
                { title: "Malbar Prime Residantial", path: "/malbar-prime-residential" },
                // { title: "Houses", path: "/projects/residential/houses" },
            ],
        },
        {
            title: "Commercial",
            path: "/projects/commercial",
            subItems: [
                // { title: "Office Buildings", path: "/projects/commercial/office-buildings" },
                // { title: "Retail Spaces", path: "/projects/commercial/retail-spaces" },
            ],
        },
        {
            title: "On Going",
            // path: "/projects/ongoing",
            subItems: [
                // { title: "Current Projects", path: "/projects/ongoing/current" },
                // { title: "Upcoming Projects", path: "/projects/ongoing/upcoming" },
            ],
        },
    ]

    const workCategories = [
        { title: "Construction", path: "/services" },
        { title: "Petrolium", path: "/Petrolpump" },
        { title: "Bricks", path: "/BricksShowcase" }
    ]

    const toggleSubCategory = (title) => {
        setOpenSubCategory(openSubCategory === title ? null : title)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const [mobileWorkOpen, setMobileWorkOpen] = useState(false)
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)
    const [mobileProjectCategory, setMobileProjectCategory] = useState(null)

    const toggleMobileWork = () => {
        setMobileWorkOpen(!mobileWorkOpen)
    }

    const toggleMobileProjects = () => {
        setMobileProjectsOpen(!mobileProjectsOpen)
    }

    const toggleMobileProjectCategory = (category) => {
        setMobileProjectCategory(mobileProjectCategory === category ? null : category)
    }

    return (
        <div className="w-full flex items-center justify-between px-4 md:px-8 py-4 relative max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0">
                <a href="/">
                    <div className="h-10 w-auto">
                        <img src={logo2} alt="Company Logo" width={80} height={60} />
                    </div>
                </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex bg-gray-100 rounded-full px-8 py-3 items-center space-x-10 relative">
                <a href="/about" className="text-gray-600 hover:text-black transition-colors duration-200 font-medium">
                    Our Story
                </a>

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
                                {workCategories.map((item, index) => (
                                    <motion.div key={item.title} variants={itemVariants} className="group">
                                        <a
                                            href={item.path}
                                            className={`block px-5 py-4 text-gray-700 hover:text-orange-500 transition-colors duration-200 ${index < workCategories.length - 1 ? "border-b border-gray-100" : ""
                                                }`}
                                        >
                                            <div className="font-medium flex items-center">
                                                <span className="h-1.5 w-1.5 mr-2"></span>
                                                {item.title}
                                            </div>
                                        </a>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Dropdown for Our Projects with nested categories */}
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
                                className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl rounded-lg z-10 overflow-hidden border border-gray-100"
                            >
                                {projectCategories.map((category) => (
                                    <div key={category.title} className="border-b border-gray-100 last:border-b-0">
                                        {/* Category header */}
                                        <motion.div
                                            variants={itemVariants}
                                            className="group"
                                        >
                                            <div
                                                className="px-5 py-4 text-gray-700 hover:text-orange-500 transition-colors duration-200 cursor-pointer flex justify-between items-center"
                                                onClick={() => toggleSubCategory(category.title)}
                                            >
                                                <div className="font-medium">
                                                    {category.title}
                                                </div>
                                                <ChevronRight
                                                    className={`h-4 w-4 transition-transform duration-200 ${openSubCategory === category.title ? "rotate-90" : ""}`}
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Sub-items */}
                                        <AnimatePresence>
                                            {openSubCategory === category.title && (
                                                <motion.div
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    variants={dropdownVariants}
                                                    className="bg-gray-50"
                                                >
                                                    {category.subItems.map((subItem) => (
                                                        <motion.div key={subItem.title} variants={itemVariants}>
                                                            <a
                                                                href={subItem.path}
                                                                className="block px-8 py-3 text-gray-600 hover:text-orange-500 transition-colors duration-200"
                                                            >
                                                                <div className="font-medium">
                                                                    {subItem.title}
                                                                </div>
                                                            </a>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Enquire Now Button - desktop */}
            <a
                href="/contact"
                className="hidden md:block bg-[#ff6e00] text-white px-6 py-3 rounded font-medium border-none cursor-pointer transition-colors duration-300 hover:bg-[#e06200]"
            >
                Enquire Now
            </a>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
                onClick={toggleMobileMenu}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="fixed top-0 right-0 h-full w-full md:w-80 bg-white z-50 shadow-xl flex flex-col"
                    >
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                            <div className="flex items-center space-x-2">
                                <img src={logo2} alt="Company Logo" width={40} height={32} />
                                {/* <span className="font-bold text-gray-800">Menu</span> */}
                            </div>
                            <button
                                className="text-gray-700 hover:text-orange-500 focus:outline-none"
                                onClick={toggleMobileMenu}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="overflow-y-auto flex-1">
                            <div className="p-5 border-b border-gray-100">
                                <a href="/about" className="block text-gray-700 font-medium hover:text-orange-500 transition-colors duration-200 py-3">
                                    Our Story
                                </a>
                            </div>

                            {/* Mobile Work Dropdown */}
                            <div className="p-5 border-b border-gray-100">
                                <div
                                    className="flex justify-between items-center text-gray-700 font-medium hover:text-orange-500 transition-colors duration-200 py-3"
                                    onClick={toggleMobileWork}
                                >
                                    <span>Our Works</span>
                                    <motion.div
                                        animate={{ rotate: mobileWorkOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={18} />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {mobileWorkOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden ml-4"
                                        >
                                            {workCategories.map((item) => (
                                                <a
                                                    key={item.title}
                                                    href={item.path}
                                                    className="block text-gray-600 hover:text-orange-500 transition-colors duration-200 py-3 border-l-2 border-gray-200 pl-4"
                                                >
                                                    {item.title}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile Projects Dropdown */}
                            <div className="p-5 border-b border-gray-100">
                                <div
                                    className="flex justify-between items-center text-gray-700 font-medium hover:text-orange-500 transition-colors duration-200 py-3"
                                    onClick={toggleMobileProjects}
                                >
                                    <span>Our Projects</span>
                                    <motion.div
                                        animate={{ rotate: mobileProjectsOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={18} />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {mobileProjectsOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden ml-4"
                                        >
                                            {projectCategories.map((category) => (
                                                <div key={category.title} className="border-l-2 border-gray-200 pl-4">
                                                    <div
                                                        className="flex justify-between items-center text-gray-600 hover:text-orange-500 transition-colors duration-200 py-3 cursor-pointer"
                                                        onClick={() => toggleMobileProjectCategory(category.title)}
                                                    >
                                                        <span>{category.title}</span>
                                                        <motion.div
                                                            animate={{ rotate: mobileProjectCategory === category.title ? 90 : 0 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <ChevronRight size={16} />
                                                        </motion.div>
                                                    </div>

                                                    <AnimatePresence>
                                                        {mobileProjectCategory === category.title && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden ml-4"
                                                            >
                                                                {category.subItems.map((subItem) => (
                                                                    <a
                                                                        key={subItem.title}
                                                                        href={subItem.path}
                                                                        className="block text-gray-500 hover:text-orange-500 transition-colors duration-200 py-2"
                                                                    >
                                                                        {subItem.title}
                                                                    </a>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Inquiry Now Button in Mobile Menu */}
                        <div className="p-5 mt-auto">
                            <a
                                href="/contact"
                                className="block bg-[#ff6e00] text-white px-6 py-4 rounded font-medium border-none cursor-pointer transition-colors duration-300 hover:bg-[#e06200] text-center"
                            >
                                Inquiry Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Header