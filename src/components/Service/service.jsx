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
            id: 1,
            name: 'Malbar Royal',
            description: 'Address of the land and availability',
            image: img1,
            path: '/Malbar-royal'
        },
        {
            id: 2,
            name: 'Surya Kiran Bungalows',
            description: 'Address of the land and availability',
            image: img2,
            path: '/Surya-kiran-bungalows'
        },
        {
            id: 3,
            name: 'Malbar Gold',
            description: 'Address of the land and availability',
            image: img3,
            path: '/Malbar-gold'
        },
        {
            id: 4,
            name: 'Malbar Hills',
            description: 'Address of the land and availability',
            image: img4,
            path: '/Malbar-hills'
        },
        {
            id: 5,
            name: 'Malbar Prime',
            description: 'Address of the land and availability',
            image: img5,
            path: '/Malbar-Prime'
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
                    className="mb-9 max-w-2xl mt-10 md:mt-20 mx-auto md:ml-28"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isHeaderInView ? "visible" : "hidden"}
                >
                    <p className="text-gray-600 mb-5 text-center md:text-left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br className="hidden md:block" />
                        It has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className="text-gray-600 mb-4 text-center md:text-left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br className="hidden md:block" />
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
                                className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 md:p-6"
                                variants={{
                                    rest: isMobile ? { opacity: 1 } : { opacity: 0 },
                                    hover: { opacity: 1 }
                                }}
                                transition={{ duration: 0.3 }}
                            >
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
                                            className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm font-medium py-1.5 md:py-2 px-3 md:px-4 rounded"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Enquire Now
                                        </motion.button>
                                        <motion.button
                                            onClick={() => handleViewMore(project.path)}
                                            className="bg-transparent border border-white text-white text-xs md:text-sm font-medium py-1.5 md:py-2 px-3 md:px-4 rounded hover:bg-white/10"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View Gallery
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}