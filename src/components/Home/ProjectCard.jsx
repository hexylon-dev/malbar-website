// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

const Projectcard = () => {
    //     const [activeIndex, setActiveIndex] = useState(0)
    //     const [isMobile, setIsMobile] = useState(false)

    //     const testimonials = [
    //         {
    //             id: 1,
    //             name: "John Smith",
    //             title: "Marketing Director",
    //             image: "/placeholder.svg?height=80&width=80",
    //             text: "Working with this team transformed our online presence. Their attention to detail and commitment to excellence truly sets them apart.",
    //         },
    //         {
    //             id: 2,
    //             name: "Sarah Johnson",
    //             title: "Product Manager",
    //             image: "/placeholder.svg?height=80&width=80",
    //             text: "The level of creativity and technical expertise demonstrated by this team exceeded our expectations. Delivered on time, with outstanding results.",
    //         },
    //         {
    //             id: 3,
    //             name: "Michael Chen",
    //             title: "CEO, TechSolutions",
    //             image: "/placeholder.svg?height=80&width=80",
    //             text: "I've worked with many dev teams, but none matched the professionalism and quality of work this team consistently delivers.",
    //         },
    //         {
    //             id: 4,
    //             name: "Emily Rodriguez",
    //             title: "Design Lead",
    //             image: "/placeholder.svg?height=80&width=80",
    //             text: "Their collaborative approach made the entire process smooth. They truly understand how to bring a vision to life.",
    //         },
    //         {
    //             id: 5,
    //             name: "David Kim",
    //             title: "Operations Manager",
    //             image: "/placeholder.svg?height=80&width=80",
    //             text: "From concept to delivery, the team demonstrated exceptional skill and dedication. Highly recommended.",
    //         },
    //     ]

    //     const getWrappedIndex = (index) => {
    //         const total = testimonials.length
    //         return ((index % total) + total) % total
    //     }

    //     const getVisibleTestimonials = () => {
    //         if (isMobile) {
    //             return [testimonials[getWrappedIndex(activeIndex)]]
    //         } else {
    //             return [
    //                 testimonials[getWrappedIndex(activeIndex)],
    //                 testimonials[getWrappedIndex(activeIndex + 1)],
    //                 testimonials[getWrappedIndex(activeIndex + 2)],
    //             ]
    //         }
    //     }

    //     useEffect(() => {
    //         const handleResize = () => setIsMobile(window.innerWidth < 768)
    //         handleResize()
    //         window.addEventListener("resize", handleResize)
    //         return () => window.removeEventListener("resize", handleResize)
    //     }, [])

    //     useEffect(() => {
    //         const interval = setInterval(() => {
    //             handleNext()
    //         }, 5000)
    //         return () => clearInterval(interval)
    //     }, [activeIndex])

    //     const handlePrev = () => {
    //         setActiveIndex((prev) => getWrappedIndex(prev - 1))
    //     }

    //     const handleNext = () => {
    //         setActiveIndex((prev) => getWrappedIndex(prev + 1))
    //     }

    //     const handleDotClick = (index) => {
    //         setActiveIndex(index)
    //     }

    //     const visibleTestimonials = getVisibleTestimonials()

    //     return (
    //         <div className="w-full py-16 px-4 bg-gray-50">
    //             <div className="max-w-7xl mx-auto">
    //                 <div className="text-center mb-12">
    //                     <h2 className="text-3xl md:text-4xl font-bold mb-4"
    //                         style={{ fontFamily: "Poppins, sans-serif" }}>
    //                         What Our <span className="text-orange-600">Clients</span> Say
    //                     </h2>
    //                     <p className="text-gray-600 max-w-2xl mx-auto">
    //                         Don't just take our word for it. Hear what our clients have to say about their experience working with our
    //                         team.
    //                     </p>
    //                 </div>

    //                 <div className="relative">
    //                     {/* Navigation */}
    //                     <button
    //                         onClick={handlePrev}
    //                         className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full shadow-md p-2 z-10 text-orange-600 hover:bg-orange-50 transition"
    //                         aria-label="Previous"
    //                     >
    //                         <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
    //                     </button>

    //                     <button
    //                         onClick={handleNext}
    //                         className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full shadow-md p-2 z-10 text-orange-600 hover:bg-orange-50 transition"
    //                         aria-label="Next"
    //                     >
    //                         <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
    //                     </button>

    //                     {/* Testimonials */}
    //                     <div className="overflow-hidden">
    //                         <AnimatePresence mode="wait">
    //                             <motion.div
    //                                 className="flex gap-6 md:gap-8 justify-center md:justify-between"
    //                                 key={activeIndex}
    //                                 initial={{ opacity: 0, x: 100 }}
    //                                 animate={{ opacity: 1, x: 0 }}
    //                                 exit={{ opacity: 0, x: -100 }}
    //                                 transition={{ duration: 0.5 }}
    //                             >
    //                                 {visibleTestimonials.map((item, index) => (
    //                                     <motion.div
    //                                         key={`${item.id}-${index}`}
    //                                         className="w-full md:w-1/3 bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 md:p-8"
    //                                         style={{
    //                                             minWidth: isMobile ? "100%" : "calc(33.333% - 1.5rem)",
    //                                         }}
    //                                         whileHover={{ scale: 1.03 }}
    //                                     >
    //                                         <p className="text-gray-700 mb-6 text-base leading-relaxed">{item.text}</p>
    //                                         <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
    //                                             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-100">
    //                                                 <img
    //                                                     src={item.image}
    //                                                     alt={item.name}
    //                                                     className="w-full h-full object-cover"
    //                                                 />
    //                                             </div>
    //                                             <div className="ml-4">
    //                                                 <h3 className="font-bold text-gray-900">{item.name}</h3>
    //                                                 <p className="text-orange-600 text-sm">{item.title}</p>
    //                                             </div>
    //                                         </div>
    //                                     </motion.div>
    //                                 ))}
    //                             </motion.div>
    //                         </AnimatePresence>
    //                     </div>

    //                     {/* Dots */}
    //                     <div className="flex justify-center mt-8">
    //                         {testimonials.map((_, index) => (
    //                             <button
    //                                 key={index}
    //                                 onClick={() => handleDotClick(index)}
    //                                 className={`mx-1 transition-all duration-300 focus:outline-none ${index === activeIndex
    //                                     ? "w-6 h-2 bg-orange-600 rounded-full"
    //                                     : "w-2 h-2 bg-gray-300 hover:bg-orange-300 rounded-full"
    //                                     }`}
    //                                 aria-label={`Go to slide ${index + 1}`}
    //                             />
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
}

export default Projectcard