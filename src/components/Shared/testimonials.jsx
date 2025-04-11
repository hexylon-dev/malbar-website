import { useState } from 'react';

export default function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredArrow, setHoveredArrow] = useState(null);

    const themeColors = {
        orange: {
            bg: "bg-orange-500",
            text: "text-orange-500",
            hover: "hover:bg-orange-600",
            fill: "fill-orange-500"
        },
        blue: {
            bg: "bg-blue-500",
            text: "text-blue-500",
            hover: "hover:bg-blue-600",
            fill: "fill-blue-500"
        },
        green: {
            bg: "bg-green-500",
            text: "text-green-500",
            hover: "hover:bg-green-600",
            fill: "fill-green-500"
        }
    };

    const theme = "orange";
    const themeColor = themeColors[theme] || themeColors.orange;

    const testimonials = [
        {
            id: 1,
            author: "Emma Thompson",
            position: "Lead Designer",
            rating: "exceptional",
            text: "The attention to detail and creative approach has completely transformed our brand. The team was responsive and delivered beyond our expectations."
        },
        {
            id: 2,
            author: "Michael Chen",
            position: "Product Manager",
            rating: "outstanding",
            text: "Working with this team was seamless from start to finish. Their ability to understand our vision and execute it flawlessly made all the difference."
        },
        {
            id: 3,
            author: "Sarah Johnson",
            position: "Marketing Director",
            rating: "excellent",
            text: "Their strategic insights helped us reach new audiences we hadn't considered before. The results speak for themselves with a 40% increase in engagement."
        },
        {
            id: 4,
            author: "David Rodriguez",
            position: "CEO",
            rating: "remarkable",
            text: "In 15 years of business, I've never experienced such dedication and talent. They've become an essential extension of our team rather than just a service provider."
        },
        {
            id: 5,
            author: "Lisa Wong",
            position: "CTO",
            rating: "phenomenal",
            text: "The technical expertise combined with creative problem-solving abilities made complex challenges seem simple. I couldn't recommend them more highly."
        }
    ];

    const navigateLeft = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const navigateRight = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const getVisibleTestimonials = () => {
        // Show only 1 card on mobile, 3 on larger screens
        const isMobile = window.innerWidth < 768;
        const visibleCount = isMobile ? 1 : 3;
        const visibleItems = [];

        for (let i = -(visibleCount > 1 ? 1 : 0); i <= (visibleCount > 1 ? 1 : 0); i++) {
            const index = (activeIndex + i + testimonials.length) % testimonials.length;
            visibleItems.push({
                ...testimonials[index],
                position: i
            });
        }
        return visibleItems;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold">
                    {/* What <span className={themeColor.text}>clients</span> say about us */}
                </h2>
                <p className="text-sm sm:text-base text-gray-500 mt-2">
                    Any questions or remarks? Just write us a message!
                </p>
            </div>

            <div className="relative flex justify-center items-center">
                {/* Left Arrow */}
                <button
                    onClick={navigateLeft}
                    onMouseEnter={() => setHoveredArrow('left')}
                    onMouseLeave={() => setHoveredArrow(null)}
                    className="absolute left-0 sm:left-2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md 
                        flex items-center justify-center transition-all duration-300 ease-in-out transform"
                    style={{
                        backgroundColor: hoveredArrow === 'left' ? themeColors[theme].bg.split('-')[1] : 'white',
                        color: hoveredArrow === 'left' ? 'white' : '#4B5563'
                    }}
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="flex justify-center items-stretch gap-4 sm:gap-6 my-8 px-4 sm:px-12 overflow-hidden">
                    {getVisibleTestimonials().map((item) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHoveredCard(item.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`flex flex-col w-full sm:w-72 rounded-lg shadow-md p-4 sm:p-6 
                                transition-all duration-300 ease-in-out 
                                ${item.position === 0
                                    ? `${themeColor.bg} text-white transform ${hoveredCard === item.id ? 'scale-105' : ''}`
                                    : `bg-gray-50 transform ${hoveredCard === item.id ? 'scale-105 shadow-lg' : ''} 
                                       hidden md:flex`
                                }`}
                        >
                            <div className="flex items-center mb-4">
                                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center 
                                    ${item.position === 0 ? "bg-white/20" : "bg-gray-200"}`}>
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-medium text-sm sm:text-base">{item.author}</h3>
                                    <p className={`text-xs sm:text-sm ${item.position === 0 ? "text-white/80" : "text-gray-500"}`}>
                                        {item.position}
                                    </p>
                                </div>
                            </div>

                            <p className="mb-3 text-sm sm:text-base">
                                It was a <span className="font-medium">{item.rating}</span> experience
                            </p>

                            <p className={`text-xs sm:text-sm ${item.position === 0 ? "text-white/80" : "text-gray-500"}`}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={navigateRight}
                    onMouseEnter={() => setHoveredArrow('right')}
                    onMouseLeave={() => setHoveredArrow(null)}
                    className="absolute right-0 sm:right-2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md 
                        flex items-center justify-center transition-all duration-300 ease-in-out transform"
                    style={{
                        backgroundColor: hoveredArrow === 'right' ? themeColors[theme].bg.split('-')[1] : 'white',
                        color: hoveredArrow === 'right' ? 'white' : '#4B5563'
                    }}
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200
                            ${index === activeIndex ? themeColor.bg : "bg-gray-300 hover:bg-gray-400"}`}
                    />
                ))}
            </div>
        </div>
    );
}