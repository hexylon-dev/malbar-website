import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import img1 from "../../asset/royal-img-2.webp";
import img2 from "../../asset/surya-2 (1).webp";
import img3 from "../../asset/gold.webp";
import img4 from "../../asset/Hills-2.webp";
import img5 from "../../asset/prime-coursel.webp";
import Hero from '../Home/Hero';

export default function Services() {
    const navigate = useNavigate();
    const controls = useAnimation();
    const headerRef = useRef(null);
    const projectsHeaderRef = useRef(null);
    const projectsContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
    const isProjectsHeaderInView = useInView(projectsHeaderRef, { once: true, amount: 0.3 });
    const isProjectsContainerInView = useInView(projectsContainerRef, { once: true, amount: 0.1 });

    // Check for mobile devices
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isHeaderInView) {
            controls.start("visible");
        }
    }, [isHeaderInView, controls]);

    const [projects] = useState([

        {
            id: 2,
            name: 'Surya Kiran Bungalows',
            description: 'The Beginning of a New Chapter',
            image: img2,
            path: '/Surya-kiran-bungalows'
        },
        {
            id: 4,
            name: 'Malbar Hills',
            description: 'A Refreshing Escape within the City',
            image: img4,
            path: '/Malbar-hills'
        },
        {
            id: 1,
            name: 'Malbar Royal',
            description: 'Where Comfort Meets Class',
            image: img1,
            path: '/Malbar-royal'
        },

        {
            id: 3,
            name: 'Malbar Gold',
            description: 'Designed for Peaceful Living',
            image: img3,
            path: '/Malbar-gold'
        },

        {
            id: 5,
            name: 'Malbar Prime',
            description: 'A Thoughtful Blend of Living and Working',
            image: img5,
            path: '/Malbar-Prime',
            ongoing: true
        },
    ]);

    const handleViewMore = (path) => {
        navigate(path);
    };

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const projectItem = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: i * 0.1
            }
        })
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1 }
        }
    };

    return (
        <div className="w-full">
            {/* Full-width Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full"
            >
                <Hero />
            </motion.div>

            {/* Container for the rest of the content */}
            <div className="max-w-6xl mx-auto px-4 md:px-0">
                {/* Header Section with scroll trigger */}
                <motion.div
                    ref={headerRef}
                    className="mb-9 mt-10 md:mt-20 mx-auto"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isHeaderInView ? "visible" : "hidden"}
                >
                    <p className="mr-28">
                        We began our construction journey in 2006 with Project Suryakiran a landmark that stood for trust, timely delivery, and uncompromised quality. As our vision expanded, we introduced a new identity Malbar in 2012 to represent modern living, innovative architecture, and lifestyle-driven spaces. Malbar isn’t just a name  it’s a promise. Under the Malbar brand, we’ve developed premium residential villas, commercial hubs, and mixed-use spaces, all rooted in smart planning and design. Our projects are strategically located to offer both connectivity and convenience perfect for families, investors, and entrepreneurs. With nearly two decades of experience, we continue to build with the same integrity and passion that started it all.
                    </p>
                </motion.div>

                {/* All Projects Header with scroll reveal */}
                <motion.div
                    ref={projectsHeaderRef}
                    className="mb-9 text-center"
                    variants={fadeIn}
                    initial="hidden"
                    animate={isProjectsHeaderInView ? "visible" : "hidden"}
                >
                    <motion.h1
                        className="text-3xl md:text-[40px] font-bold mb-4 mt-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        animate={isProjectsHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        All projects
                    </motion.h1>
                </motion.div>

                {/* Projects Grid with scroll-triggered animations for each item */}
                <motion.div
                    ref={projectsContainerRef}
                    className="grid grid-cols-1 gap-6 md:gap-8 max-w-[70rem] mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isProjectsContainerInView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={projectItem}
                            custom={index}
                            className="relative overflow-hidden rounded-lg group cursor-pointer h-[40vh] md:h-[55vh]"
                            whileHover={!isMobile ? "hover" : "rest"}
                            initial="rest"
                        >
                            {/* Image with hover effect */}
                            <motion.img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                                variants={{
                                    rest: { scale: 1 },
                                    hover: { scale: 1.05 }
                                }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Overlay - Always visible on mobile, hover on desktop */}
                            <motion.div
                                className={`absolute inset-0 bg-black/30 flex flex-col ${project.ongoing ? 'justify-center items-center' : 'justify-end'} p-4 md:p-6`}
                                variants={{
                                    rest: isMobile ? { opacity: 1 } : { opacity: 0 },
                                    hover: { opacity: 1 }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.ongoing ? (
                                    // Special layout for Malbar Prime (ongoing)
                                    <motion.div
                                        className="text-center"
                                        variants={{
                                            rest: isMobile ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
                                            hover: { y: 0, opacity: 1 }
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.1
                                        }}
                                    >
                                        <motion.button
                                            onClick={() => handleViewMore('/malbar-prime')} // Replace '/ongoing' with your actual path
                                            className="text-white font-bold py-2 px-6 rounded-full mb-4 text-5xl md:text-3xl bg-transparent"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Ongoing
                                        </motion.button>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>{project.name}</h3>
                                        <p className="text-white/90 mb-2 md:mb-4 line-clamp-2 text-sm md:text-base">{project.description}</p>
                                        <div className="flex justify-center mt-2">
                                            <motion.button
                                                onClick={() => handleViewMore(project.path)}
                                                className="text-white bg-orange-500 hover:bg-orange-600 text-xs md:text-sm font-medium py-1.5 md:py-2 px-3 md:px-4 rounded"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                View Gallery
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    // Original layout for other projects
                                    <motion.div
                                        variants={{
                                            rest: isMobile ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
                                            hover: { y: 0, opacity: 1 }
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.1
                                        }}
                                    >
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>{project.name}</h3>
                                        <p className="text-white/90 mb-2 md:mb-4 line-clamp-2 text-sm md:text-base">{project.description}</p>
                                        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-3">
                                            <motion.button
                                                onClick={() => handleViewMore(project.path)}
                                                className="text-white bg-orange-500 hover:bg-orange-600 text-xs md:text-sm font-medium py-1.5 md:py-2 px-3 md:px-4 rounded"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                View Gallery
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}