import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';
import imgcoursel from "../../asset/prime-1.webp";
import img1 from "../../asset/prime-1.webp";
import img2 from "../../asset/prime-2.png";
import img3 from "../../asset/prime-3.webp";
import img4 from "../../asset/prime-4.webp";
import img5 from "../../asset/prime-5.webp";
import Projectcard from '../Home/ProjectCard';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            when: "beforeChildren"
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8 }
    }
};

const slideInFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

const Malbarprime = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeTab, setActiveTab] = useState('features');

    const clients = [
        { name: 'ZARA', logo: '/logos/zara.png' },
        { name: 'ZARA', logo: '/logos/zara.png' },
        { name: 'ZARA', logo: '/logos/zara.png' },
        { name: 'TANISHQ', logo: '/logos/tanishq.png' },
        { name: 'TANISHQ', logo: '/logos/tanishq.png' },
        { name: 'TANISHQ', logo: '/logos/tanishq.png' },
    ];

    const images = [
        {
            id: 1,
            src: imgcoursel,
            alt: "Luxury villa with Mediterranean architecture featuring white facade and ornate balconies"
        },
        {
            id: 2,
            src: img1,
            alt: "Night view of residential villas with lights"
        },
        {
            id: 3,
            src: img2,
            alt: "Row of upscale residential townhouses"
        },
        {
            id: 4,
            src: img3,
            alt: "Side view of residential development"
        },
        {
            id: 5,
            src: img4,
            alt: "Front entrance detail of Mediterranean style home"
        },
        {
            id: 6,
            src: img5,
            alt: "Front entrance detail of Mediterranean style home"
        }
    ];

    const features = [
        "24/7 Water Supply (Hydro Pneumatic System)",
        "Four High-Speed Elevators",
        "Two-Level Parking for 158 Cars",
        "24/7 Security & CCTV",
        "Advanced Fire Safety"
    ];

    const specifications = [
        "Earthquake-resistant RCC Structure",
        "Glazed Aluminum Windows",
        "Vitrified Tile & Granite Flooring",
        "Concealed Premium Plumbing",
        "MS Shutters, Laminated Flush Doors",
        "Interior Putty, Exterior Paint/Cladding",
        "Modular Switches, Concealed Wiring"
    ];

    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* Malbar Prime Section */}
                <motion.div
                    className="mb-16 lg:px-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-4 ml-12"
                        variants={slideInFromLeft}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Malbar Prime: Commercial
                    </motion.h2>
                    <motion.div
                        className="text-gray-700 mb-4 ml-12"
                        variants={itemVariants}
                    >
                        <p>
                            Aimed at today's growing businesses, Malbar Prime Commercial provides well-structured office layouts, terrace lounges, and meeting spaces to support productivity. Its design focuses on function, ease of use, and visual appeal making it a valuable space in the growing Nikol business area.
                        </p>
                    </motion.div>
                    <motion.button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded ml-12"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = '/contact'}
                    >
                        Enquire Now
                    </motion.button>
                </motion.div>

                {/* Image slider */}
                <motion.div
                    className="mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <ImageSlider images={images} />
                </motion.div>

                {/* Features and Specifications Tabs Card */}
                <motion.div
                    className="mb-16 max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        variants={fadeIn}
                    >
                        {/* Tabs */}
                        <div className="flex border-b">
                            <button
                                className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'features' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveTab('features')}
                            >
                                Prime Features
                            </button>
                            <button
                                className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'specifications' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveTab('specifications')}
                            >
                                Specifications
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-6">
                            {activeTab === 'features' ? (
                                <motion.ul
                                    className="space-y-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            ) : (
                                <motion.ul
                                    className="space-y-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {specifications.map((spec, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {spec}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Our Clients Section */}
                <motion.div
                    className="text-center my-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        variants={slideInFromRight}
                    >
                        Our clients
                    </motion.h2>
                    <motion.p
                        className="text-gray-500 mb-8"
                        variants={itemVariants}
                    >
                        The buyers of the shops from our commercial areas
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap justify-center gap-6"
                        variants={containerVariants}
                    >
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-100 rounded-xl shadow-md p-6 w-24 h-24 flex items-center justify-center"
                                variants={itemVariants}
                                whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xrNZ2-JzPynIh79ud05VHkWN8d_ZhaiIXA&s"
                                    alt={client.name}
                                    className="h-10 object-contain"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-100px" }}
                    variants={fadeIn}
                >
                    {/* <Projectcard /> */}
                </motion.div>

                {/* Contact form */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    );
};

export default Malbarprime;