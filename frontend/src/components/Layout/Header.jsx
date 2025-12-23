import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'hero' },
        { name: 'Our Story', to: 'our-story' },
        { name: 'Details', to: 'details' },
        { name: 'Travel', to: 'travel' },
        { name: 'Gallery', to: 'gallery' },
        { name: 'RSVP', to: 'rsvp' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                // Added shadow when white, and subtle gradient when transparent
                scrolled
                    ? 'bg-white shadow-md py-2'
                    : 'bg-gradient-to-b from-black/50 to-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className={`text-2xl font-heading font-bold tracking-widest transition-colors drop-shadow-md ${
                    scrolled ? 'text-wedding-green-dark drop-shadow-none' : 'text-white'
                }`}>
                    S <span className="text-wedding-gold">&</span> A
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className={`cursor-pointer text-sm font-medium tracking-wide uppercase hover:text-wedding-gold transition-colors drop-shadow-sm ${
                                scrolled
                                    ? 'text-wedding-green-dark'
                                    : 'text-white/90 hover:text-white'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden text-2xl drop-shadow-md ${
                        scrolled ? 'text-wedding-green-dark' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="text-wedding-green-dark font-medium uppercase tracking-wide text-sm"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
