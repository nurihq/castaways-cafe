import React, { useState } from 'react';
import { Menu, X, Anchor, MapPin, Phone, Clock } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-navy text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center space-x-2">
                        <Anchor className="h-8 w-8 text-gold" />
                        <span className="font-serif text-2xl font-bold tracking-wider">Castaways</span>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#" className="hover:text-gold transition-colors">Home</a>
                        <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
                        <a href="#about" className="hover:text-gold transition-colors">About</a>
                        <a href="#contact" className="bg-gold text-navy px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                            Call Us
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-navy-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <a href="#" className="block px-3 py-2 text-white hover:text-gold">Home</a>
                        <a href="#menu" className="block px-3 py-2 text-white hover:text-gold">Menu</a>
                        <a href="#about" className="block px-3 py-2 text-white hover:text-gold">About</a>
                        <a href="#contact" className="block px-3 py-2 bg-gold text-navy rounded-md font-bold mx-4 mt-4">Call Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
