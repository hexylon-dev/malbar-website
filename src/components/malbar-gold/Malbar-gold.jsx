import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';
import imgcoursel from "../../asset/gold-1.png"
import img1 from "../../asset/gold-1.png"
import img2 from "../../asset/gold-2.webp"
import img3 from "../../asset/gold-3.webp"
import img4 from "../../asset/gold-4.webp"
import img5 from "../../asset/gold-5.webp"
import Projectcard from '../Home/ProjectCard';

const Malbargold = () => {
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

    // Animation controls for different sections
    const headerControls = useAnimation();
    const contentControls = useAnimation();
    const imageControls = useAnimation();
    const testimonialControls = useAnimation();
    const contactControls = useAnimation();

    // Intersection observers for different sections
    const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [imageRef, imageInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [testimonialRef, testimonialInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });

    // Trigger animations when sections come into view
    useEffect(() => {
        if (headerInView) {
            headerControls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" }
            });
        }
    }, [headerInView, headerControls]);

    useEffect(() => {
        if (contentInView) {
            contentControls.start("visible");
        }
    }, [contentInView, contentControls]);

    useEffect(() => {
        if (imageInView) {
            imageControls.start({
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" }
            });
        }
    }, [imageInView, imageControls]);

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

    // Variants for staggered animations
    const contentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen pt-24 sm:pt-28 overflow-hidden">
            <div className="container mx-auto px-4 py-8">
                {/* Property listings with animation */}
                <motion.div
                    className="mb-16 lg:px-32"
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerControls}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-4 ml-14"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Malbar Gold
                    </motion.h2>

                    <motion.div
                        ref={contentRef}
                        variants={contentVariants}
                        initial="hidden"
                        animate={contentControls}
                    >
                        <motion.p
                            className="text-gray-700 mb-2 ml-14"
                            variants={itemVariants}
                        >
                            <strong>Address :</strong> Survey No. 496, Gangotri Circle, to, Police Station Road, near Balmukund Bungalows, beside Lilivadi Restaurant, Nikol, Ahmedabad, Gujarat 382350
                        </motion.p>

                        <motion.p
                            className="text-gray-700 mb-4 ml-14"
                            variants={itemVariants}
                        >
                            Bhoomi Malbar Gold is an unmatched Residential property located in Nikol, Ahmedabad. The project offers plenty of benefits that includes prime location, comfortable and lavish lifestyle, great amenities, healthy surroundings and high return.
                            Location Advantages : Bhoomi Malbar Gold is strategically located and provides direct connectivity to nearly all other major points in and around Ahmedabad. It is one of the most reputable address of the city with easy access to many famed schools, shopping areas, hospitals, recreational areas, public gardens and several other public amenities.
                        </motion.p>

                        <motion.button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded ml-14"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, backgroundColor: "#dd6b20" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enquire Now
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Image slider with animation */}
                <motion.div
                    className="mb-12"
                    ref={imageRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={imageControls}
                >
                    <ImageSlider images={images} />
                </motion.div>

                {/* Testimonials slider with animation */}
                <motion.div
                    className="mt-20"
                    ref={testimonialRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={testimonialControls}
                >
                    <motion.h2
                        className="text-3xl font-semibold text-center text-orange-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        What Our Clients Say
                    </motion.h2>
                    <Projectcard />
                </motion.div>

                {/* Contact form with animation */}
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

export default Malbargold;