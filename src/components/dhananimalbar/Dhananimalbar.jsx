import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';

const Malbarprime = () => {
    const clients = [
        { name: 'ZARA', logo: '/logos/zara.png' },
        { name: 'ZARA', logo: '/logos/zara.png' },
        { name: 'ZARA', logo: '/logos/zara.png' },
        { name: 'TANISHQ', logo: '/logos/tanishq.png' },
        { name: 'TANISHQ', logo: '/logos/tanishq.png' },
        { name: 'TANISHQ', logo: '/logos/tanishq.png' },
    ];

    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* <h1 className="text-4xl font-bold text-orange-500 mb-8">Dhananimalbar</h1> */}

                {/* Surya Kiran Bungalows Section */}
                <div className="mb-16 lg:px-32">
                    <h2 className="text-3xl font-bold mb-4 ml-12">Malbar Prime</h2>
                    <p className="text-gray-700 mb-2 ml-12">
                        <strong>Address :</strong>  Nr. Saurashtra Patel Seva Samaj, Nikol, North East, Ahmedabad
                    </p>
                    <p className="text-gray-700 mb-4 ml-12">
                        Malabar Hills is the up and coming project in Nikol, Ahmedabad. Due to its prime location in the heart of the city, the project presents an unprecedented opportunity to become a proud owner of property in this eminent location in the city.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded ml-12">
                        Enquire Now
                    </button>
                </div>

                {/* Image slider */}
                <div className="mb-12">
                    <ImageSlider />
                </div>

                {/* Our Clients Section */}
                <div className="text-center my-20">
                    <h2 className="text-3xl font-bold mb-2">Our clients</h2>
                    <p className="text-gray-500 mb-8">
                        The buyers of the shops from our commercial areas
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-xl shadow-md p-6 w-24 h-24 flex items-center justify-center"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-10 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mt-20">
                    <h2 className="text-3xl font-semibold text-center text-orange-500">What Our Clients Say</h2>
                    <TestimonialSlider />
                </div>

                {/* Contact form */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Malbarprime;
