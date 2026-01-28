import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
        title: 'Grocery E-Commerce Website',
        description: 'A full stack grocery delivery web application similar to Blinkit, featuring product listing, cart management, user authentication, and online payments.',
        image: '/image.png',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Tailwind'],
        github: 'https://github.com/ritinrawat/GroceryFrontend',
        demo: 'https://groceryfrontend-za4k.onrender.com',
       
    },
    {
        title: 'Grocery Admin Panel',
        description: 'An admin dashboard for managing products, categories, orders, and users, with secure authentication and role based access.',
        image: '/admin.png',
        tags: ['EJS', 'Node.js', 'MongoDB' , 'Tailwind'],
        github: 'https://github.com/ritinrawat/Grocery',
        demo: 'https://grocery-x2ds.onrender.com',

    },
    {
        title: 'Uber Clone Application',
        description: 'A ride booking application with real time features, location tracking using Google Maps API, and WebSocket based communication.',
        image: '/uber.png',
        tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Google Maps API'],
        github: 'https://github.com/ritinrawat/UberCloneFrontend',
        demo: 'https://uberclonefrontend.onrender.com',
    },
];

    return (
        <section id="projects" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Work</h2>
                        <p className="text-gray-400 max-w-xl">
                            Selection of my most recent and ambitious projects. Each one represents a different challenge and technical achievement.
                        </p>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center space-x-2 text-cyan-400 font-bold"
                    >
                        <span>View All Projects</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative glass-morphism rounded-3xl overflow-hidden hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-cyan-500/30"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent opacity-60"></div>
                                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <a href={project.github} className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-bold px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                                    {project.description}
                                </p>
                                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 rounded-full"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
