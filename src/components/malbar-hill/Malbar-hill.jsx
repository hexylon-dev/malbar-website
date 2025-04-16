import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';
import imgcoursel from '../../asset/Hills-coursel.png'
import img1 from "../../asset/Hills-1.webp"
import img2 from "../../asset/Hills-2.webp"
import img3 from "../../asset/Hills-3.webp"
import img4 from "../../asset/Hills-4.webp"
import img5 from "../../asset/Hills-5.webp"
import Projectcard from '../Home/ProjectCard';

const Malbarhills = () => {
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
        },
        {
            id: 6,
            src: img5,
            alt: "Front entrance detail of Mediterranean style home"
        }
    ];
    return (
        <div className="min-h-screen pt-16 sm:pt-20">
            <div className="container mx-auto px-4 py-4 sm:py-8">
                {/* <h1 className="text-4xl font-bold text-orange-500 mb-8">Malbar Hills</h1> */}
                <div className="mb-8 sm:mb-16 lg:px-32">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 mx-2 sm:ml-14">Malabar Hills</h2>

                    {/* Wrapped the paragraphs in a responsive padded div */}
                    <div className="px-2 sm:px-0">
                        <p className="text-gray-700 mb-2 sm:ml-14">
                            <strong>Address :</strong> Opposite Shahi Kutir, MG Road, Nikol, North East, Ahmedabad
                        </p>
                        <p className="text-gray-700 mb-4 sm:ml-14">
                            Malabar Hills is the up and coming project in Nikol, Ahmedabad. Due to its prime location in the heart of the city, the project presents an unprecedented opportunity to become a proud owner of property in this eminent location in the city.
                        </p>
                    </div>

                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded mx-2 sm:ml-14">
                        Enquire Now
                    </button>
                </div>

                {/* Image slider */}
                <div className="mb-8 sm:mb-12">
                    <ImageSlider images={images} />
                </div>

                {/* Testimonials slider */}
                <div className="mt-12 sm:mt-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center text-orange-500">What Our Clients Say</h2>
                    <Projectcard />
                </div>

                {/* Contact form */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Malbarhills;
