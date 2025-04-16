import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from "../../asset/royal-img-2.webp";
import img2 from "../../asset/surya-2 (1).webp";
import img3 from "../../asset/gold.webp";
import img4 from "../../asset/Hills-2.webp";
import img5 from "../../asset/prime-2.png";
import Hero from '../Home/Hero';

export default function Services() {
    const navigate = useNavigate();
    const [projects] = useState([
        {
            id: 1,
            name: 'Malbar Royal',
            description: 'Adress of the land and avaliability',
            image: img1,
            path: '/Malbar-royal'
        },
        {
            id: 2,
            name: 'Surya Kiran Bungalows',
            description: 'Adress of the land and avaliability',
            image: img2,
            path: '/Surya-kiran-bungalows'
        },
        {
            id: 3,
            name: 'Malbar Gold',
            description: 'Adress of the land and avaliability',
            image: img3,
            path: '/Malbar-gold'
        },
        {
            id: 4,
            name: 'Malbar Hills',
            description: 'Adress of the land and avaliability',
            image: img4,
            path: '/Malbar-hills'
        },
        {
            id: 5,
            name: 'Malbar Prime',
            description: 'Adress of the land and avaliability',
            image: img5,
            path: '/Malbar-Prime'
        },
    ]);

    const handleViewMore = (path) => {
        navigate(path);
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (

        <div className="max-w-6xl mx-auto px-4 py-8">

            {<Hero />}
            {/* Header Section */}
            <motion.div
                className="mb-9 max-w-2xl mt-20 ml-28"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* <h1 className="text-3xl font-bold mb-4">Residential</h1> */}
                <p className="text-gray-600 mb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                    It has been the industry's standard dummy text ever since the 1500s.
                </p>
                <p className="text-gray-600 mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                    It has been the industry's standard dummy text ever since the 1500s.
                </p>

                {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Learn More
                </button> */}
            </motion.div>

            {/* All Projects Section */}
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-6">All projects</h2>
            </div>

            {/* Projects Grid with Framer Motion */}
            <motion.div
                className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={item}
                        className="relative overflow-hidden rounded-lg group cursor-pointer h-96"
                    >
                        {/* Image */}
                        <motion.img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Overlay with text at bottom left */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                            initial={{ opacity: 0, y: 50 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                                <p className="text-white/90 mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => handleViewMore(project.path)}
                                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded"
                                    >
                                        Enquire Now
                                    </button>
                                    <button
                                        onClick={() => handleViewMore(project.path)}
                                        className="bg-transparent border border-white text-white text-sm font-medium py-2 px-4 rounded hover:bg-white/10"
                                    >
                                        View Gallery
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}