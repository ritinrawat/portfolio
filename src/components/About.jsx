import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Globe, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden glass-morphism p-2">
                            <img
                                src="https://media.istockphoto.com/id/2178848997/photo/indian-software-development-working-on-coding-computer-screen-and-flowchart-at-night-in.jpg?s=612x612&w=0&k=20&c=yWxtvhdowlilG_CPeVZ7AsQwHkYOFiCDqBUAtMj4RZk="
                                alt="Profile"
                                className="w-full h-[500px] object-cover rounded-xl"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 blur-3xl -z-10"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 blur-3xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Passionate Developer <br />
                            <span className="text-gradient">With A Purpose</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
MERN Stack Developer who approaches development with curiosity and a problem solving mindset. I like understanding the reasoning behind technical decisions and continuously improving how applications are built and scaled.

                        </p>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
