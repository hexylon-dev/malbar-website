import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const slides = [
        {
            id: 1,
            title: "Surya Kiran Bungalows",
            description: "Luxury living spaces designed with modern aesthetics and functional comfort. Our residential projects blend innovation with timeless design principles.",
            image: "https://img.freepik.com/free-photo/beautiful-city_1127-3353.jpg?t=st=1744344644~exp=1744348244~hmac=77f8f55e5675d5c4fc5e572e574308cee9dfca6adcf59f9e508c58f02a791361&w=996",
            path: "/surya-kiran-bungalows"
        },
        {
            id: 2,
            title: "Malbar Gold",
            description: "Contemporary urban residences that maximize space and natural light, perfect for city dwellers seeking comfort and style.",
            image: "https://img.freepik.com/free-photo/beautiful-city_1127-3353.jpg?t=st=1744344644~exp=1744348244~hmac=77f8f55e5675d5c4fc5e572e574308cee9dfca6adcf59f9e508c58f02a791361&w=996",
            path: "/malbar-gold"
        },
        {
            id: 3,
            title: "Malbar Hills",
            description: "Spacious and elegant suburban properties that combine privacy with community living, featuring sustainable design elements.",
            image: "https://img.freepik.com/free-photo/beautiful-city_1127-3353.jpg?t=st=1744344644~exp=1744348244~hmac=77f8f55e5675d5c4fc5e572e574308cee9dfca6adcf59f9e508c58f02a791361&w=996",
            path: "/malbar-hills"
        },
        {
            id: 4,
            title: "Malbar Royal",
            description: "Spacious and elegant suburban properties that combine privacy with community living, featuring sustainable design elements.",
            image: "https://img.freepik.com/free-photo/beautiful-city_1127-3353.jpg?t=st=1744344644~exp=1744348244~hmac=77f8f55e5675d5c4fc5e572e574308cee9dfca6adcf59f9e508c58f02a791361&w=996",
            path: "/Malbar-royal"
        },
        {
            id: 5,
            title: "Malbar Prime",
            description: "Spacious and elegant suburban properties that combine privacy with community living, featuring sustainable design elements.",
            image: "https://img.freepik.com/free-photo/beautiful-city_1127-3353.jpg?t=st=1744344644~exp=1744348244~hmac=77f8f55e5675d5c4fc5e572e574308cee9dfca6adcf59f9e508c58f02a791361&w=996",
            path: "/Malbar-Prime"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleExploreMore = (path) => {
        navigate(path);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <div className="relative h-full w-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover whitespace-nowrap"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                            <div className="max-w-2xl">
                                <h1 className="whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl text-white mb-8">{slide.description}</p>
                                <button
                                    onClick={() => handleExploreMore(slide.path)}
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                                >
                                    Explore more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Hero;
