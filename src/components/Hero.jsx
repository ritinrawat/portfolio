import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8"
                >
                    <Rocket size={16} />
                    <span>Available for New Opportunities</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
                >
                    MERN Stack <br />
                    <span className="text-gradient">Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light"
                >
                    Hi, I&apos;m <span className="text-white font-semibold">Ritin Rawat</span>.
                    A MERN Stack Developer with 6 months of internship experience building full stack web applications.
                    Skilled in React.js, Node.js, MongoDB, REST APIs, real time features.
                </motion.p>



                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a href="#projects" className="btn-primary group">
                        Explore My Work
                        <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                    <a href="./resume.pdf" download='Ritin-Rawat-Resume.pdf' className="btn-secondary group">
                        <Download className="inline-block mr-2 group-hover:-translate-y-1 transition-transform" size={20} />
                        Download CV
                    </a>
                </motion.div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>
        </section>
    );
};

export default Hero;
