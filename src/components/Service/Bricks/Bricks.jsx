import React, { useEffect, useState, useRef } from 'react';
import img1 from "../../../asset/image.webp";

export default function BricksShowcase() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const textContainerRef = useRef(null);

    // Handle image load
    useEffect(() => {
        const img = new Image();
        img.src = img1;
        img.onload = () => setIsLoaded(true);
    }, []);

    // Handle scroll-based animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (textContainerRef.current) {
            observer.observe(textContainerRef.current);
        }

        return () => {
            if (textContainerRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="w-full bg-white rounded-lg">
            <div className="w-full relative mb-6 md:mb-9 rounded-lg overflow-hidden">
                <img
                    src={img1}
                    alt="Bricks Building Exterior"
                    className={`w-full h-auto object-cover transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                    style={{
                        maxHeight: '90vh',
                        transitionProperty: 'opacity, transform'
                    }}
                    onLoad={() => setIsLoaded(true)}
                />
                <div
                    className={`absolute bottom-0 right-0 bg-white rounded-tl-lg p-4 md:p-8 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    style={{ transitionDelay: '500ms' }}
                >
                    <h2
                        className={`inline-block text-2xl md:text-4xl font-bold tracking-wider text-black transition-opacity duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: '1000ms' }}
                    >
                        BRICKS
                    </h2>
                </div>
            </div>

            {/* Content container with max-width for better readability */}
            <div
                ref={textContainerRef}
                className="max-w-6xl mx-auto space-y-3 md:space-y-4 px-4 md:px-6 py-5 md:py-7"
            >
                {[0, 1].map((index) => (
                    <p
                        key={index}
                        className={`text-gray-800 text-base md:text-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                        style={{
                            transitionDelay: `${150 * index}ms`,
                            transitionProperty: 'opacity, transform'
                        }}
                    >
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,
                    </p>
                ))}
            </div>
        </div>
    );
}