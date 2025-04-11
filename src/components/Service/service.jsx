import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
    const navigate = useNavigate();
    const [projects] = useState([
        {
            id: 1,
            name: 'Building Name',
            description: 'Address of the land and availability',
            image: 'https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?ga=GA1.1.1584547.1744292224&semt=ais_hybrid&w=740',
            path: '/Surya-kiran-bungalows'
        },
        {
            id: 2,
            name: 'Building Name',
            description: 'Address of the land and availability',
            image: 'https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?ga=GA1.1.1584547.1744292224&semt=ais_hybrid&w=740',
            path: '/Malbar-gold'
        },
        {
            id: 3,
            name: 'Building Name',
            description: 'Address of the land and availability',
            image: 'https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?ga=GA1.1.1584547.1744292224&semt=ais_hybrid&w=740',
            path: '/Malbar-hills'
        },
        {
            id: 4,
            name: 'Building Name',
            description: 'Address of the land and availability',
            image: 'https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?ga=GA1.1.1584547.1744292224&semt=ais_hybrid&w=740',
            path: '/Malbar-Prime'
        },
    ]);

    const handleViewMore = (path) => {
        navigate(path);
    };

    const handleClick = () => {
        navigate('/Contact');
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="mb-12 max-w-2xl mt-20">
                <h1 className="text-3xl font-bold mb-4">Residential</h1>
                <p className="text-gray-600 mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Learn More
                </button>
            </div>

            {/* All Projects Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">All projects</h2>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative overflow-hidden rounded-lg group cursor-pointer"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                        {/* Text and Buttons */}
                        <div className="absolute bottom-0 left-0 p-4 w-full opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-5 transition duration-500">
                            <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                            <p className="text-white text-sm mb-4">{project.description}</p>

                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleViewMore(project.path)}
                                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-3 px-7 rounded"
                                >
                                    View More
                                </button>
                                <button
                                    onClick={handleClick}
                                    className="bg-transparent border border-white text-white text-sm font-medium py-3 px-7 rounded hover:bg-white hover:bg-opacity-20"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
