import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Contact from '../Home/Contact';
import img1 from "../../asset/gold.webp"
import img2 from "../../asset/image.webp"

function PortfolioPage() {
    // Data for the sections
    const sections = [
        {
            title: "The Malbar Story :From Bricks to Buildings",
            descriprtion: "From Foundation to Future: Our Journey",
            content: [
                "The story begins in 1965 when Rameshbhai started a brick furnace in Nikol. His dedication, values, and steady focus laid the foundation of a business built on trust. Every brick reflected a commitment to quality.  Years later, his son Nrupansh carried the legacy forward with a broader vision  stepping into real estate to meet the city’s growing housing needs.What began as brick- making evolved into thoughtful real estate development rooted in the same values."
            ],
            image: img1,
        },
        {
            title: "SURYAKIRAN : The Beginning of a New Chapter",
            content: [
                "SURYAKIRAN was our first villa project and marked the beginning of our journey into real estate development.Thoughtfully designed and built with quality at its core, Suryakiran set a new standard for modern living in Nikol.It reflected our vision to create homes that offer both comfort and class laying the foundation for all our future projects"
            ],
            image: img1,
        },
        {
            title: "MALBAR HILL : A Refreshing Escape within the City",
            content: [
                "   Following the success of Suryakiran, we launched Malbar Hill a premium residential project designed to bring elevated living to the heart of Nikol. With Malbar Hill, we introduced the Malbar brand, which quickly gained recognition for delivering homes that balance elegance and affordability."

            ],
            image: img1
        },
        {
            title: "MALBAR ROYAL : Where Comfort Meets Class",
            content: [
                "Malbar Royal, our third project in Nikol, was crafted to offer a royal touch to everyday living.With its modern design, spacious layouts, and premium features, it stood out as a perfect blend of comfort, elegance, and affordability.This project further strengthened the Malbar brand and our commitment to raising the standard of living in the area."
            ],
            image: img1
        },
        {
            title: "MALBAR GOLD : Designed for Peaceful Living ",
            content: [
                "  As our fourth project in Nikol, Malbar Gold continued our vision of creating well-designed, quality homes. Focused on modern lifestyles, it offered smart layouts, essential amenities, and a peaceful living environment. Malbar Gold added another milestone to the Malbar series, reinforcing our promise of delivering value-driven homes with a premium feel."
            ],
            image: img1
        },
        {
            title: "MALBAR PRIME : A Thoughtful Blend of Living and Working",
            content: [
                "Malbar Prime is our ongoing project in Nikol, and a proud continuation of the Malbar legacy. Designed with a focus on modern architecture, smart planning, and lifestyle comfort, Malbar Prime brings together everything we've learned from our past developments. It's more than just a project it's a step forward in our journey to shape quality living spaces for todays and tomorrow's families."
            ],
            image: img1
        },
    ];

    // Custom hook for section animation
    const ImageReveal = ({ children, index }) => {
        const controls = useAnimation();
        const [ref, inView] = useInView({
            threshold: 0.3,
            triggerOnce: false
        });

        useEffect(() => {
            if (inView) {
                controls.start("visible");
            } else {
                controls.start("hidden");
            }
        }, [controls, inView]);

        const imageVariants = {
            hidden: {
                scale: 0.8,
                opacity: 0,
                rotateY: index % 2 === 0 ? -15 : 15,
                filter: "blur(5px)"
            },
            visible: {
                scale: 1,
                opacity: 1,
                rotateY: 0,
                filter: "blur(0px)",
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                }
            }
        };

        return (
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={imageVariants}
                className="overflow-hidden rounded-lg shadow-xl"
            >
                {children}
            </motion.div>
        );
    };

    // Hero image animation
    const heroVariants = {
        initial: { scale: 1.2, opacity: 0.3 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.8,
                ease: "easeOut"
            }
        }
    };

    // Staggered text animation for content
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const textItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section with enhanced animation */}
            <motion.div
                initial="initial"
                animate="animate"
                variants={heroVariants}
                className="relative h-screen w-full overflow-hidden"
            >
                <img
                    src={img2}
                    alt="Modern Building"
                    className="w-full h-full object-cover"
                />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
                >
                    {/* <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                        Our Portfolio
                    </h1> */}
                </motion.div>
            </motion.div>

            {/* About Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-left"
                >
                    <h2 className="text-[40px] font-bold text-gray-900 mb-6">About Malbar</h2>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        In the heart of Nikol, Ahmedabad, one name stands out when it comes to thoughtful development and real estate progress<strong>Mr. Nrupansh Dalwadi</strong>.
                        <br /><br />
                        With a deep-rooted commitment to the community and a vision to uplift the area, he has played a key role in bringing quality real estate to the forefront.
                        <br /><br />
                        One such proud addition is <strong>Malbar</strong> a step toward refined living, offering not just homes but a better lifestyle for families in Nikol.
                        <br /><br />
                        It's a vision of modern community living where quality, comfort, and connection come together.
                        <br /><br />
                    </p>
                </motion.div>


                {/* Our Story Section */}
                <div className="mt-24">
                    <div className="text-center mb-16">
                        <motion.h3
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false }}
                            style={{ fontSize: "50px", fontFamily: 'Poppins, sans-serif' }}

                            className="text-3xl text-gray-900 font-bold"
                        >
                            Our Story
                        </motion.h3>
                    </div>

                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-12 mb-32 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            <div className="flex-1">
                                <ImageReveal index={index}>
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-[400px] object-cover transform transition-transform duration-700 hover:scale-105"
                                    />
                                </ImageReveal>

                            </div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                variants={textContainerVariants}
                                className="flex-1 space-y-6"
                            >
                                <motion.h4
                                    variants={textItemVariants}
                                    className="text-2xl font-semibold text-gray-900"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    {section.title}
                                </motion.h4>

                                {section.content.map((paragraph, pIndex) => (
                                    <motion.p
                                        key={pIndex}
                                        variants={textItemVariants}
                                        className="text-gray-600"
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}

                                {/* <motion.button
                                    variants={textItemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "#c2410c"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
                                >
                                    Enquire Now
                                </motion.button> */}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-center font-semibold text-gray-600"
            >
                Together the combined vision of Rameshbhai Dalwadi and Nrupansh Rameshbhai Dalwadi bridges tradition with innovation, continuing to build spaces that stand strong and inspire pride.
            </motion.div>
            <Contact />

        </div>
    );
}

export default PortfolioPage;