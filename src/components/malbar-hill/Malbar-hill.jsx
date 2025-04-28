import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';
import imgcoursel from '../../asset/Hills-coursel.png';
import img1 from "../../asset/Hills-1.webp";
import img2 from "../../asset/Hills-2.webp";
import img3 from "../../asset/Hills-3.webp";
import img4 from "../../asset/Hills-4.webp";
import img5 from "../../asset/Hills-5.webp";
import Projectcard from '../Home/ProjectCard';

const Malbarhills = () => {
    const [activeTab, setActiveTab] = useState('amenities');

    useEffect(() => {
        // Scroll to top when the page loads
        window.scrollTo(0, 0);
    }, []);

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

    const headerControls = useAnimation();
    const imageControls = useAnimation();
    const infoCardControls = useAnimation();
    const testimonialControls = useAnimation();
    const contactControls = useAnimation();

    const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [infoCardRef, infoCardInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [testimonialRef, testimonialInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (headerInView) {
            headerControls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" }
            });
        }
    }, [headerInView, headerControls]);

    useEffect(() => {
        if (imageInView) {
            imageControls.start({
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, ease: "easeOut" }
            });
        }
    }, [imageInView, imageControls]);

    useEffect(() => {
        if (infoCardInView) {
            infoCardControls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" }
            });
        }
    }, [infoCardInView, infoCardControls]);

    useEffect(() => {
        if (testimonialInView) {
            testimonialControls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" }
            });
        }
    }, [testimonialInView, testimonialControls]);

    useEffect(() => {
        if (contactInView) {
            contactControls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" }
            });
        }
    }, [contactInView, contactControls]);

    return (
        <div className="min-h-screen pt-16 sm:pt-20 overflow-hidden">
            <div className="container mx-auto px-4 py-4 sm:py-8">
                {/* Header Section */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={headerControls}
                    className="mb-8 sm:mb-16 lg:px-32"
                >
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold mb-4 mx-2 sm:ml-14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Malbar Hills – A Refreshing Escape within the City
                    </motion.h2>

                    <div className="px-2 sm:px-0">
                        <motion.p
                            className="text-gray-700 mb-2 sm:ml-14"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {/* <strong>Address :</strong> Opposite Shahi Kutir, MG Road, Nikol, North East, Ahmedabad */}
                        </motion.p>
                        <motion.p
                            className="text-gray-700 mb-4 sm:ml-14"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            As the first project under the Malbar name,<b> Malbar Hills</b> carried forward the vision of offering well-planned residential spaces in Nikol. This 4 BHK villa community is thoughtfully located in one of the city's growing residential areas. With just 50 villas, it offers a peaceful lifestyle with open spaces and greenery, all while keeping essential services close by. It's designed for those who appreciate calm surroundings without being far from the city's convenience.
                        </motion.p>
                    </div>
                    {/* 
                    <motion.button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded mx-2 sm:ml-14"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Enquire Now
                    </motion.button> */}
                </motion.div>

                {/* Image Slider */}
                <motion.div
                    ref={imageRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={imageControls}
                    className="mb-8 sm:mb-12"
                >
                    <ImageSlider images={images} />
                </motion.div>

                {/* Info Tab Card */}
                <motion.div
                    ref={infoCardRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={infoCardControls}
                    className="mb-12 sm:mb-16 lg:px-32"
                >
                    <div className="bg-white rounded-lg overflow-hidden">
                        {/* Tab Buttons */}
                        <div className="flex border-b">
                            <button
                                className={`flex-1 py-4 px-6 text-center font-medium text-gray-700 ${activeTab === 'amenities'
                                    ? 'border-b-2 border-orange-400'
                                    : 'hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveTab('amenities')}
                            >
                                Key Amenities
                            </button>
                            <button
                                className={`flex-1 py-4 px-6 text-center font-medium text-gray-700 ${activeTab === 'location'
                                    ? 'border-b-2 border-orange-400'
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
                                    <h3 className="text-xl font-semibold mb-4 text-orange-500"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>Key Amenities</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            "24x7 Water Supply",
                                            "Covered Car Parking",
                                            "Party Area",
                                            "Rainwater Harvesting",
                                            "Power Backup",
                                            "Street Lighting",
                                            "Gated Community",
                                            "Vastu/Feng Shui Compliant"
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
                                    <h3 className="text-xl font-semibold mb-4 text-orange-500"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>Distance from Key Locations:</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center  pb-2">
                                            <span className="font-medium">Ahmedabad City Center</span>
                                            <span>15 km</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-2">
                                            <span className="font-medium">Narol Naroda Road</span>
                                            <span>5.6 km</span>
                                        </div>
                                        <div className="flex justify-between items-center  pb-2">
                                            <span className="font-medium">Asarwa Railway Station</span>
                                            <span>7.9 km via (Naroda Road)</span>
                                        </div>
                                        <div className="flex justify-between items-center  pb-2">
                                            <span className="font-medium">Ahmedabad Railway Station</span>
                                            <span>8.6 km (via Gam Road)</span>
                                        </div>
                                        <div className="flex justify-between items-center  pb-2">
                                            <span className="font-medium">SVP International Airport</span>
                                            <span>12 km</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mt-6 mb-3">Nearby Localities:</h3>
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

                {/* Project Card or Testimonials */}
                <motion.div
                    ref={testimonialRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={testimonialControls}
                    className="mt-12 sm:mt-20"
                >
                    {/* <Projectcard /> */}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    ref={contactRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={contactControls}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    );
};

export default Malbarhills;