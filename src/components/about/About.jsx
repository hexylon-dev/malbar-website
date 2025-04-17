import React from 'react';
import { motion } from 'framer-motion';
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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[800px] w-full"
            >
                <img
                    src={img2}
                    alt="Modern Building"
                    className="w-full h-full object-cover mt-2"
                />
            </motion.div>

            {/* About Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"  // Changed from text-center to text-left
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Malbar</h2>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's
                        standard dummy text ever since the 1500s.
                    </p>
                </motion.div>

                {/* Our Story Section */}
                <div className="mt-24">
                    <motion.h3
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl  text-center text-gray-900 mb-16 font-semibold"
                    >
                        Our Story
                    </motion.h3>

                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-12 mb-24 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            <motion.div
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="flex-1"
                            >
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 space-y-6"
                            >
                                <h4 className="text-2xl font-semibold text-gray-900">{section.title}</h4>
                                {section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-600">
                                        {paragraph}
                                    </p>
                                ))}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
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