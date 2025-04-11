import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';

const Savitamalbar = () => {
    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* <h1 className="text-4xl font-bold text-orange-500 mb-8">Malbar Royal</h1> */}

                {/* Property listings */}
                <div className="mb-16 lg:px-32">
                    <h2 className="text-3xl font-bold mb-4 ml-12">Malbar Royal</h2>
                    <p className="text-gray-700 mb-2 ml-12">
                        <strong>Address :</strong>  Raspan Cross Rd, Opp. Gunjan Garden Restaurant, Near Bhakti Circle, Nikol, North East, Ahmedabad
                    </p>
                    <p className="text-gray-700 mb-4 ml-12">
                        Malbar Royal is a sophisticated and luxurious retreat that reflects that magical merging of inspiration and architecture. Living is easy in this impressive, generously spacious residence. The project is architected by Savita. The development is located at Nikol, Ahmedabad.ing value
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded ml-12">
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

export default Savitamalbar;