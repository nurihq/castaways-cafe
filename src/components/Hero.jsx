import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-[85vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium tracking-wider uppercase mb-2">
                        Welcome to Point Pleasant
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
                        Castaways <br />
                        <span className="text-3xl md:text-5xl lg:text-6xl font-light italic">Cafe & Grill</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-light tracking-wide max-w-xl mx-auto text-gray-100">
                        Boat Accessible Breakfast & Lunch on the Water
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a href="#menu" className="px-8 py-4 bg-white text-charcoal font-bold text-lg rounded-full hover:bg-slate-100 transition-all shadow-xl hover:scale-105">
                            View Menu
                        </a>
                        <a href="#about" className="px-8 py-4 bg-slate-blue/90 backdrop-blur-sm text-white font-bold text-lg rounded-full hover:bg-ocean transition-all shadow-xl hover:scale-105">
                            Find Us
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
