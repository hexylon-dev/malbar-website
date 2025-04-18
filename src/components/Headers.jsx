"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight } from "lucide-react"
import logo from "../asset/Group 1000001769 1.png"

const Header = () => {
    const [workDropdownOpen, setWorkDropdownOpen] = useState(false)
    const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false)
    const [openSubCategory, setOpenSubCategory] = useState(null)

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

    // Project categories with sub-items
    const projectCategories = [
        {
            title: "Residential",
            path: "/projects/residential",
            subItems: [
                { title: "Apartments", path: "/projects/residential/apartments" },
                { title: "Houses", path: "/projects/residential/houses" },
            ],
        },
        {
            title: "Commercial",
            path: "/projects/commercial",
            subItems: [
                { title: "Office Buildings", path: "/projects/commercial/office-buildings" },
                { title: "Retail Spaces", path: "/projects/commercial/retail-spaces" },
            ],
        },
        {
            title: "On Going",
            path: "/projects/ongoing",
            subItems: [
                { title: "Current Projects", path: "/projects/ongoing/current" },
                { title: "Upcoming Projects", path: "/projects/ongoing/upcoming" },
            ],
        },
    ]

    const toggleSubCategory = (title) => {
        setOpenSubCategory(openSubCategory === title ? null : title)
    }

    return (
        <div className="w-full flex items-center justify-between px-8 py-4 relative max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0">
                <a href="/">
                    <div className="h-10 w-auto">
                        <img src={logo} alt=" Company Logo" width={50} height={40} />
                    </div>
                </a>
            </div>

            {/* Navigation Links */}
            <div className="bg-gray-100 rounded-full px-8 py-3 flex items-center space-x-10 relative">
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
                                <motion.div variants={itemVariants} className="group">
                                    <a
                                        href="/services"
                                        className="block px-5 py-4 text-gray-700 hover:text-orange-500 transition-colors duration-200"
                                    >
                                        <div className="font-medium flex items-center">
                                            <span className="h-1.5 w-1.5  mr-2"></span>
                                            Construction
                                        </div>
                                    </a>
                                </motion.div>

                                <motion.div variants={itemVariants} className="group">
                                    <a
                                        href="/Petrolpump"
                                        className="block px-5 py-4 text-gray-700 hover:text-orange-500 transition-colors duration-200 border-b border-gray-100"
                                    >
                                        <div className="font-medium flex items-center">
                                            <span className="h-1.5 w-1.5 mr-2"></span>
                                            Petrolium
                                        </div>
                                    </a>
                                </motion.div>

                                <motion.div variants={itemVariants} className="group">
                                    <a
                                        href="/BricksShowcase"
                                        className="block px-5 py-4 text-gray-700 hover:text-orange-500 transition-colors duration-200 border-b border-gray-100"
                                    >
                                        <div className="font-medium flex items-center">
                                            <span className="h-1.5 w-1.5  mr-2"></span>
                                            Bricks
                                        </div>
                                    </a>
                                </motion.div>
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
                                {/* <div className="bg-orange-500 py-3 px-5">
                                    <h3 className="text-white font-semibold">Our Projects</h3>
                                </div> */}

                                {/* Categories with nested dropdowns */}
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

            {/* Enquire Now Button */}
            <a
                href="/contact"
                className="bg-[#ff6e00] text-white px-6 py-3 rounded font-medium border-none cursor-pointer transition-colors duration-300 hover:bg-[#e06200]"
            >
                Inquiry Now
            </a>
        </div>
    )
}

export default Header