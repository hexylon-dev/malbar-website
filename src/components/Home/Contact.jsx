import { useState, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const contactRef = useRef(null);
    const isInView = useInView(contactRef, { once: true, margin: "-100px" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: {
            y: 50,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6" ref={contactRef}>
            <motion.div
                className="text-center mb-6 mt-16"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-2xl font-bold text-orange-500"
                    style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h1>
                <p className="text-sm text-gray-600 mt-1">Any question or remarks? Just write us a message!</p>
            </motion.div>

            <motion.div
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
            >
                {/* Left Orange Section */}
                <motion.div
                    className="bg-orange-500 text-white p-8 md:w-1/3 relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className="mb-8" variants={itemVariants}>
                        <h2 className="font-bold text-xl mb-2">Contact information</h2>
                        <p className="text-sm opacity-80">Say something to start a live chat!</p>
                    </motion.div>

                    <motion.div className="space-y-6" variants={containerVariants}>
                        <motion.div className="flex items-center" variants={itemVariants}>
                            <div className="w-6 mr-4">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span>55555</span>
                        </motion.div>

                        <motion.div className="flex items-center" variants={itemVariants}>
                            <div className="w-6 mr-4">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span>555@gmail.com</span>
                        </motion.div>

                        <motion.div className="flex items-center" variants={itemVariants}>
                            <div className="w-6 mr-4">
                                <MapPin className="w-5 h-5" />
                            </div>
                            {/* <span>3671 Roosevelt, Richmond, California</span> */}
                        </motion.div>
                    </motion.div>

                    {/* Decorative circle */}
                    <motion.div
                        className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full -mb-16 -mr-16 opacity-20"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                    ></motion.div>
                </motion.div>

                {/* Right Form Section */}
                <motion.div
                    className="p-8 md:w-2/3"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <form onSubmit={handleSubmit}>
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" variants={containerVariants}>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                    placeholder="John"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                    placeholder="Doe"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" variants={containerVariants}>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                    placeholder="example@email.com"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                    placeholder="+01 XXXX XXXXX"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div className="mb-8" variants={itemVariants}>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                placeholder="Write your message..."
                            ></textarea>
                        </motion.div>

                        <motion.div
                            className="text-right"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <button
                                type="submit"
                                className="px-6 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
}