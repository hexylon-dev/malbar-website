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
                        Suryakiran: The Beginning of a New Chapter
                    </motion.h2>

                    <motion.p
                        className="text-gray-700 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <strong>Address:</strong> New India Colony, Nikol, Nikol Gam, Ahmedabad - 382350
                    </motion.p>

                    <motion.p
                        className="text-gray-700 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Suryakiran marks the beginning of a meaningful journey — the first bungalow project envisioned by <strong>Nrupansh Rameshbhai Dalwadi</strong> in Nikol, Ahmedabad.
                    </motion.p>
                    <motion.p
                        className="text-gray-700 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        With thoughtful design and a focus on livability, this development laid the foundation for future projects in the area. Suryakiran represents a simple yet significant step toward creating homes rooted in reliability and thoughtful planning.
                    </motion.p>
                    <motion.p
                        className="text-gray-700 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                    >
                        The success of Suryakiran inspired the creation of a unified brand <strong>Malbar</strong> — under which all future developments now come together.
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
                    <h2 className="text-3xl font-semibold text-center text-orange-500 mb-6">What Our Clients Say</h2>
                    <Projectcard />
                </motion.div>
                <motion.div
                        className="text-gray-700 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-2 text-orange-600">
                            Distance from Key Locations:
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Ahmedabad City Center – 15 km</li>
                            <li>Narol Naroda Road – 5.6 km</li>
                            <li>Asarwa Railway Station – 7.9 km via Naroda Road</li>
                            <li>Ahmedabad Railway Station – 8.6 km via Gam Road</li>
                            <li>SVP International Airport – 12 km</li>
                            <li>Nearby Localities: Naroda, Kathwada, Odhav, Asarwa</li>
                        </ul>
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
