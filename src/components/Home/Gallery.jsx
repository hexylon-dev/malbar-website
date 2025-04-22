"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import img1 from "../../asset/gold.webp"
import img2 from "../../asset/Hills-2.webp"
// Note: You'll need to import your actual images
// If you're using Next.js Image component, adjust accordingly

const Gallery = ({ end, title, delay = 0 }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: false, // Changed to false to allow re-animation on scroll
        amount: 0.2, // Reduced threshold for earlier trigger
        margin: "0px 0px -10% 0px" // Negative margin to trigger slightly before fully in view
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
                            ease: [0.16, 0.77, 0.47, 0.97]
                        }
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
                            damping: 10
                        }
                    },
                }}
                className="text-6xl font-bold"
            >
                {count}+
            </motion.div>
        </div>
    )
}

export default function WhyChooseUs() {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: false, // Changed to false to re-trigger on scroll
        amount: 0.1 // Lower threshold for earlier trigger
    })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [isInView, controls])

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto" id="why-choose-us">
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
                                ease: [0.16, 0.77, 0.47, 0.97]
                            }
                        },
                    }}
                    className="text-center mb-2"
                >
                    <h2 className="text-teal-600 tracking-wide uppercase text-sm font-medium">W h y C h o o s e&nbsp; U s</h2>
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
                                ease: [0.16, 0.77, 0.47, 0.97]
                            }
                        },
                    }}
                    className="text-center mb-6"
                >
                    <h1 className="text-5xl md:text-5xl font-bold mb-6"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>Why Choose Us</h1>
                    <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed px-4">
                        What makes us unique is our unwavering commitment to excellence. We're not just a travel agency; we're your
                        trusted travel companion. Discover the reasons why travelers like you choose us for their adventures
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mr-16">
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
                                        ease: [0.16, 0.77, 0.47, 0.97]
                                    },
                                },
                            }}
                            className="absolute z-10 w-[60%] h-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white "
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
                                        ease: [0.16, 0.77, 0.47, 0.97]
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
                    <div className="grid grid-cols-2 gap-5 md:gap-10 px-1 md:px-0 ">
                        <Gallery end={20} title="Total Projects" delay={800} />
                        <Gallery end={200} title="Happy Clients" delay={1000} />
                        <Gallery end={5} title="Current Projects" delay={1200} />
                        <Gallery end={20} title="Coming Soon" delay={1400} />
                    </div>
                </div>
            </div>
        </section>
    )
}