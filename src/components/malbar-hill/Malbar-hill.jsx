import React, { useEffect } from 'react';
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
    const testimonialControls = useAnimation();
    const contactControls = useAnimation();

    const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
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
                        Malabar Hills
                    </motion.h2>

                    <div className="px-2 sm:px-0">
                        <motion.p
                            className="text-gray-700 mb-2 sm:ml-14"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <strong>Address :</strong> Opposite Shahi Kutir, MG Road, Nikol, North East, Ahmedabad
                        </motion.p>
                        <motion.p
                            className="text-gray-700 mb-4 sm:ml-14"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            Malabar Hills is the up and coming project in Nikol, Ahmedabad. Due to its prime location in the heart of the city, the project presents an unprecedented opportunity to become a proud owner of property in this eminent location in the city.
                        </motion.p>
                    </div>

                    <motion.button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded mx-2 sm:ml-14"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Enquire Now
                    </motion.button>
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

                {/* Project Card or Testimonials */}
                <motion.div
                    ref={testimonialRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={testimonialControls}
                    className="mt-12 sm:mt-20"
                >
                    <Projectcard />
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
