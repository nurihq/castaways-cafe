import React from 'react';
import { Anchor, Coffee, Sun } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-gold">
        <div className="bg-navy/10 p-4 rounded-full mb-4">
            <Icon className="w-8 h-8 text-navy" />
        </div>
        <h3 className="text-xl font-serif font-bold mb-2 text-navy">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Features = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Anchor}
                        title="Boat Accessible"
                        description="Dock your boat and enjoy a delicious meal right on the water. The perfect pitstop for your day out."
                    />
                    <FeatureCard
                        icon={Coffee}
                        title="All Day Breakfast"
                        description="From our signature omelets to fluffy pancakes, enjoy your breakfast favorites anytime."
                    />
                    <FeatureCard
                        icon={Sun}
                        title="Outdoor Seating"
                        description="Soak up the sun and enjoy the fresh air on our spacious outdoor patio."
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
