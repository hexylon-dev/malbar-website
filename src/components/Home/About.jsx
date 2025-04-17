"use client"

import React from "react"
import { Instagram } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import img1 from "../../asset/cartoon.png"

export default function About() {
    const controls = useAnimation()
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    // Create horizontal lines (rows)
    const rows = 20;
    const rowLines = [];
    for (let row = 0; row < rows; row++) {
        rowLines.push(
            <div
                key={`row-${row}`}
                className="absolute bg-orange-500 opacity-20"
                style={{
                    width: "100%",
                    height: "1px",
                    top: `${row * (100 / rows)}%`,
                    left: "0",
                }}
            />
        )
    }

    // Create vertical lines (columns)
    const cols = 30;
    const colLines = [];
    for (let col = 0; col < cols; col++) {
        colLines.push(
            <div
                key={`col-${col}`}
                className="absolute bg-orange-500 opacity-20"
                style={{
                    width: "1px",
                    height: "100%",
                    left: `${col * (100 / cols)}%`,
                    top: "0",
                }}
            />
        )
    }

    return (
        <div className="w-full min-h-screen flex items-center relative overflow-hidden">
            {/* Rotated Square Background (4-degree angle) */}
            <motion.div
                className="absolute inset-0 w-full h-full bg-white"
                style={{
                    rotate: "4deg",
                    scale: 1.1,
                    originX: 0.5,
                    originY: 0.5
                }}
            >
                {/* Grid Lines */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {rowLines}
                    {colLines}
                </div>
            </motion.div>

            {/* Content (Unrotated) */}
            <div className="max-w-6xl mx-auto p-8 py-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold">
                        About <span className="text-orange-500">Myself</span>
                    </h1>
                    <p className="text-gray-600 mt-2">Any assistance or workplace. Just write up or messaged</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Image Container - Updated with responsive sizing */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            damping: 15,
                            stiffness: 100
                        }}
                        className="w-full md:w-2/5 flex items-center justify-center"
                    >
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="rounded-lg overflow-hidden shadow-lg bg-white w-full h-auto
                                       max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                        >
                            <img
                                src={img1 || "/placeholder.svg"}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Content Container */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            damping: 15,
                            stiffness: 100,
                            delay: 0.2
                        }}
                        className="w-full md:w-3/5 p-6 rounded-lg"
                    >
                        <h2 className="text-3xl font-bold mb-6">Nrupansh Dalwadi</h2>

                        {/* Social Icons */}
                        <div className="flex gap-4 mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                className="bg-white text-orange-500 border border-orange-500 rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1, rotate: -10 }}
                                className="bg-white text-orange-500 border border-orange-500 rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                className="bg-white text-orange-500 border border-orange-500 rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                                <Instagram size={20} />
                            </motion.div>
                        </div>

                        {/* Content Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            className="text-gray-700 mb-6 text-lg"
                        >
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="text-gray-700 mb-8 text-lg"
                        >
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            rem aperiam
                        </motion.p>

                        {/* Contact Buttons */}
                        <div className="flex gap-4">
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.1, delay: 0.1, ease: "easeOut" }}
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                href="/contact"
                                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
                            >
                                Contact Us
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.1, delay: 0.1, ease: "easeOut" }}
                                whileHover={{ scale: 1.1, rotate: 10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                href="/contact"
                                className="bg-orange-500 text-white p-3 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 shadow-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}