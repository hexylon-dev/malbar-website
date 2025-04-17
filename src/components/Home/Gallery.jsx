"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import img1 from "../../asset/gold.webp"
import img2 from "../../asset/image.webp"

const Gallery = ({ end, title, delay = 0 }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 }) // Reduced threshold for smoother trigger
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (isInView) {
            controls.start("visible")

            let startTime
            let animationFrame

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp
                const progress = Math.min((timestamp - startTime) / 2000, 1)
                // Smooth easing function for the counter
                const easedProgress = 1 - Math.pow(1 - progress, 3)
                setCount(Math.floor(easedProgress * end))

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate)
                }
            }

            const timeoutId = setTimeout(() => {
                animationFrame = requestAnimationFrame(animate)
            }, delay)

            return () => {
                clearTimeout(timeoutId)
                cancelAnimationFrame(animationFrame)
            }
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
                            ease: [0.16, 0.77, 0.47, 0.97] // Custom easing
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
    const isInView = useInView(ref, { once: true, amount: 0.2 }) // Lower threshold for earlier trigger

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto" ref={ref}>
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
                <h2 className="text-teal-600 tracking-wide uppercase text-sm font-medium">W h y &nbsp; U s</h2>
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
                <h1 className="text-5xl font-bold mb-6">Why Choose Us</h1>
                <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    What makes us unique is our unwavering commitment to excellence. We're not just a travel agency; we're your
                    trusted travel companion. Discover the reasons why travelers like you choose us for their adventures
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                <div className="relative h-[500px] flex items-center justify-center">
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
                        className="absolute z-10 w-[100%] h-[90%] rounded-lg overflow-hidden shadow-xl"
                    >
                        <img
                            src={img1}
                            alt="Main showcase"
                            className="absolute w-full h-full object-cover"
                        />
                    </motion.div>
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
                        className="absolute z-20 w-[70%] h-[50%] rounded-lg overflow-hidden shadow-xl right-1 top-[40%] border-white"
                    >
                        <img
                            src={img2}
                            alt="Secondary showcase"
                            className="absolute w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <Gallery end={20} title="Total Projects" delay={800} />
                    <Gallery end={200} title="Happy Clients" delay={1000} />
                    <Gallery end={5} title="Current Projects" delay={1200} />
                    <Gallery end={20} title="Coming Soon" delay={1400} />
                </div>
            </div>
        </section>
    )
}