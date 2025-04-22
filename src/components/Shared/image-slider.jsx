import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageSlider({ images }) {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToPrevious = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }
    };

    const goToNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const goToSlide = (index) => {
        if (!isTransitioning && index !== currentIndex) {
            setIsTransitioning(true);
            setCurrentIndex(index);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isTransitioning]);

    return (
        <div className="flex flex-col  h-[80vh]">
            {/* Main Slider - 90vh height view */}
            <div className="relative overflow-hidden flex-grow  h-full">
                {/* Main Image - Fixed the height-[90vh] to h-[90vh] */}
                <div className="relative w-full h-[90   vh]">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className={`absolute w-full h-[80vh] transition-all duration-500 ease-in-out ${index === currentIndex
                                ? "opacity-100 translate-x-0"
                                : index < currentIndex
                                    ? "opacity-0 -translate-x-full"
                                    : "opacity-0 translate-x-full"
                                }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="object-cover w-full h-full"
                            />

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <p className="text-base font-medium">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 p-4 rounded-full text-white focus:outline-none transform transition-transform duration-300 "
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={28} />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 p-4 rounded-full text-white focus:outline-none transform transition-transform duration-300 "
                    aria-label="Next slide"
                >
                    <ChevronRight size={28} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-white scale-125"
                                : "bg-white bg-opacity-50 hover:bg-opacity-75"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Centered Thumbnails - Fixed at bottom */}
            <div className="flex justify-center  py-2 px-4 shadow-inner">
                <div className="flex space-x-4 overflow-x-auto max-w-4xl">
                    {images.map((image, index) => (
                        <button
                            key={image.id}
                            onClick={() => goToSlide(index)}
                            className={`flex-shrink-0 w-32 h-20 overflow-hidden rounded-md transition-all duration-300 ${index === currentIndex
                                ? " shadow-lg "
                                : "opacity-70 hover:opacity-100 "
                                }`}
                            aria-label={`View ${image.alt}`}
                        >
                            <img
                                src={image.src}
                                alt={`Thumbnail ${index + 1}`}
                                className="object-cover w-full h-full"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}