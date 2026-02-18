import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const About = () => {
    return (
        <div id="about" className="bg-charcoal text-white relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-ocean/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <h2 className="text-4xl font-serif font-bold text-white mb-6">About Castaways</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-ocean to-transparent rounded-full"></div>
                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                            Located in the heart of Point Pleasant, NJ, Castaways Cafe & Grill is your go-to spot for comfort food with a view.
                            Whether you're arriving by car or by boat, our friendly staff is ready to serve up hearty breakfasts and delicious lunches.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                            We pride ourselves on our relaxed atmosphere, outdoor seating, and portions that leave you satisfied. Come join us!
                        </p>

                        <div className="pt-8 space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/10 rounded-full">
                                    <MapPin className="w-6 h-6 text-ocean" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Visit Us</h4>
                                    <span className="text-gray-400">1671 Beaver Dam Rd, Point Pleasant, NJ</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-white/10 rounded-full">
                                    <Phone className="w-6 h-6 text-ocean" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Call Us</h4>
                                    <span className="text-gray-400">+1 732-899-5580</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.688796472283!2d-74.0759880242691!3d40.08332197149591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1868310000001%3A0x6b1c67840134015!2s1671%20Beaver%20Dam%20Rd%2C%20Point%20Pleasant%2C%20NJ%2008742!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
