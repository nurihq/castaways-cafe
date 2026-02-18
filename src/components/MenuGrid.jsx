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
    const items = [
        {
            title: "Eggs Benedict",
            description: "Poached eggs on a toasted English muffin with Canadian bacon and silky hollandaise sauce.",
            image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=2000&auto=format&fit=crop",
            badge: "Fan Favorite"
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
            title: "Pancake Stack",
            description: "Fluffy American pancakes piled high with fresh berries, whipped cream, and warm maple syrup.",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2000&auto=format&fit=crop",
            badge: "Sweet Treat"
        },
        {
            title: "Crab Cake Platter",
            description: "Fresh lump crab cakes, pan-seared golden brown, served with remoulade and a side salad.",
            image: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=2000&auto=format&fit=crop",
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
