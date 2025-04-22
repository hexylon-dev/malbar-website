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
            title: "What is this",
            content: [
                "What makes us unique is our unwavering commitment to excellence. We're not just a travel agency, we're your trusted travel companion. Discover the reasons why travelers like you choose us for their adventures.",
                "What makes us unique is our unwavering commitment to excellence. We're not just a travel agency, we're your trusted travel companion. Discover the reasons why travelers like you choose us for their adventures."
            ],
            image: img1,
        },
        {
            title: "Our Approach",
            content: [
                "Our innovative approach sets us apart from the competition. We combine cutting-edge technology with personalized service to deliver exceptional results.",
                "Every project is treated with the utmost care and attention to detail, ensuring complete satisfaction for our clients."
            ],
            image: img1,
        },
        {
            title: "Our Results",
            content: [
                "The proof is in our portfolio of successful projects and satisfied clients. We measure our success by the impact we make.",
                "Our track record speaks for itself, with numerous awards and recognitions in our industry."
            ],
            image: img1
        },
        {
            title: "Our Results",
            content: [
                "The proof is in our portfolio of successful projects and satisfied clients. We measure our success by the impact we make.",
                "Our track record speaks for itself, with numerous awards and recognitions in our industry."
            ],
            image: img1
        },
        {
            title: "Our Results",
            content: [
                "The proof is in our portfolio of successful projects and satisfied clients. We measure our success by the impact we make.",
                "Our track record speaks for itself, with numerous awards and recognitions in our industry."
            ],
            image: img1
        },
        {
            title: "Our Results",
            content: [
                "The proof is in our portfolio of successful projects and satisfied clients. We measure our success by the impact we make.",
                "Our track record speaks for itself, with numerous awards and recognitions in our industry."
            ],
            image: img1
        },
        {
            title: "Our Results",
            content: [
                "The proof is in our portfolio of successful projects and satisfied clients. We measure our success by the impact we make.",
                "Our track record speaks for itself, with numerous awards and recognitions in our industry."
            ],
            image: img1
        }
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
                    <h2 className="text-[50px] font-bold text-gray-900 mb-6"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>About Malbar</h2>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's
                        standard dummy text ever since the 1500s.
                    </p>
                </motion.div>

                {/* Our Story Section */}
                <div className="mt-24">
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false }}
                            className="tracking-[0.3em] text-blue-500 text-sm mb-2"
                        >
                            Our &nbsp; Story
                        </motion.p>
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

                                <motion.button
                                    variants={textItemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "#c2410c"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
                                >
                                    Enquire Now
                                </motion.button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            <Contact />
        </div>
    );
}

export default PortfolioPage;