import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Contact from '../../components/Home/Contact';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';
import imgcoursel from '../../asset/royal-coursel.png';
import img1 from '../../asset/royal-img-1.webp';
import img2 from '../../asset/royal-img-2.webp';
import img3 from '../../asset/royal-img-3.webp';
import img4 from '../../asset/royal-img-4 (1).webp';
import Projectcard from '../Home/ProjectCard';

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

const Savitamalbar = () => {
    const [activeTab, setActiveTab] = useState('amenities');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [
        { id: 1, src: imgcoursel, alt: "Luxury villa with Mediterranean architecture" },
        { id: 2, src: img1, alt: "Night view of residential villas with lights" },
        { id: 3, src: img2, alt: "Row of upscale residential townhouses" },
        { id: 4, src: img3, alt: "Side view of residential development" },
        { id: 5, src: img4, alt: "Front entrance detail of Mediterranean style home" }
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* Property listings */}
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
                        Malbar Royal – Where Comfort Meets Class
                    </motion.h2>
                    <motion.p className="text-gray-700 mb-2 ml-12" variants={itemVariants}>
                        {/* <strong>Address :</strong> Raspan Cross Rd, Opp. Gunjan Garden Restaurant, Near Bhakti Circle, Nikol, North East, Ahmedabad */}
                    </motion.p>
                    <motion.p className="text-gray-700 mb-4 ml-12" variants={itemVariants}>
                        Set within 2 acres, <strong>Malbar Royal </strong> is a 4 BHK villa project that offers both privacy and a sense of community. With only 18 villas, it emphasizes thoughtful design and spacious living, aiming to meet the needs of families looking for comfort in a growing locality like Nikol.
                    </motion.p>
                    {/* <motion.button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded ml-12"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Enquire Now
                    </motion.button> */}
                </motion.div>

                {/* Image slider */}
                <motion.div
                    className="mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                >
                    <ImageSlider images={images} />
                </motion.div>

                {/* Info Tab Card */}
                <motion.div
                    className="mb-12 lg:px-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                    variants={fadeIn}
                >
                    <div className="bg-white rounded-lg  overflow-hidden">
                        {/* Tab Buttons */}
                        <div className="flex border-b"
                        >
                            <button
                                className={`flex-1 py-4 px-6 text-center font-medium text-gray-700 ${activeTab === 'amenities'
                                    ? 'border-b-2 border-orange-500'
                                    : 'hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveTab('amenities')}
                            >
                                Key Amenities
                            </button>
                            <button
                                className={`flex-1 py-4 px-6 text-center font-medium text-gray-700 ${activeTab === 'location'
                                    ? 'border-b-2 border-orange-500'
                                    : 'hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveTab('location')}
                            >
                                Location Details
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-6">
                            {activeTab === 'amenities' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="text-xl font-semibold mb-4"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>Key Amenities</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {[
                                            "Club House",
                                            "Swimming Pool",
                                            "Party Hall",
                                            "CCTV Surveillance",
                                            "Security Cabin",
                                            "Open Car Parking",
                                            "24x7 Water Supply",
                                            "Landscaping & Tree Planting",
                                            "24x7 Security"
                                        ].map((amenity, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-50 p-4 rounded-lg flex items-center justify-center text-center hover:bg-gray-100 transition-colors"
                                            >
                                                <span>{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'location' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="text-xl font-semibold mb-4"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>Distance from Key Locations:</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center  pb-2">
                                            <span className="font-medium">Ahmedabad City Center</span>
                                            <span>15 km</span>
                                        </div>
                                        <div className="flex justify-between items-center  pb-2">
                                            <span className="font-medium">Narol Naroda Road</span>
                                            <span>5.6 km</span>
                                        </div>
                                        <div className="flex justify-between items-center  pb-2">
                                            <span className="font-medium">Asarwa Railway Station</span>
                                            <span>7.9 km via (Naroda Road)</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-2">
                                            <span className="font-medium">Ahmedabad Railway Station</span>
                                            <span>8.6 km (via Gam Road)</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-2">
                                            <span className="font-medium">SVP International Airport</span>
                                            <span>12 km</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mt-6 mb-3"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>Nearby Localities:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Naroda", "Kathwada", "Odhav", "Asarwa"].map((locality, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                                            >
                                                {locality}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials / Projects */}
                {/* <motion.div
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                    variants={fadeIn}
                >
                    <Projectcard />
                </motion.div> */}

                {/* Contact */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                >
                    <Contact />
                </motion.div>
            </div>
        </div>
    );
};

export default Savitamalbar;