"use client"

import { useState } from "react"

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(0)

    // Sample images - replace with your actual image paths
    const images = [
        "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww", // Main building image
        "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww", // Aerial view
        "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww", // Entrance view
        "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww", // Night view
        "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww", // Floor plan
        "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww", // Interior view
    ]

    // Building section labels
    const buildingSections = [
        { name: "Cafe", position: "top-[15%] left-[20%]" },
        // { name: "Gym", position: "top-[15%] right-[20%]" },
        // { name: "Fashion Point", position: "bottom-[25%] left-[10%]" },
        // { name: "Crossword", position: "bottom-[25%] left-[25%]" },
        // { name: "Foodhall", position: "bottom-[18%] left-[17%]" },
        // { name: "Skin & Glow", position: "bottom-[18%] left-[32%]" },
        // { name: "MAX", position: "bottom-[25%] right-[25%]" },
        // { name: "Jack & Jones", position: "bottom-[25%] right-[10%]" },
        // { name: "H&O Home", position: "bottom-[18%] right-[17%]" },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Photo <span className="text-orange-500">Gallery</span>
                </h1>
                <p className="text-gray-600 mt-1">Any question or remarks? Just write us a message!</p>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-4 overflow-hidden rounded-md">
                <img
                    src={images[selectedImage] || "/placeholder.svg"}
                    alt="Building view"
                    className="w-full h-full object-cover"
                />

                {/* Building section labels - only shown on the main image */}
                {selectedImage === 0 && (
                    <>
                        {buildingSections.map((section, index) => (
                            <div
                                key={index}
                                className={`absolute ${section.position} bg-black bg-opacity-70 text-white px-2 py-1 text-xs md:text-sm rounded`}
                            >
                                {section.name}
                            </div>
                        ))}
                    </>
                )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2 md:gap-4">
                {images.slice(1).map((image, index) => (
                    <div
                        key={index}
                        className={`relative h-20 md:h-28 cursor-pointer overflow-hidden rounded-md border-2 ${selectedImage === index + 1 ? "border-orange-500" : "border-transparent"
                            } hover:border-orange-300 transition-colors`}
                        onClick={() => setSelectedImage(index + 1)}
                    >
                        <img
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
