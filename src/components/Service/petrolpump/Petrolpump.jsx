"use client"
import React from "react";
import img1 from "../../../asset/image 23.webp";
import { motion } from "framer-motion";
import img2 from "../../../asset/petrol-pump.webp"

const cardVariants = {
    offscreen: {
        y: 100,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "backOut"
        }
    }
};

export default function AchievementsCard() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section with Petrol Pump Image */}
            <motion.div
                className="w-full relative mb-9"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.img
                    src={img2}
                    alt="Bricks Building Exterior"
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '90vh' }}
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 bg-white rounded-tl-lg p-8 md:p-8 lg:p-8"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-black">PETROL PUMP</h2>
                </motion.div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
                className="max-w-6xl mx-auto p-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <motion.h1
                    className="text-[40px] md:text-4xl font-bold text-center tracking-wider mb-16 mt-20"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    ACHIEVEMENTS
                </motion.h1>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-stretch mt-20 md:mt-36">
                    {/* First Award Card */}
                    <motion.div
                        className="relative flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-sm px-6 py-8 w-full max-w-lg"
                        variants={cardVariants}
                    >
                        {/* Trophy image with overflow effect */}
                        <div className="relative flex-shrink-0 md:mr-6 -mt-24 md:-mt-32 mb-4 md:mb-0">
                            <div className="relative">
                                <motion.img
                                    src={img1}
                                    alt="Gold trophy"
                                    className="h-48 md:h-60 w-auto object-contain relative z-10"
                                    style={{
                                        transform: 'translateY(30%)', // 30% outside (70% inside)
                                        marginBottom: '-30%' // Compensate for the overlap
                                    }}
                                    variants={imageVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                        {/* Text content */}
                        <div className="flex-grow text-center md:text-left mt-4 md:mt-0">
                            <motion.h2
                                className="text-2xl font-bold mb-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                NAME OF AWARD
                            </motion.h2>
                            <motion.p
                                className="mb-4 text-gray-700"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </motion.p>
                            <motion.button
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                View Glimpse
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Second Award Card */}
                    <motion.div
                        className="relative flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-sm px-6 py-8 w-full max-w-lg"
                        variants={cardVariants}
                    >
                        {/* Trophy image with overflow effect */}
                        <div className="relative flex-shrink-0 md:mr-6 -mt-24 md:-mt-32 mb-4 md:mb-0">
                            <div className="relative">
                                <motion.img
                                    src={img1}
                                    alt="Gold trophy"
                                    className="h-48 md:h-60 w-auto object-contain relative z-10"
                                    style={{
                                        transform: 'translateY(30%)', // 30% outside (70% inside)
                                        marginBottom: '-30%' // Compensate for the overlap
                                    }}
                                    variants={imageVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                        {/* Text content */}
                        <div className="flex-grow text-center md:text-left mt-4 md:mt-0">
                            <motion.h2
                                className="text-2xl font-bold mb-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                NAME OF AWARD
                            </motion.h2>
                            <motion.p
                                className="mb-4 text-gray-700"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </motion.p>
                            <motion.button
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                View Glimpse
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}