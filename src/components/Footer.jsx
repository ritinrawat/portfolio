import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <a href="#" className="text-2xl font-black tracking-tighter text-gradient">
                        Ritin.dev
                    </a>
                    <p className="text-gray-500 text-sm mt-2">
                        © {new Date().getFullYear()} Ritin Rawat. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-8">
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="text-gray-500 text-sm italic font-light">
                    Built with React & Tailwind CSS
                </div>
            </div>
        </footer>
    );
};

export default Footer;
