"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import img1 from "../../asset/gold.webp"
import img2 from "../../asset/Hills-2.webp"

// Updated FeatureCard component with description paragraph
const FeatureCard = ({ icon, title, delay, description }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: false,
        amount: 0.2,
    })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        delay: delay / 1000,
                        ease: [0.16, 0.77, 0.47, 0.97],
                    },
                },
            }}
            className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-red-50 rounded-full">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-center text-sm">{description}</p>
            </div>
        </motion.div>
    )
}

const Gallery = ({ end, title, delay = 0 }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: false,
        amount: 0.2,
        margin: "0px 0px -10% 0px",
    })
    const [count, setCount] = useState(0)

    useEffect(() => {
        let animationFrame
        let timeoutId

        if (isInView) {
            controls.start("visible")

            // Reset counter when scrolling back into view
            setCount(0)

            let startTime

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp
                const progress = Math.min((timestamp - startTime) / 2000, 1)
                // Enhanced easing function for the counter
                const easedProgress = 1 - Math.pow(1 - progress, 3)
                setCount(Math.floor(easedProgress * end))

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate)
                }
            }

            timeoutId = setTimeout(() => {
                animationFrame = requestAnimationFrame(animate)
            }, delay)
        } else {
            // Reset when out of view
            controls.start("hidden")
        }

        return () => {
            clearTimeout(timeoutId)
            cancelAnimationFrame(animationFrame)
        }
    }, [isInView, controls, end, delay])

    return (
        <div ref={ref} className="text-center">
            <motion.h3
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            delay: delay / 1000,
                            ease: [0.16, 0.77, 0.47, 0.97],
                        },
                    },
                }}
                className="text-lg font-medium text-gray-800 mb-2"
            >
                {title}
            </motion.h3>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.8,
                            delay: (delay + 200) / 1000,
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        },
                    },
                }}
                className="text-6xl font-bold"
            >
                {count}+
            </motion.div>
        </div>
    )
}

// Updated features array with added descriptions and reduced to 6 items
const features = [
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
            >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Prime Locations",
        description: "We build where life grows well-connected, fast-developing areas.",
        delay: 200,
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8L12 16M8 12L16 12" />
            </svg>
        ),
        title: "Smart Design",
        description: "Modern, practical spaces made for real living.",
        delay: 300,
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
            >
                <path d="M12 2v10l4.24 4.24M12 2v10l-4.24 4.24M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
            </svg>
        ),
        title: "Trusted Quality",
        description: "Top materials. Clean finish. Delivered as promised.",
        delay: 400,
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        title: "Transparent Deals",
        description: "No hidden costs. No last-minute surprises.",
        delay: 500,
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
            >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Future-Ready Homes",
        description: "Homes that grow with your dreams.",
        delay: 600,
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
            >
                <polyline points="9 18 15 12 9 6" />
            </svg>
        ),
        title: "Innovative Amenities",
        description: "Modern conveniences are designed to enhance your lifestyle and comfort",
        delay: 700,
    },
]

export default function WhyChooseUs() {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: false,
        amount: 0.1,
    })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [isInView, controls])

    return (
        <section className="px-4 max-w-7xl mx-auto py-16" id="why-choose-us">
            <div ref={ref} className="min-h-[90vh] flex flex-col justify-start">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                ease: [0.16, 0.77, 0.47, 0.97],
                            },
                        },
                    }}
                    className="text-center mb-2"
                >
                    {/* <h2 className="text-teal-600 tracking-wide uppercase text-sm font-medium">Why Choose Us</h2> */}
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.9,
                                delay: 0.2,
                                ease: [0.16, 0.77, 0.47, 0.97],
                            },
                        },
                    }}
                    className="text-center mb-10"
                >
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-8"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        Why Choose us?
                    </h1>

                    {/* Updated grid to show exactly 3 cards per row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                delay={feature.delay}
                            />
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                    {/* Image gallery with responsive layouts */}
                    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                        {/* Main image with border */}
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, x: -50 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                    transition: {
                                        duration: 1,
                                        delay: 0.4,
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 10,
                                        ease: [0.16, 0.77, 0.47, 0.97],
                                    },
                                },
                            }}
                            className="absolute z-10 w-[60%] h-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white"
                            style={{ maxHeight: "90%" }}
                        >
                            <img
                                src={img1}
                                alt="Main showcase"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Second image with border - adjusted positioning for mobile */}
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, scale: 0.7, x: 80, y: -60 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    x: 40,
                                    y: -30,
                                    transition: {
                                        duration: 1,
                                        delay: 0.7,
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 10,
                                        ease: [0.16, 0.77, 0.47, 0.97],
                                    },
                                },
                            }}
                            className="absolute z-20 w-[40%] h-auto aspect-square rounded-3xl overflow-hidden shadow-xl right-5 md:right-10 top-[40%] border-4 md:border-8 border-white"
                            style={{ maxHeight: "60%" }}
                        >
                            <img
                                src={img2}
                                alt="Secondary showcase"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Stats grid - now responsive */}
                    <div className="grid grid-cols-2 gap-5 md:gap-10 px-1 md:px-0 mt-52">
                        <Gallery end={5} title="Total Projects" delay={800} />
                        <Gallery end={1000} title="Happy Clients" delay={900} />
                        {/* <Gallery end={5} title="Current Projects" delay={900} /> */}
                        {/* <Gallery end={20} title="Coming Soon" delay={900} /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}