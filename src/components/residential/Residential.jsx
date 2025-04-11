import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';

const SuryaKiranBungalows = () => {
    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* <h1 className="text-4xl font-bold text-orange-500 mb-8">Surya Kiran Bungalows</h1> */}
                <div className="mb-16 lg:px-32">
                    <h2 className="text-3xl font-bold mb-4 ">Surya Kiran Bungalows</h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Address :</strong> New India Colony, Nikol, Nikol Gam, Ahmedabad - 382350
                    </p>
                    <p className="text-gray-700 mb-4 ">
                        Surya Kiran Bungalows in Nikol Gam, Ahmedabad is a company that provides expert property consulting and real estate services.
                        They have a deep understanding of the real estate market and are committed to client satisfaction.
                        The company provides comprehensive solutions tailored to meet the unique needs of their clients.
                        Whether clients are looking to buy, sell, or manage property, Surya Kiran Bungalows in Nikol Gam,
                        Ahmedabad is there to guide them every step of the way. The company strives to create lasting value
                        for its clients by offering personalized, professional, and reliable services.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                        Enquire Now
                    </button>
                </div>
                {/* Image slider */}
                <div className="mb-12">
                    <ImageSlider />
                </div>
                {/* Testimonials slider at the bottom */}
                <div className="mt-20">
                    <h2 className="text-3xl font-semibold text-center text-orange-500">What Our Clients Say</h2>
                    <TestimonialSlider />
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default SuryaKiranBungalows;