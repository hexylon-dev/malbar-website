import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../asset/image.webp";
import img2 from "../../asset/royal-coursel.png";
import img3 from "../../asset/Hills-coursel (1) (1).webp";
import img4 from "../../asset/surya-coursel.webp";
import img5 from "../../asset/prime-coursel.webp";
import img6 from "../../asset/gold.webp";
import img7 from "../../asset/Frame 1000001776 (1).webp"

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const images = [
        {
            src: img7,
            alt: "Coming Soon",
            title: "Coming Soon",
            link: "/upcoming"
        },
        {
            src: img5,
            alt: "Malbar Prime Building",
            title: "MALBAR PRIME",
            description: "A modern shopping destination with premium brands and amenities.",
            link: "/malbar-prime"
        },
        {
            src: img2,
            alt: "Malbar Prime Interior",
            title: "MALBAR ROYAL",
            link: "/Malbar-royal"
        },
        {
            src: img6,
            alt: "Malbar Prime Cafe",
            title: "MALBAR GOLD",
            link: "/Malbar-gold"
        },
        {
            src: img3,
            alt: "Malbar Prime Cafe",
            title: "MALBAR HILLS",
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
            alt: "Surya kiran bungalows",
            title: "SURYA KIRAN BUNGLOWS",
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
        <div className="relative w-full overflow-hidden rounded-lg">
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[800px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                    >
                        <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                        />

                        <div className="absolute bottom-0 right-0 p-4 md:p-6 lg:p-8 text-left bg-white bg-opacity-110 w-full md:w-3/4 lg:w-[800px] rounded-tl-2xl h-auto md:h-[10rem] lg:h-[16rem]">
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-2 md:mb-4 mt-1 md:mt-3">
                                {image.title}
                            </h2>

                            <Link to={image.link}>
                                <button className="bg-[#ff6e00] text-white px-3 py-2 md:px-6 md:py-3 rounded font-medium border-none cursor-pointer transition-colors duration-300 hover:bg-[#e06200]">
                                    Explore more
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}

                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white bg-opacity-80 p-1 md:p-2 rounded-full border-none cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-opacity-100"
                    aria-label="Previous slide"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-6 md:h-6"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white bg-opacity-80 p-1 md:p-2 rounded-full border-none cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-opacity-100"
                    aria-label="Next slide"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-6 md:h-6"
                    >
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div >
    );
};

export default Hero;