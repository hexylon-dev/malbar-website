import React from 'react';

export default function ResidentialArea() {
    // Sample project data
    const projects = [
        {
            id: 1,
            name: "Building Name",
            description: "Address of the land and availability",
            image: "https://as2.ftcdn.net/v2/jpg/04/59/24/03/1000_F_459240366_09oUgYcL5j2T4A7sMZfOtCBis9y4D9IK.jpg"
        },
        {
            id: 2,
            name: "Building Name",
            description: "Address of the land and availability",
            image: "https://as2.ftcdn.net/v2/jpg/04/59/24/03/1000_F_459240366_09oUgYcL5j2T4A7sMZfOtCBis9y4D9IK.jpg"
        },
        {
            id: 3,
            name: "Building Name",
            description: "Address of the land and availability",
            image: "https://as2.ftcdn.net/v2/jpg/04/59/24/03/1000_F_459240366_09oUgYcL5j2T4A7sMZfOtCBis9y4D9IK.jpg"
        },
        {
            id: 4,
            name: "Building Name",
            description: "Address of the land and availability",
            image: "/api/placeholder/400/300"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4">
            {/* Header Section */}
            <div className="py-8">
                <h1 className="text-3xl font-bold mb-2">Residential</h1>
                <p className="text-gray-700 mb-4 max-w-xl">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded">
                    Learn more
                </button>
            </div>

            {/* Projects Section */}
            <div className="py-8">
                <h2 className="text-2xl font-bold mb-6">All projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={project.id} className="relative h-80 overflow-hidden">
                            {/* Left column projects */}
                            {index % 2 === 0 && (
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                    style={{ filter: 'brightness(0.8)' }}
                                />
                            )}

                            {/* Right column projects */}
                            {index % 2 === 1 && (
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                    style={{ filter: 'brightness(0.8)' }}
                                />
                            )}

                            {/* Overlay content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                                <p className="text-white text-sm mb-4">{project.description}</p>

                                <div className="flex space-x-2">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded">
                                        Learn More
                                    </button>
                                    <button className="bg-transparent border border-white text-white text-xs px-3 py-1 rounded">
                                        View Gallery
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}