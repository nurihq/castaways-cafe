import React from 'react';

const MenuItem = ({ title, description, image }) => (
    <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
        <div className="h-56 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
            {image && <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />}
        </div>
        <div className="p-6">
            <h3 className="font-serif font-bold text-xl text-charcoal mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const MenuGrid = () => {
    // Reliable Unsplash images
    const items = [
        {
            title: "Breakfast Sandwich",
            description: "Hearty breakfast sandwich on a roll, perfect for a morning start.",
            image: "https://images.unsplash.com/photo-1525351484163-7529414395d8?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Bacon Cheeseburger",
            description: "Juicy burger topped with crispy bacon and melted cheese, served with fries.",
            image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Classic Omelet",
            description: "Fluffy omelet served with our signature home fries.",
            image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Breakfast Burrito",
            description: "Loaded breakfast burrito to fuel your day on the water.",
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
                <span className="text-slate-blue font-bold tracking-widest text-sm uppercase">Our Menu</span>
                <h2 className="text-4xl font-serif font-bold text-charcoal">Customer Favorites</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                    Whatever you're craving, we've got something to hit the spot. "Skip the Diet" and dive in!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
            <div className="text-center mt-16">
                <a href="https://www.facebook.com/profile.php?id=100090064178342&sk=menu" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full font-bold border-2 border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white transition-colors">
                    See Full Menu on Facebook
                </a>
            </div>
        </div>
    );
};

export default MenuGrid;
