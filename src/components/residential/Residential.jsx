import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';
import imgcoursel from "../../asset/surya-coursel.webp"
import img1 from "../../asset/surya-1.png"
import img2 from "../../asset/surya-2 (1).webp"
import img3 from "../../asset/surya-3.png"
import img4 from "../../asset/surya-4.png"
import Projectcard from '../Home/ProjectCard';


const SuryaKiranBungalows = () => {
    const images = [
        {
            id: 1,
            src: imgcoursel,
            alt: "Luxury villa with Mediterranean architecture featuring white facade and ornate balconies"
        },
        {
            id: 2,
            src: img1,
            alt: "Night view of residential villas with lights"
        },
        {
            id: 3,
            src: img2,
            alt: "Row of upscale residential townhouses"
        },
        {
            id: 4,
            src: img3,
            alt: "Side view of residential development"
        },
        {
            id: 5,
            src: img4,
            alt: "Front entrance detail of Mediterranean style home"
        }
    ];
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
                    <ImageSlider images={images} />
                </div>
                {/* Testimonials slider at the bottom */}
                <div className="mt-20">
                    <h2 className="text-3xl font-semibold text-center text-orange-500">What Our Clients Say</h2>
                    <Projectcard />
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default SuryaKiranBungalows;