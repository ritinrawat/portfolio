import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Trophy } from 'lucide-react';

const Experience = () => {
    const education = [
        {
            degree: 'Bachelor of Computer Applications',
            institution: 'DAV college',
            duration: '2022 - 2025',
    
        },
        {
            degree: '12th Grade (Humanities)',
            institution: 'Shree Parvati jain Senior Secondary School',
            duration: '2021 - 2022',
    
        },
    ];

    const honors = [
        {
            title: 'City college Hackathon',
            organization: 'Google developer Group',
            year: '2025',
            desc: 'Developed an AI-powered Agriculture Management System .',
            
        },
        {
    title: 'Software Development Intern',
    organization: 'HiSpirits Technologies/IT Solution',
    year: '2025-2026',
    desc: 'Completed a 6-month internship focusing on web development, working with real-world projects, APIs.',
},
       {
    title: 'Technical Event Participant',
    organization: 'Inter-College IT Fest',
    year: '2024',
    desc: 'Actively participated in inter-college technical competitions, enhancing practical coding and teamwork skills.',
},

    ];

    return (
        <section id="experience" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-4 mb-12">
                            <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                                <GraduationCap size={32} />
                            </div>
                            <h2 className="text-4xl font-black">Education</h2>
                        </div>

                        <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                            {education.map((item, index) => (
                                <div key={index} className="relative pl-12 group">
                                    <div className="absolute left-0 top-2 w-[40px] h-[40px] rounded-full bg-[#030014] border-2 border-white/10 group-hover:border-cyan-500/50 flex items-center justify-center z-10 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                                    </div>
                                    <div className="glass-morphism p-6 rounded-2xl group-hover:bg-white/5 transition-all">
                                        <span className="text-cyan-400 text-sm font-bold">{item.duration}</span>
                                        <h3 className="text-xl font-bold mt-1">{item.degree}</h3>
                                        <p className="text-gray-400 mt-2">{item.institution}</p>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center space-x-4 mb-12">
                            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                                <Award size={32} />
                            </div>
                            <h2 className="text-4xl font-black">Achievements</h2>
                        </div>

                        <div className="grid gap-6">
                            {honors.map((item, index) => (
                                <div key={index} className="flex gap-6 p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                                        <Trophy size={24} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                            <span className="text-xs font-bold text-gray-500 px-2 py-1 bg-white/5 rounded-md">{item.year}</span>
                                        </div>
                                        <p className="text-purple-400 text-sm font-semibold mb-2">{item.organization}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
