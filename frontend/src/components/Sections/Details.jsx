const Details = () => {
    return (
        <section id="details" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-green mb-4 tracking-tight">
                        Wedding Details
                    </h2>
                    <div className="w-24 h-1 bg-wedding-green/20 mx-auto mb-6 rounded-full"></div>
                    <p className="text-black text-lg font-light max-w-3xl mx-auto leading-relaxed">
                        We are so excited to celebrate our special day with you. Here is everything you need to know.
                    </p>
                </div>

                {/* Cards - Enhanced Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* When Card */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 py-12 px-8 text-center border border-gray-100 hover:border-wedding-green/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-wedding-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-wedding-green/10 to-wedding-green/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {/* Modern Calendar Icon */}
                                <svg className="w-10 h-10 text-wedding-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif text-wedding-navy mb-3 tracking-tight">When</h3>
                            <p className="text-2xl font-bold text-gray-900 mb-2">August 9, 2026</p>
                            <div className="inline-flex items-center justify-center gap-2 text-wedding-green font-medium text-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Sunday</span>
                            </div>
                        </div>
                    </div>

                    {/* Time Card */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 py-12 px-8 text-center border border-gray-100 hover:border-wedding-green/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-wedding-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-wedding-green/10 to-wedding-green/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {/* Modern Clock Icon */}
                                <svg className="w-10 h-10 text-wedding-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif text-wedding-navy mb-3 tracking-tight">Time</h3>
                            <div className="space-y-3">
                                <div className="bg-wedding-green/5 rounded-lg py-3 px-4">
                                    <p className="text-lg font-semibold text-gray-800">Ceremony</p>
                                    <p className="text-gray-600 mt-1 text-sm">Details to be announced</p>
                                </div>
                                <div className="bg-wedding-green/5 rounded-lg py-3 px-4">
                                    <p className="text-lg font-semibold text-gray-800">Reception</p>
                                    <p className="text-gray-600 mt-1 text-sm">To follow ceremony</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Where Card */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 py-12 px-8 text-center border border-gray-100 hover:border-wedding-green/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-wedding-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-wedding-green/10 to-wedding-green/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {/* Modern Location Icon */}
                                <svg className="w-10 h-10 text-wedding-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif text-wedding-navy mb-3 tracking-tight">Where</h3>
                            <p className="text-xl font-bold text-gray-900 mb-4">Restaurant Masaya</p>
                            <div className="space-y-2 text-gray-600 text-sm leading-relaxed bg-gray-50/50 rounded-xl p-4">
                                <div className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-wedding-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span>Villa De Blanckenborgh</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-wedding-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                    <span>Enschedesestraat 65, Haaksbergen</span>
                                </div>
                            </div>
                            <button className="mt-6 text-wedding-green hover:text-wedding-navy font-medium text-sm tracking-wide inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                View on map
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Details;
