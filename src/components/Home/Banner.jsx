import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img1 from '../../asset/Frame 11 (7) (1).webp';

const ImageBanner = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="w-full relative py-5 md:py-10 overflow-hidden">
            {/* Image container with aspect ratio control */}
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8]">
                <motion.img
                    src={img1}
                    alt="Decorative"
                    className="absolute w-full h-full object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                {/* Button container with bottom-center positioning */}
                <motion.div
                    className="absolute bottom-4 sm:bottom-8 md:bottom-10 w-full flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                >
                    <a
                        href="/contact"
                        className="bg-[#ff6e00] hover:bg-[#e06200] text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded font-medium border-none cursor-pointer transition-colors duration-300"
                    >
                        Enquire Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ImageBanner;