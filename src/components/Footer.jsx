import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-navy-900 text-gray-400 py-8 text-center bg-[#000050]">
            <div className="max-w-7xl mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Castaways Cafe & Grill. All rights reserved.</p>
                <p className="mt-2 text-sm">
                    <a href="https://www.facebook.com/profile.php?id=100090064178342" target="_blank" className="hover:text-gold transition-colors">
                        Follow us on Facebook
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
