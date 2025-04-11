export default function ProjectCard() {
    return (
        <main className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Card */}
                <div className="relative overflow-hidden rounded-lg group">
                    {/* Image */}
                    <div className="relative h-[80vh] w-full">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1742496566836-b1e179c18465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGV0cm9scHVtcHxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Brick furnace"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        {/* Title */}
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h2 className="text-white text-3xl font-bold mb-4">Brick furnace</h2>

                            {/* Button - Using CSS only for hover effect */}
                            <a
                                href="#brick-furnace"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                Explore more
                            </a>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="relative overflow-hidden rounded-lg group">
                    {/* Image */}
                    <div className="relative h-[80vh] w-full">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1742496566836-b1e179c18465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGV0cm9scHVtcHxlbnwwfHwwfHx8MA%3D%3D"
                            alt="HPCL petrol pump"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        {/* Title */}
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h2 className="text-white text-3xl font-bold mb-4">HPCL petrol pump</h2>

                            {/* Button - Using CSS only for hover effect */}
                            <a
                                href="#petrol-pump"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                Explore more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}