import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl font-serif font-bold text-gold mb-6">About Castaways</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Located in the heart of Point Pleasant, NJ, Castaways Cafe & Grill is your go-to spot for comfort food with a view.
                            Whether you're arriving by car or by boat, our friendly staff is ready to serve up hearty breakfasts and delicious lunches.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            We pride ourselves on our relaxed atmosphere, outdoor seating, and portions that leave you satisfied. Come join us!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                                <span>1671 Beaver Dam Rd, Point Pleasant, NJ, 08742</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="w-6 h-6 text-gold shrink-0" />
                                <span>+1 732-899-5580</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Mail className="w-6 h-6 text-gold shrink-0" />
                                <span>Castawayscafeandgrill@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-gold/20">
                        {/* Map Placeholder or Shop Exterior Image */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.688796472283!2d-74.0759880242691!3d40.08332197149591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1868310000001%3A0x6b1c67840134015!2s1671%20Beaver%20Dam%20Rd%2C%20Point%20Pleasant%2C%20NJ%2008742!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
