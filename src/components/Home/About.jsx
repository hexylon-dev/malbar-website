import React from 'react';
import { Instagram } from "lucide-react";

export default function About() {
    return (
        <div className="w-full min-h-screen bg-white flex items-center">
            <div className="max-w-6xl mx-auto p-8 py-16">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">
                        About <span className="text-orange-500">Myself</span>
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Any question or remarks? Just write us a message!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Image Container */}
                    <div className="w-full md:w-2/5">
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-boy_23-2150797566.jpg?ga=GA1.1.1584547.1744292224&semt=ais_hybrid&w=740"
                                alt="Profile"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="w-full md:w-3/5">
                        <h2 className="text-3xl font-bold mb-6">Nrupansh Dalwadi</h2>

                        {/* Social Icons */}
                        <div className="flex gap-4 mb-8">
                            <div className="bg-orange-500 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <div className="bg-orange-500 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </div>
                            <div className="bg-orange-500 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                                <Instagram size={20} />
                            </div>
                        </div>

                        {/* Placeholder Text */}
                        <p className="text-gray-700 mb-6 text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>

                        <p className="text-gray-700 mb-8 text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam
                        </p>

                        {/* Contact Button */}
                        <div className="flex gap-4">
                            <a href="/contact" className="bg-orange-500 text-white px-6 py-3 rounded font-medium text-lg">
                                Contact Us
                            </a>
                            <a href="/contact" className="bg-orange-500 text-white p-3 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}