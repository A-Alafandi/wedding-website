const Footer = () => {
    const weddingDate = new Date('2026-08-09');

    // smooth scroll handler
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-wedding-navy text-white pt-16 pb-8 border-t-4 border-wedding-gold">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 items-center">

                    {/* 1. Couple & Date */}
                    <div className="text-center md:text-left space-y-2">
                        <h3 className="text-4xl font-cursive text-wedding-gold mb-2">
                            Satya & Abdul
                        </h3>
                        <p className="text-wedding-ivory/90 font-serif text-lg tracking-wide">
                            {weddingDate.toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </p>
                    </div>

                    {/* 2. Centerpiece / Hashtag */}
                    <div className="text-center py-6 md:py-0">
                        <div className="inline-block border-y border-wedding-ivory/20 py-2 px-6">
                            <span className="text-2xl font-serif text-wedding-ivory/90 tracking-widest">
                                #SatyaAndAbdul
                            </span>
                        </div>
                        <p className="mt-3 text-wedding-ivory/60 text-sm italic">
                            Can't wait to celebrate with you!
                        </p>
                    </div>

                    {/* 3. Navigation Links */}
                    <div className="text-center md:text-right">
                        <h4 className="font-serif text-xl text-wedding-gold mb-4">Navigate</h4>
                        <nav className="flex flex-col gap-3 text-wedding-ivory/80">
                            {['RSVP', 'Travel', 'FAQ'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="hover:text-white hover:translate-x-1 transition-all duration-300 text-center md:text-right"
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-wedding-ivory/10 text-center md:flex md:justify-between items-center text-wedding-ivory/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} Satya & Abdul. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 flex items-center justify-center gap-1">
                        Made with <span className="text-red-400">❤</span> for our special day
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
