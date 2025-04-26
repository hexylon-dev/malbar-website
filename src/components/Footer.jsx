import React from 'react';
import logo from '../asset/Group 1000001769 1.png';
import { Link } from 'react-router-dom'
import logo2 from "../asset/logo2.png"

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-28">
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between mb-16">
                    {/* Logo and Description */}
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <div className="flex items-center mb-4">

                            <img src={logo2} alt="logo" className="w-12 h-15" />
                        </div>
                        <p className="text-sm text-gray-600">
                            Malbar
                        </p>
                    </div>

                    {/* Service and Company Links Container */}

                    <div className="flex flex-row justify-between md:space-x-16">
                        {/* Service Links */}
                        <div className="mb-8 md:mb-0">
                            <h3 className="text-orange-500 font-medium mb-4">Service</h3>
                            <ul className="space-y-2">
                                <li className="text-sm text-gray-600">
                                    <a href="/petrolpump">Petroleum</a>
                                </li>
                                <li className="text-sm text-gray-600">
                                    <a href="/BricksShowcase">Bricks</a>
                                </li>
                                <li className="text-sm text-gray-600">
                                    <a href="/services">Service</a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-orange-500 font-medium mb-4">Projects</h3>
                            <ul className="space-y-2">
                                <li className="text-sm text-gray-600">
                                    <Link href="/projects/residential">Residential</Link>
                                </li>
                                <li className="text-sm text-gray-600">
                                    <Link href="/projects/commercial">Commercial</Link>
                                </li>
                                <li className="text-sm text-gray-600">
                                    <Link href="/projects/on-going">On Going</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 mb-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Copyright */}
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-orange-500"></p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-6 w-full">
                        {/* Copyright */}
                        <p className="w-full md:w-auto text-center">
                            <span className="text-sm text-gray-600">
                                © NRD. All rights reserved.
                            </span>
                        </p>

                        {/* Address */}
                        <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            {/* <span>8819 Ohio St, South Gate, CA 90280</span> */}
                        </div>

                        {/* Email */}
                        <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-orange-500 mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                <path d="M22 7l-10 7L2 7"></path>
                            </svg>
                            <span>555@gmail.com</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-orange-500 mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                            </svg>
                            <span>+55555</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}