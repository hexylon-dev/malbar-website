import React from 'react';
import { motion } from 'framer-motion';

export default function PetrolPumpUI() {
    return (
        <div className="bg-white p-4 max-w-4xl mx-auto">
            {/* Petrol Pump Section with Animation */}
            <motion.div
                className="relative mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src="/api/placeholder/600/350"
                    alt="Petrol Pump"
                    className="w-full rounded-lg shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div
                    className="absolute bottom-4 right-4 bg-white px-4 py-2 font-bold text-xl"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    PETROL PUMP
                </motion.div>
            </motion.div>

            {/* Placeholder Text with Animation */}
            <motion.div
                className="mb-8 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
                <p className="mb-4">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <p>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <motion.h2
                    className="text-center text-3xl font-bold uppercase mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                >
                    Achievements
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Award 1 */}
                    <motion.div
                        className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="relative mb-3">
                            <div className="text-center">
                                <motion.svg
                                    className="w-16 h-16 text-yellow-400 mx-auto"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
                                >
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </motion.svg>
                                <motion.div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full w-10 h-10 flex items-center justify-center"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        repeatType: "reverse"
                                    }}
                                >
                                    <span className="text-white text-xs font-bold">Best</span>
                                </motion.div>
                            </div>
                            <motion.div
                                className="mt-2 w-20 h-32 bg-yellow-300 rounded-md mx-auto flex flex-col items-center justify-end"
                                initial={{ height: 0 }}
                                animate={{ height: 128 }}
                                transition={{ delay: 1.8, duration: 0.5 }}
                            >
                                <div className="w-16 h-6 bg-yellow-400 mb-1 rounded-sm"></div>
                            </motion.div>
                        </div>

                        <h3 className="text-xl font-bold mt-2 mb-1 uppercase">Name of Award</h3>
                        <p className="text-gray-600 text-sm text-center mb-3">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <motion.button
                            className="bg-orange-500 text-white px-4 py-1 rounded-md text-sm hover:bg-orange-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Read More
                        </motion.button>
                    </motion.div>

                    {/* Award 2 */}
                    <motion.div
                        className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                        <div className="relative mb-3">
                            <div className="text-center">
                                <motion.svg
                                    className="w-16 h-16 text-yellow-400 mx-auto"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    initial={{ rotate: 180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
                                >
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </motion.svg>
                                <motion.div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full w-10 h-10 flex items-center justify-center"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        repeatType: "reverse",
                                        delay: 0.5
                                    }}
                                >
                                    <span className="text-white text-xs font-bold">Best</span>
                                </motion.div>
                            </div>
                            <motion.div
                                className="mt-2 w-20 h-32 bg-yellow-300 rounded-md mx-auto flex flex-col items-center justify-end"
                                initial={{ height: 0 }}
                                animate={{ height: 128 }}
                                transition={{ delay: 2, duration: 0.5 }}
                            >
                                <div className="w-16 h-6 bg-yellow-400 mb-1 rounded-sm"></div>
                            </motion.div>
                        </div>

                        <h3 className="text-xl font-bold mt-2 mb-1 uppercase">Name of Award</h3>
                        <p className="text-gray-600 text-sm text-center mb-3">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <motion.button
                            className="bg-orange-500 text-white px-4 py-1 rounded-md text-sm hover:bg-orange-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Read More
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}