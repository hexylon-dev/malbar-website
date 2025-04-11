import React, { useState } from 'react';

export default function PortfolioPage() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="flex flex-col min-h-screen mt-20">
            {/* Hero Section */}
            <section className="bg-white py-20 md:py-32 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4">Meet Me</h1>
                        <p className="text-gray-700 mb-6">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem ipsum has been the industry's standard dummy text ever since the
                            1500s.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition">
                            Explore more
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="rounded-lg overflow-hidden w-full max-w-md h-[300px] md:h-[500px]">
                            <img
                                src="https://img.freepik.com/free-photo/fun-gaulois-3d-illustration_183364-81032.jpg?ga=GA1.1.1584547.1744292224&semt=ais_hybrid&w=740"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold inline">What We <span className="text-orange-500">Serve</span></h2>
                        <p className="text-gray-600 mt-4">3 different work or business we are working on</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div
                            className="rounded-lg overflow-hidden shadow-md relative cursor-pointer h-[350px] md:h-[550px]"
                            onMouseEnter={() => setHoveredCard(1)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredCard === 1 ? 'opacity-0' : 'opacity-100'}`}>
                                <img
                                    src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Cafe"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className={`absolute inset-0 bg-orange-500 flex items-center justify-center transition-opacity duration-300 ${hoveredCard === 1 ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="text-white text-center p-6">
                                    <h3 className="text-xl font-semibold mb-2">Cafe Services</h3>
                                    <p>Professional design and management solutions for cafes and restaurants.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div
                            className="rounded-lg overflow-hidden shadow-md relative cursor-pointer h-[350px] md:h-[550px]"
                            onMouseEnter={() => setHoveredCard(2)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredCard === 2 ? 'opacity-0' : 'opacity-100'}`}>
                                <img
                                    src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Business services"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className={`absolute inset-0 bg-orange-500 flex items-center justify-center transition-opacity duration-300 ${hoveredCard === 2 ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="text-white text-center p-6">
                                    <h3 className="text-xl font-semibold mb-2">Business Services</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis vel diam sed feugiat.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div
                            className="rounded-lg overflow-hidden shadow-md relative cursor-pointer h-[350px] md:h-[550px]"
                            onMouseEnter={() => setHoveredCard(3)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredCard === 3 ? 'opacity-0' : 'opacity-100'}`}>
                                <img
                                    src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Outdoor space"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className={`absolute inset-0 bg-orange-500 flex items-center justify-center transition-opacity duration-300 ${hoveredCard === 3 ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="text-white text-center p-6">
                                    <h3 className="text-xl font-semibold mb-2">Outdoor Spaces</h3>
                                    <p>Custom outdoor area design and implementation for commercial properties.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Section */}
            <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8">
                                <h2 className="text-3xl font-bold mb-6">Our Office</h2>
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nunc odio in et, lectus sit lorem id integer.
                                    </p>
                                    <p className="text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nunc odio in et, lectus sit lorem id integer.
                                    </p>
                                    <p className="text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nunc odio in et, lectus sit lorem id integer.
                                    </p>
                                </div>
                            </div>
                            <div className="h-[300px] md:h-[400px]">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0783840357435!2d72.5182694760087!3d23.05758771501936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d0845742b0f%3A0x7e05407cae921b5a!2sPalladium%20Ahmedabad!5e0!3m2!1sen!2sin!4v1744375860287!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    // loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}