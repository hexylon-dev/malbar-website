import React from 'react';
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

const Savitamalbar = () => {
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
        }
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* Property listings */}
                <motion.div
                    className="mb-16 lg:px-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-4 ml-12"
                        variants={slideInFromLeft}
                    >
                        Malbar Royal
                    </motion.h2>
                    <motion.p
                        className="text-gray-700 mb-2 ml-12"
                        variants={itemVariants}
                    >
                        <strong>Address :</strong> Raspan Cross Rd, Opp. Gunjan Garden Restaurant, Near Bhakti Circle, Nikol, North East, Ahmedabad
                    </motion.p>
                    <motion.p
                        className="text-gray-700 mb-4 ml-12"
                        variants={itemVariants}
                    >
                        Malbar Royal is a sophisticated and luxurious retreat that reflects that magical merging of inspiration and architecture. Living is easy in this impressive, generously spacious residence. The project is architected by Savita. The development is located at Nikol, Ahmedabad.ing value
                    </motion.p>
                    <motion.button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded ml-12"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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

                {/* Testimonials slider at the bottom */}
                <motion.div
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <motion.h2
                        className="text-3xl font-semibold text-center text-orange-500"
                        variants={itemVariants}
                    >
                        What Our Clients Say
                    </motion.h2>
                    <Projectcard />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <Contact />
                </motion.div>
            </div>
        </div>
    );
};

export default Savitamalbar;