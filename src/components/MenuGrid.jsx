import React from 'react';

const MenuItem = ({ title, description, image, badge }) => (
    <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
        <div className="h-56 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
            {badge && (
                <div className="absolute top-3 left-3 z-20 bg-ocean text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                    {badge}
                </div>
            )}
            {image && <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />}
        </div>
        <div className="p-6">
            <h3 className="font-serif font-bold text-xl text-charcoal mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const MenuGrid = () => {
    const base = import.meta.env.BASE_URL;
    const items = [
        {
            title: "Glazed Pancakes",
            description: "Golden pancakes drizzled with sweet glaze — a morning classic done right.",
            image: `${base}food/pancakes-glaze.jpg`,
            badge: "Fan Favorite"
        },
        {
            title: "Breakfast Sliders",
            description: "Bite-sized breakfast sandwiches served with crispy home fries.",
            image: `${base}food/breakfast-sliders.jpg`
        },
        {
            title: "French Toast",
            description: "Thick-cut French toast loaded with chocolate chips and powdered sugar.",
            image: `${base}food/french-toast.jpg`,
            badge: "Sweet Treat"
        },
        {
            title: "Breakfast Wrap",
            description: "A hearty wrap packed with eggs, cheese and your choice of fillings.",
            image: `${base}food/breakfast-wrap.jpg`
        },
        {
            title: "Full Breakfast Platter",
            description: "Eggs your way, crispy bacon, toast and home fries — the works.",
            image: `${base}food/full-breakfast.jpg`,
            badge: "Chef's Special"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
