import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/475240212_562561106756024_8526234745046434916_n.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-gold drop-shadow-lg">
                        Castaways Cafe & Grill
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-light tracking-wide max-w-2xl mx-auto">
                        Boat Accessible Breakfast & Lunch in Point Pleasant
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#menu" className="px-8 py-3 bg-gold text-navy font-bold text-lg rounded-md hover:bg-yellow-400 transition-transform transform hover:-translate-y-1 shadow-lg">
                            View Menu
                        </a>
                        <a href="#contact" className="px-8 py-3 border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white hover:text-navy transition-transform transform hover:-translate-y-1">
                            Find Us
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
