import React, { useState, useEffect } from 'react';
import img1 from "../../asset/cartoon.png";

const Projectcard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "John Smith",
            title: "Marketing Director",
            image: img1,
            text: "Working with this team transformed our online presence. Their attention to detail and commitment to excellence truly sets them apart from other agencies we've partnered with."
        },
        {
            id: 2,
            name: "Sarah Johnson",
            title: "Product Manager",
            image: img1,
            text: "The level of creativity and technical expertise demonstrated by this team exceeded our expectations. Our project was delivered on time and the results have been outstanding."
        },
        {
            id: 3,
            name: "Michael Chen",
            title: "CEO, TechSolutions",
            image: img1,
            text: "I've worked with many development teams over the years, but none have matched the professionalism and quality of work that this team consistently delivers."
        },
        {
            id: 4,
            name: "Emily Rodriguez",
            title: "Design Lead",
            image: img1,
            text: "Their collaborative approach made the entire process smooth and enjoyable. They truly understand how to bring a vision to life while adding their own expertise."
        },
        {
            id: 5,
            name: "David Kim",
            title: "Operations Manager",
            image: img1,
            text: "From initial concept to final delivery, the team demonstrated exceptional skill and dedication. I wouldn't hesitate to recommend them to anyone seeking top-tier service."
        }
    ];

    const getWrappedIndex = (index) => {
        const totalItems = testimonials.length;
        return ((index % totalItems) + totalItems) % totalItems;
    };

    // Get visible testimonials based on screen size
    const getVisibleTestimonials = () => {
        if (isMobile) {
            // Show only 1 card on mobile
            return [testimonials[getWrappedIndex(activeIndex)]];
        } else {
            // Show 3 cards on larger screens
            return [
                testimonials[getWrappedIndex(activeIndex)],
                testimonials[getWrappedIndex(activeIndex + 1)],
                testimonials[getWrappedIndex(activeIndex + 2)]
            ];
        }
    };

    // Check screen size on mount and when window resizes
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
        };

        // Check initially
        checkScreenSize();

        // Set up listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Clean up
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(prev => getWrappedIndex(prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(prev => getWrappedIndex(prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleDotClick = (index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        What Our <span className="text-orange-500"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>Clients</span> Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear what our clients have to say about their experience working with our team.
                    </p>
                </div>

                <div className="relative">
                    {/* Navigation arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white rounded-full shadow-lg p-2 md:p-3 z-10 text-orange-500 hover:bg-orange-50 transition-all"
                        aria-label="Previous testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white rounded-full shadow-lg p-2 md:p-3 z-10 text-orange-500 hover:bg-orange-50 transition-all"
                        aria-label="Next testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Testimonials Cards */}
                    <div className={`flex justify-center md:justify-between items-stretch gap-4 md:gap-6 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                        {visibleTestimonials.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className={`w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${isAnimating ? 'transform scale-95' : 'transform scale-100'}`}
                            >
                                <div className="h-2 bg-orange-200"></div>
                                <div className="p-6">
                                    {/* Quote icon */}
                                    <div className="flex justify-end mb-4">
                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.55 26.25C13.65 26.25 15.4 27.09 16.8 28.77C18.2 30.45 18.9 32.34 18.9 34.44C18.9 36.82 18.06 38.85 16.38 40.53C14.7 42.21 12.67 43.05 10.29 43.05C7.35 43.05 5.04 41.79 3.36 39.27C1.68 36.75 0.84 33.18 0.84 28.56C0.84 24.78 1.54 21.21 2.94 17.85C4.34 14.49 6.16 11.76 8.4 9.66C10.64 7.56 13.02 6.09 15.54 5.25L18.9 11.34C16.38 12.46 14.28 14.28 12.6 16.8C10.92 19.32 10.08 22.05 10.08 24.99C10.22 25.13 10.57 25.41 11.13 25.83C11.69 26.11 11.97 26.25 11.55 26.25ZM32.55 26.25C34.65 26.25 36.4 27.09 37.8 28.77C39.2 30.45 39.9 32.34 39.9 34.44C39.9 36.82 39.06 38.85 37.38 40.53C35.7 42.21 33.67 43.05 31.29 43.05C28.35 43.05 26.04 41.79 24.36 39.27C22.68 36.75 21.84 33.18 21.84 28.56C21.84 24.78 22.54 21.21 23.94 17.85C25.34 14.49 27.16 11.76 29.4 9.66C31.64 7.56 34.02 6.09 36.54 5.25L39.9 11.34C37.38 12.46 35.28 14.28 33.6 16.8C31.92 19.32 31.08 22.05 31.08 24.99C31.22 25.13 31.57 25.41 32.13 25.83C32.69 26.11 32.97 26.25 32.55 26.25Z" fill="#FFE1CC" />
                                        </svg>
                                    </div>

                                    {/* Testimonial text */}
                                    <p className="text-gray-700 mb-6 min-h-12 md:min-h-16">{item.text}</p>

                                    <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-orange-100">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold text-lg">{item.name}</h3>
                                            <p className="text-orange-500">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-8 md:mt-10">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-orange-500 w-4 md:w-6'
                                    : 'bg-gray-300 hover:bg-orange-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projectcard;