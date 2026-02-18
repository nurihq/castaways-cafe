import React from 'react';

const MenuItem = ({ title, description, price, image }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full">
        <div className="h-48 overflow-hidden">
            {image && <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />}
            {!image && <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>}
        </div>
        <div className="p-4">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif font-bold text-lg text-navy">{title}</h3>
                {price && <span className="text-gold font-bold">{price}</span>}
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
);

const MenuGrid = () => {
    // Placeholder data based on FB photos
    const items = [
        {
            title: "Breakfast Sandwich",
            description: "Hearty breakfast sandwich on a roll, perfect for a morning start.",
            image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/475240212_562561106756024_8526234745046434916_n.jpg"
        },
        {
            title: "Bacon Cheeseburger",
            description: "Juicy burger topped with crispy bacon and melted cheese, served with fries.",
            image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/638086774_858157007196431_7158324868349800946_n.jpg"
        },
        {
            title: "Classic Omelet",
            description: "Fluffy omelet served with our signature home fries.",
            image: "https://scontent.ftbs4-2.fna.fbcdn.net/v/t39.30808-6/637406688_858157067196425_3452206643718854606_n.jpg"
        },
        {
            title: "Breakfast Burrito",
            description: "Loaded breakfast burrito to fuel your day on the water.",
            image: "https://scontent.ftbs4-2.fna.fbcdn.net/v/t39.30808-6/636625302_858157130529752_5727332324203092090_n.jpg"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-navy mb-4">Customer Favorites</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Whatever you're craving, we've got something to hit the spot. "Skip the Diet" and dive in!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                    <MenuItem k={index} {...item} />
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="https://www.facebook.com/profile.php?id=100090064178342&sk=menu" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-navy text-navy px-8 py-3 rounded-full font-bold hover:bg-navy hover:text-white transition-colors">
                    See Full Menu on Facebook
                </a>
            </div>
        </div>
    );
};

export default MenuGrid;
