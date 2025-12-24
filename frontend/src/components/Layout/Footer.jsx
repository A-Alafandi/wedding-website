const Footer = () => {
    const weddingDate = new Date('2026-08-09');

    return (
        <footer className="bg-wedding-navy text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Couple Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-cursive text-wedding-gold mb-4">
                            Satya & Abdul
                        </h3>
                        <p className="text-wedding-ivory/80">
                            Getting married on { weddingDate.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center">
                        <h4 className="font-serif text-xl mb-4">Contact Us</h4>
                        <div className="space-y-2">
                            <p className="text-wedding-ivory/80">
                                ✉️ contact@satya-abdulrazak.com
                            </p>
                            <p className="text-wedding-ivory/80">
                                📍 Restaurant Masaya, Haaksbergen, NL
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-right">
                        <h4 className="font-serif text-xl mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <a href="#rsvp" className="block text-wedding-ivory/80 hover:text-wedding-gold transition-colors">
                                RSVP
                            </a>
                            <a href="#travel" className="block text-wedding-ivory/80 hover:text-wedding-gold transition-colors">
                                Travel Info
                            </a>
                            <a href="#faq" className="block text-wedding-ivory/80 hover:text-wedding-gold transition-colors">
                                FAQ
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-wedding-ivory/20 text-center">
                    <p className="text-wedding-ivory/60">
                        Made with ❤️ for our special day • {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
