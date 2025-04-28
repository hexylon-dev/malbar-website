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

const MalbarprimeResidnatil = () => {
    const [activeTab, setActiveTab] = useState('highlights');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const highlights = [
        "Naturally lit, open spaces",
        "Practical and airy layouts",
        "Quality finishes with careful detailing",
        "Access to essential services and green surroundings"
    ];

    const lifestyleFeatures = [
        "Yoga & Meditation Area",
        "Jogging/Cycling Track",
        "Children's Play Area",
        "Banquet Hall",
        "Party Lawn",
        "Water Supply & Power Backup",
        "Lift Access",
        "CCTV Surveillance",
        "Green Landscaping"
    ];

    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* Malbar Prime Introduction Section */}
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
                        Malbar Prime: Residential
                    </motion.h2>
                    <motion.p
                        className="text-gray-700 mb-2 ml-12"
                        variants={itemVariants}
                    >
                        <strong>Address:</strong> Nr. Saurashtra Patel Seva Samaj, Nikol, North East, Ahmedabad
                    </motion.p>
                    <motion.p
                        className="text-gray-700 mb-4 ml-12"
                        variants={itemVariants}
                    >
                        Nestled in Nikol, Malbar Prime is a 1.52-acre residential project offering 3 BHK homes.
                        With smart layouts and quality finishes, each unit is planned for comfort and simplicity.
                        It's a space meant not just to live but to feel at home.
                    </motion.p>
                    <motion.button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded ml-12"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = "/contact"}
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

                {/* Features Tab Section */}
                <motion.div
                    className="mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="flex mb-6">
                            <button
                                className={`flex-1 py-3 text-center font-semibold transition-all duration-300 ${activeTab === 'highlights' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('highlights')}
                            >
                                Highlights
                            </button>
                            <button
                                className={`flex-1 py-3 text-center font-semibold transition-all duration-300 ${activeTab === 'lifestyle' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('lifestyle')}
                            >
                                Lifestyle Features
                            </button>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            {activeTab === 'highlights' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-xl font-semibold mb-4 text-orange-500"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        Project Highlights</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {highlights.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-orange-500 mr-2">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {activeTab === 'lifestyle' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-xl font-semibold mb-4 text-orange-500"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        Lifestyle Amenities</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {lifestyleFeatures.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-orange-500 mr-2">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    </div>
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

export default MalbarprimeResidnatil;