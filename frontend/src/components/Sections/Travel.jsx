const Travel = () => {
    const accommodations = [
        {
            name: "Luxury Hotel & Spa",
            type: "5-star accommodation with full amenities",
            code: "WEDDING2026",
            image: "https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/16:9/w_2048,h_1152,c_limit/Kishani%20Perera_Point%20Dume%20Project_Photographer%20Anthony%20Barcelo.jpg", // Elegant luxury room
            website: "https://example-luxuryhotel.com" // Replace with real link
        },
        {
            name: "City Center Boutique",
            type: "Charming hotel in the heart of the city",
            code: "SA2026",
            image: "https://thumbs.dreamstime.com/b/luxurious-bedroom-interior-modern-furniture-classic-white-design-large-bed-chandelier-natural-light-windows-elegant-387032649.jpg", // Another luxury room variant
            website: "https://example-boutiquehotel.com" // Replace with real link
        }
    ];

    return (
        <section id="travel" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-navy mb-4">
                        Travel & Accommodations
                    </h2>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        Helping you get here and stay comfortably.
                    </p>
                </div>

                {/* Top Row: Illustrated Map + Getting There & Where to Stay */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
                    {/* Illustrated Venue Map */}
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="https://i.etsystatic.com/26453231/r/il/2902fd/6520133023/il_fullxfull.6520133023_qnfd.jpg" // Hand-drawn floral venue illustration
                            alt="Illustrated map of Restaurant Masaya wedding venue with garden areas"
                            className="w-full h-auto object-cover"
                        />
                        <div className="relative -mt-32 mx-8">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 text-center">
                                <h3 className="text-2xl font-serif text-wedding-navy mb-2">
                                    Restaurant Masaya
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Villa De Blanckenborgh<br />
                                    Enschedesestraat 65<br />
                                    7481 CL Haaksbergen
                                </p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Enschedesestraat+65%2C+Haaksbergen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block bg-wedding-green text-white px-6 py-3 rounded-full font-medium hover:bg-wedding-navy transition-colors"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Getting There & Where to Stay Text */}
                    <div className="space-y-12">
                        {/* Getting There */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif text-wedding-navy mb-4 flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wedding-green/10 text-wedding-green text-2xl">
                  ✈️
                </span>
                                Getting There
                            </h3>
                            <p className="text-gray-700 leading-relaxed ml-16">
                                The nearest major airport is in Enschede or nearby cities.<br />
                                Haaksbergen is easily accessible by car or public transport.<br /><br />
                                <strong>Distance from Enschede: ~15km</strong>
                            </p>
                        </div>

                        {/* Where to Stay */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif text-wedding-navy mb-6 flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wedding-green/10 text-wedding-green text-2xl">
                  🛏️
                </span>
                                Where to Stay
                            </h3>
                            <div className="space-y-6">
                                {accommodations.map((hotel, index) => (
                                    <div key={index} className="pl-16 relative">
                                        <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-wedding-green/20"></div>
                                        <h4 className="font-serif text-xl text-wedding-navy mb-1">
                                            {hotel.name}
                                        </h4>
                                        <p className="text-gray-600 text-sm mb-3">{hotel.type}</p>
                                        <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-wedding-green">
                        Book with our code <strong>{hotel.code}</strong>
                      </span>
                                            <a
                                                href={hotel.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-wedding-green hover:text-wedding-navy font-medium"
                                            >
                                                Visit website →
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Hotel Photos */}
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://westernartandarchitecture.com/wp-content/uploads/converted_files/uploads/hotel-del-coronado-resort.png" // Grand luxury hotel exterior
                            alt="Exterior of Luxury Hotel & Spa"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={accommodations[0].image} // Re-use first room image or alternate
                            alt="Elegant room at Luxury Hotel & Spa"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Travel;
