import React from 'react';
import { Anchor, Coffee, Sun } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
        <div className="bg-sand p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-slate-blue transition-colors">
            <Icon className="w-8 h-8 text-slate-blue group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-serif font-bold mb-3 text-charcoal">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
);

const Features = () => {
    return (
        <section className="py-24 bg-sand/50">
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
