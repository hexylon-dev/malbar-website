import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../Shared/form';
import ImageSlider from '../Shared/image-slider';
import TestimonialSlider from '../Shared/testimonials';
import imgcoursel from "../../asset/gold-1.png"
import img1 from "../../asset/gold-1.png"
import img2 from "../../asset/gold-2.webp"
import img3 from "../../asset/gold-3.webp"
import img4 from "../../asset/gold-4.webp"
import img5 from "../../asset/gold-5.webp"
import Projectcard from '../Home/ProjectCard';


const Malbargold = () => {
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
        <div className="min-h-screen pt-24 sm:pt-28">
            <div className="container mx-auto px-4 py-8">
                {/* <h1 className="text-4xl font-bold text-orange-500 mb-8">  Malbar Gold</h1> */}

                {/* Property listings */}
                <div className="mb-16 lg:px-32">
                    <h2 className="text-3xl font-bold mb-4  ml-14">Malbar Gold</h2>
                    <p className="text-gray-700 mb-2 ml-14">
                        <strong>Address :</strong> Address : Survey No. 496, Gangotri Circle, to, Police Station Road, near Balmukund Bungalows, beside Lilivadi Restaurant, Nikol, Ahmedabad, Gujarat 382350
                    </p>
                    <p className="text-gray-700 mb-4 ml-14">
                        Bhoomi Malbar Gold is an unmatched Residential property located in Nikol, Ahmedabad. The project offers plenty of benefits that includes prime location, comfortable and lavish lifestyle, great amenities, healthy surroundings and high return.
                        Location Advantages : Bhoomi Malbar Gold is strategically located and provides direct connectivity to nearly all other major points in and around Ahmedabad. It is one of the most reputable address of the city with easy access to many famed schools, shopping areas, hospitals, recreational areas, public gardens and several other public amenities.

                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded ml-14">
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

export default Malbargold;