import React, { useState, useEffect } from "react";
import img1 from "../../asset/image.webp"

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const images = [
        {
            src: img1,
            alt: "Malbar Prime Building",
            title: "MALBAR PRIME",
            description: "A modern shopping destination with premium brands and amenities.",
        },
        {
            src: img1,
            alt: "Malbar Prime Interior",
            title: "MALBAR PRIME",
            description: "Explore our spacious interior with a variety of shopping options.",
        },
        {
            src: img1,
            alt: "Malbar Prime Cafe",
            title: "MALBAR PRIME",
            description: "Enjoy our rooftop cafe with panoramic views of the city.",
        },
    ];

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        let interval;

        if (isAutoPlaying) {
            interval = setInterval(() => {
                goToNext();
            }, 5000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isAutoPlaying, currentIndex]);

    return (
        <div className="relative w-full h-full overflow-hidden rounded-lg">
            <div className="relative h-[800px] w-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-3 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                    >
                        <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                        />

                        <div className="absolute bottom-0 right-0 p-6 text-left bg-white bg-opacity-110 max-w-[500px] rounded-2xl h-[14rem]">
                            <h2 className="text-5xl font-bold text-black mb-4 mt-16">{image.title}</h2>
                            <button
                                className="bg-[#ff6e00] text-white px-6 py-3 rounded font-medium border-none cursor-pointer transition-colors duration-300 hover:bg-[#e06200]"
                            >
                                Explore more
                            </button>
                        </div>

                    </div>
                ))}

                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full border-none cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-opacity-100"
                    aria-label="Previous slide"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full border-none cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-opacity-100"
                    aria-label="Next slide"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-colors duration-300 ${index === currentIndex
                                ? "bg-[#ff6e00]"
                                : "bg-white bg-opacity-60 hover:bg-opacity-100"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;