import React from 'react';
import masaya from"../../assets/masaya.jpeg";

const Travel = () => {
    return (
        <section id="travel" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* --- Header --- */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-green mb-6">
                        Travel & Accommodations
                    </h2>
                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto font-serif italic">
                        "Helping you get here and stay comfortably."
                    </p>
                </div>

                {/* --- Top Row: Venue Map & Helpful Apps --- */}
                <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">

                    {/* Left: Illustrated Venue Map */}
                    <div className="relative rounded-3xl overflow-hidden shadow-xl group h-[400px]">
                        <img
                            src={masaya}
                            alt="Illustrated map of Restaurant Masaya"
                            // Added 'object-top' to crop from the bottom
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay Card - Smaller & Transparent */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/75 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/40 text-center">
                            <h3 className="text-xl font-serif text-wedding-navy mb-1">
                                Restaurant Masaya
                            </h3>
                            <p className="text-gray-800 text-sm font-medium mb-3">
                                Enschedesestraat 65, 7481 CL Haaksbergen
                            </p>
                            <a
                                href="https://www.google.com/maps/place/Masaya+restaurant/@52.1587402,6.7483502,17z/data=!3m1!4b1!4m6!3m5!1s0x47b8733399f4fbf3:0x1540bfbb73c6fab5!8m2!3d52.1587402!4d6.7509251!16s%2Fg%2F11v0pwgbdc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-wedding-green/90 hover:bg-wedding-navy text-white text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full transition-colors"
                            >
                                Open Map 📍
                            </a>
                        </div>
                    </div>

                    {/* Right: Helpful Apps Box */}
                    <div className="bg-stone-50 rounded-3xl p-8 md:p-10 border border-stone-100">
                        <div className="flex items-start gap-4 mb-6">
                            <span className="text-4xl">💡</span>
                            <div>
                                <h3 className="text-2xl font-serif text-wedding-navy mb-2">
                                    Helpful Apps to Download
                                </h3>
                                <p className="text-gray-600">
                                    Make your life easier by downloading these two apps before you land:
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-wedding-green/10 rounded-full flex items-center justify-center text-wedding-green font-bold text-sm">
                                    9292
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">9292.nl</h4>
                                    <p className="text-sm text-gray-500">The essential app for all Dutch trains & buses.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-xl">
                                    G
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Google Maps</h4>
                                    <p className="text-sm text-gray-500">Perfectly accurate for driving directions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Middle Section: Getting There (3 Columns) --- */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-serif text-wedding-navy">Getting to Haaksbergen</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Option 1 */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-wedding-green/10 rounded-full flex items-center justify-center text-2xl mb-6 text-wedding-green">
                                🇳🇱
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">From Amsterdam</h4>
                            <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">Schiphol Airport (AMS)</p>

                            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                                <li><strong className="text-gray-900">By Car:</strong> 1 hr 45 min drive.</li>
                                <li><strong className="text-gray-900">By Train:</strong> Take the train to Enschede or Hengelo (~2 hrs).</li>
                                <li className="pt-2 border-t border-dashed border-gray-200">
                                    <span className="text-wedding-green font-semibold">The Last Mile:</span> From the station, take a 15 min taxi or Bus 63 to Haaksbergen.
                                </li>
                            </ul>
                        </div>

                        {/* Option 2 */}
                        <div className="bg-white border-2 border-wedding-green/10 rounded-2xl p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-wedding-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                RECOMMENDED
                            </div>
                            <div className="w-14 h-14 bg-wedding-green/10 rounded-full flex items-center justify-center text-2xl mb-6 text-wedding-green">
                                🇩🇪
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">From Germany</h4>
                            <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">Düsseldorf (DUS) or Münster (FMO)</p>

                            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                                <li><strong className="text-gray-900">Why?</strong> They are much closer to the venue than Amsterdam.</li>
                                <li><strong className="text-gray-900">Travel Time:</strong> Only a 50–70 min drive.</li>
                                <li className="pt-2 border-t border-dashed border-gray-200">
                                    Rental cars are highly recommended from these airports.
                                </li>
                            </ul>
                        </div>

                        {/* Option 3 */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-wedding-green/10 rounded-full flex items-center justify-center text-2xl mb-6 text-wedding-green">
                                ✈️
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">From Eindhoven</h4>
                            <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">Eindhoven Airport (EIN)</p>

                            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                                <li><strong className="text-gray-900">Best For:</strong> Budget flights (Ryanair / WizzAir).</li>
                                <li><strong className="text-gray-900">Travel Time:</strong> 1 hr 45 min drive.</li>
                                <li className="pt-2 border-t border-dashed border-gray-200">
                                    Good option if flying from within Europe on a budget.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- Bottom Section: Where to Stay --- */}
                <div className="bg-stone-50 rounded-[3rem] p-8 md:p-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-serif text-wedding-navy mb-4">Where to Stay</h3>
                        <p className="text-gray-600">
                            We recommend booking early, as Haaksbergen is a popular spot for weekend getaways!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Option A: Local */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-8 rounded-full bg-wedding-green text-white flex items-center justify-center font-serif font-bold">A</span>
                                <h4 className="text-2xl font-serif text-wedding-green">The Local Experience</h4>
                            </div>
                            <p className="text-gray-500 mb-8 italic text-sm border-l-2 border-wedding-green pl-4">
                                Stay here if you want to be within minutes of the venue (Masaya).
                            </p>

                            <div className="space-y-6">
                                <div className="group">
                                    <h5 className="font-bold text-gray-800 text-lg group-hover:text-wedding-green transition-colors">Hotel de Watermölle</h5>
                                    <p className="text-gray-600 text-sm">The most premium/romantic option nearby.</p>
                                </div>
                                <div className="group">
                                    <h5 className="font-bold text-gray-800 text-lg group-hover:text-wedding-green transition-colors">Hotel Erve Bruggert</h5>
                                    <p className="text-gray-600 text-sm">Quiet, rustic, and very close to the venue.</p>
                                </div>
                                <div className="group">
                                    <h5 className="font-bold text-gray-800 text-lg group-hover:text-wedding-green transition-colors">B&B Hoeve de Veldmaat</h5>
                                    <p className="text-gray-600 text-sm">A cozy, local Bed & Breakfast.</p>
                                </div>
                            </div>
                        </div>

                        {/* Option B: City */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-8 rounded-full bg-wedding-navy text-white flex items-center justify-center font-serif font-bold">B</span>
                                <h4 className="text-2xl font-serif text-wedding-navy">The City Experience</h4>
                            </div>
                            <p className="text-gray-500 mb-8 italic text-sm border-l-2 border-wedding-navy pl-4">
                                Stay in <strong>Enschede</strong> if you want more shops, cafes, and easy train access.
                            </p>

                            <div className="space-y-6">
                                <div className="group">
                                    <h5 className="font-bold text-gray-800 text-lg group-hover:text-wedding-navy transition-colors">IntercityHotel Enschede</h5>
                                    <p className="text-gray-600 text-sm">Right next to the train station (perfect for those without a car).</p>
                                </div>
                                <div className="group">
                                    <h5 className="font-bold text-gray-800 text-lg group-hover:text-wedding-navy transition-colors">Van der Valk Enschede</h5>
                                    <p className="text-gray-600 text-sm">A large, modern hotel with a pool—located between Enschede and Haaksbergen.</p>
                                </div>
                            </div>

                            {/* Decorative Image for bottom section */}
                            <div className="mt-10 rounded-xl overflow-hidden shadow-lg h-40">
                                <img
                                    src="https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/16:9/w_2048,h_1152,c_limit/Kishani%20Perera_Point%20Dume%20Project_Photographer%20Anthony%20Barcelo.jpg"
                                    alt="Hotel Interior"
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Travel;
