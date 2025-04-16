import React from 'react';
import Hero from './Hero';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import ProjectCard from './ProjectCard';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="w-full">
                <Hero />
            </section>

            {/* About Section */}
            <section className="w-full py-16 bg-gray-50">
                <About />
            </section>

            {/* Gallery Section */}
            <section className="w-full py-16">
                <Gallery />
            </section>

            <section className="w-full">
                <ProjectCard />
            </section>


            {/* Contact Section */}
            <section className="w-full py-16 bg-gray-50">
                <Contact />
            </section>
        </div>
    );
};

export default Home; 