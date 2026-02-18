import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-gray-500 py-12 text-center border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <p className="mb-4">&copy; {new Date().getFullYear()} Castaways Cafe & Grill. All rights reserved.</p>
                <p className="text-sm mb-2">Built with 🥞 by <a href="https://nuri.software" target="_blank" className="font-bold hover:text-white transition-colors">Nuri</a></p>
                <p className="text-sm">
                    <a href="https://www.facebook.com/profile.php?id=100090064178342" target="_blank" className="text-slate-blue hover:text-white transition-colors">
                        Follow us on Facebook
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
