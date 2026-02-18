import React, { useState } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center space-x-2 group cursor-pointer">
                        <Anchor className="h-8 w-8 text-slate-blue group-hover:text-ocean transition-colors" />
                        <span className="font-serif text-2xl font-bold tracking-tight text-charcoal group-hover:text-slate-blue transition-colors">Castaways</span>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center font-medium">
                        <a href="#" className="text-charcoal hover:text-ocean transition-colors">Home</a>
                        <a href="#menu" className="text-charcoal hover:text-ocean transition-colors">Menu</a>
                        <a href="#about" className="text-charcoal hover:text-ocean transition-colors">About</a>
                        <a href="#about" className="bg-slate-blue text-white px-6 py-2.5 rounded-full hover:bg-ocean transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Call Us
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal hover:text-ocean focus:outline-none p-2">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2 text-center">
                        <a href="#" className="block px-3 py-3 text-charcoal hover:text-ocean hover:bg-sand rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#menu" className="block px-3 py-3 text-charcoal hover:text-ocean hover:bg-sand rounded-lg transition-colors" onClick={() => setIsOpen(false)}>Menu</a>
                        <a href="#about" className="block px-3 py-3 text-charcoal hover:text-ocean hover:bg-sand rounded-lg transition-colors" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#about" className="block px-3 py-3 bg-slate-blue text-white rounded-lg font-bold mx-2 mt-4 hover:bg-ocean transition-colors" onClick={() => setIsOpen(false)}>Call Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
