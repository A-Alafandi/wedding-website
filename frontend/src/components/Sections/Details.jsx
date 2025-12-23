const Details = () => {
    return (
        <section id="details" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-navy mb-4">
                        Wedding Details
                    </h2>
                    <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
                        We are so excited to celebrate our special day with you. Here is everything you need to know.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* When */}
                    <div className="bg-gray-50/70 rounded-2xl shadow-sm py-12 px-8 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-wedding-green/10 mb-6">
                            <img
                                src="https://www.shutterstock.com/image-vector/collection-green-calendar-icons-different-260nw-2636430587.jpg"
                                alt="Calendar icon"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-wedding-navy mb-3">When</h3>
                        <p className="text-xl font-semibold text-gray-800">August 9, 2026</p>
                        <p className="text-gray-600 mt-1">Sunday</p>
                    </div>

                    {/* Time */}
                    <div className="bg-gray-50/70 rounded-2xl shadow-sm py-12 px-8 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-wedding-green/10 mb-6">
                            <img
                                src="https://www.shutterstock.com/image-vector/minimalist-green-clock-icon-bold-260nw-2697681861.jpg"
                                alt="Clock icon"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-wedding-navy mb-3">Time</h3>
                        <p className="text-xl font-semibold text-gray-800">Ceremony: TBA</p>
                        <p className="text-gray-600 mt-1">Reception to follow</p>
                    </div>

                    {/* Where */}
                    <div className="bg-gray-50/70 rounded-2xl shadow-sm py-12 px-8 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-wedding-green/10 mb-6">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/073/274/810/small/green-location-pin-icon-isolated-on-transparent-background-symbolizing-navigation-map-marker-or-destination-point-commonly-used-in-digital-maps-and-travel-applications-png.png"
                                alt="Location pin icon"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-wedding-navy mb-3">Where</h3>
                        <p className="text-xl font-semibold text-gray-800">Restaurant Masaya</p>
                        <p className="text-gray-600 text-sm leading-relaxed mt-2">
                            Villa De Blanckenborgh<br />
                            Enschedesestraat 65, Haaksbergen
                        </p>
                    </div>
                </div>

                {/* Optional: Add Google Maps embed below if desired */}
                {/* <div className="mt-20 rounded-2xl overflow-hidden shadow-xl">
          <iframe ... />
        </div> */}
            </div>
        </section>
    );
};

export default Details;
