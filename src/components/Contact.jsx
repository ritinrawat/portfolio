import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4  border-2 border-white/5 ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1  ">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Let&apos;s Build Something <br />
                            <span className="text-gradient">Contact</span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: 'Email', value: 'ritinrawat85@gmail.com', href: 'mailto:hello@ritin.dev' },
                                { icon: MapPin, label: 'Location', value: 'Jalandhar/punjab', href: '#' },
                                { icon: Phone, label: 'Phone', value: '+91 7529805456', href: 'tel:+91XXXXXXXXXX' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 p-4 glass-morphism rounded-2xl group cursor-pointer hover:bg-white/5 transition-all">
                                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                                        <p className="text-white font-semibold">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex space-x-6 mt-12 pl-4">
                            {[{icon:Github, href:"https://github.com/RitinRawat"}, {icon:Linkedin, href:"https://www.linkedin.com/in/ritin-r-63a0b1261"}].map((Icon, index) => (
                                <a key={index} href={Icon.href} className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                                    <Icon.icon size={28} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                
                </div>
            </div>
        </section>
    );
};

export default Contact;
