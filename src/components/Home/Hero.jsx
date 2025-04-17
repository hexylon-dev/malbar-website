import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link if you're using React Router
import img1 from "../../asset/image.webp";
import img2 from "../../asset/royal-coursel.png"
import img3 from "../../asset/Hills-coursel (1) (1).webp"
import img4 from "../../asset/surya-coursel.webp"
import img5 from "../../asset/prime-coursel.webp"
import img6 from "../../asset/gold.webp"

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const images = [
        {
            src: img5,
            alt: "Malbar Prime Building",
            title: "MALBAR PRIME",
            description: "A modern shopping destination with premium brands and amenities.",
            link: "/malbar-prime" // Add a link property for each slide
        },
        {
            src: img2,
            alt: "Malbar Prime Interior",
            title: "MALBAR ROYAl",
            // description: "Explore our spacious interior with a variety of shopping options.",
            link: "/Malbar-royal"
        },
        {
            src: img6,
            alt: "Malbar Prime Cafe",
            title: "MALBAR GOLD",
            // description: "Enjoy our rooftop cafe with panoramic views of the city.",
            link: "/Malbar-gold"
        },
        {
            src: img3,
            alt: "Malbar Prime Cafe",
            title: "MALBAR HILLS",
            // description: "Enjoy our rooftop cafe with panoramic views of the city.",
            link: "/Malbar-hills"
        },
        {
            src: img1,
            alt: "Malbar Prime Cafe",
            title: "MALBAR PRIME",

            link: "/malbar-prime"
        },
        {
            src: img4,
            alt: "Surya-kiran-bungalows",
            title: "Surya-kiran-bungalows",
            link: "/Surya-kiran-bungalows"
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
            <div className="relative h-[800px] w-full ">
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

                        <div className="absolute bottom-0 right-0 p-8 text-left bg-white bg-opacity-110 w-[600px] rounded-2xl h-[12rem]">
                            <h2 className="text-5xl font-bold text-black mb-4 mt-3">{image.title}</h2>

                            {/* Using React Router Link */}
                            <Link to={image.link}>
                                <button
                                    className="bg-[#ff6e00] text-white px-6 py-3 rounded font-medium border-none cursor-pointer transition-colors duration-300 hover:bg-[#e06200]"
                                >
                                    Explore more
                                </button>
                            </Link>
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