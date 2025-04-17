import React, { useState, useEffect } from 'react';
import img1 from "../../asset/cartoon.png"

const Projectcard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Parth",
            title: "Lead designer",
            image: img1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
        },
        {
            id: 2,
            name: "Parth",
            title: "Lead designer",
            image: img1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim"
        },
        {
            id: 3,
            name: "Parth",
            title: "Lead designer",
            image: img1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
        },
        {
            id: 4,
            name: "Parth",
            title: "Lead designer",
            image: img1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
        },
        {
            id: 5,
            name: "Parth",
            title: "Lead designer",
            image: img1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            handleDotClick((activeIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex, testimonials.length]);

    const handleDotClick = (index) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setActiveIndex(index);

        // Reset animation state
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">
                    What <span className="text-orange-500">client</span> say about us
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Any question or remarks? Just write us a message!
                </p>

                <div className="relative">
                    <div className="flex justify-between items-center">
                        {/* Left testimonial */}
                        <div className={`w-1/3 relative transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100'}`}>
                            <div className="bg-white p-6 relative z-10">
                                <div className="flex flex-col items-center mb-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-blue-100">
                                        <img src={testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].image} alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-medium text-lg">{testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].name}</h3>
                                    <p className="text-gray-500 text-sm">{testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].title}</p>
                                </div>
                                <p className="text-sm text-gray-600 text-center">
                                    {testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].text}
                                </p>
                            </div>
                            {/* Orange curved shape */}
                            <div className="absolute bottom-0 right-0 w-3/4 h-24">
                                <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                                    <path d="M300,0 L300,100 L100,100 C150,100 300,70 300,0 Z" fill="#FF6B00" />
                                </svg>
                            </div>
                        </div>

                        {/* Center testimonial */}
                        <div className={`w-1/3 relative mx-4 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            <div className="bg-white p-8 relative z-10">
                                <div className="flex flex-col items-center mb-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-blue-100">
                                        <img src={testimonials[activeIndex].image} alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-medium text-lg">{testimonials[activeIndex].name}</h3>
                                    <p className="text-gray-500 text-sm">{testimonials[activeIndex].title}</p>
                                </div>
                                <div className="text-center">
                                    <span className="text-orange-500 text-6xl absolute top-32 left-6">"</span>
                                    <p className="text-sm text-gray-600 pl-4">
                                        {testimonials[activeIndex].text}
                                    </p>
                                </div>
                            </div>
                            {/* Orange curved shape */}
                            <div className="absolute -bottom-8 left-0 w-full h-32">
                                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                                    <path d="M0,0 L400,0 L400,60 C250,100 150,100 0,60 Z" fill="#FF6B00" />
                                </svg>
                            </div>
                        </div>

                        {/* Right testimonial */}
                        <div className={`w-1/3 relative transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-x-4' : 'opacity-100'}`}>
                            <div className="bg-white p-6 relative z-10">
                                <div className="flex flex-col items-center mb-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-blue-100">
                                        <img src={testimonials[(activeIndex + 1) % testimonials.length].image} alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-medium text-lg">{testimonials[(activeIndex + 1) % testimonials.length].name}</h3>
                                    <p className="text-gray-500 text-sm">{testimonials[(activeIndex + 1) % testimonials.length].title}</p>
                                </div>
                                <p className="text-sm text-gray-600 text-center">
                                    {testimonials[(activeIndex + 1) % testimonials.length].text}
                                </p>
                            </div>
                            {/* Orange curved shape */}
                            <div className="absolute bottom-0 left-0 w-3/4 h-24">
                                <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                                    <path d="M0,0 L0,100 L200,100 C150,100 0,70 0,0 Z" fill="#FF6B00" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-16">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-orange-500 w-3 h-3'
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