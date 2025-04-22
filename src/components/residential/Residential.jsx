import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';
import imgcoursel from "../../asset/surya-coursel.webp";
import img1 from "../../asset/surya-1.png";
import img2 from "../../asset/surya-2 (1).webp";
import img3 from "../../asset/surya-3.png";
import img4 from "../../asset/surya-4.png";
import Projectcard from '../Home/ProjectCard';

const SuryaKiranBungalows = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [
        { id: 1, src: imgcoursel, alt: "Luxury villa" },
        { id: 2, src: img1, alt: "Night view" },
        { id: 3, src: img2, alt: "Townhouses" },
        { id: 4, src: img3, alt: "Side view" },
        { id: 5, src: img4, alt: "Front entrance" }
    ];

    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    className="mb-16 lg:px-32"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Surya Kiran Bungalows
                    </motion.h2>
                    <motion.p
                        className="text-gray-700 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <strong>Address :</strong> New India Colony, Nikol, Nikol Gam, Ahmedabad - 382350
                    </motion.p>
                    <motion.p
                        className="text-gray-700 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Surya Kiran Bungalows in Nikol Gam, Ahmedabad is a company that provides expert property consulting...
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded"
                    >
                        Enquire Now
                    </motion.button>
                </motion.div>

                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{}}
                >
                    <ImageSlider images={images} />
                </motion.div>

                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{}}
                >
                    {/* <h2 className="text-3xl font-semibold text-center text-orange-500"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>What Our Clients Say</h2> */}
                    <Projectcard />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{}}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    );
};

export default SuryaKiranBungalows;
