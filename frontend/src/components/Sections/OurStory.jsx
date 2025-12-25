import coupleImage from '../../assets/img.png';

const OurStory = () => {
    return (
        <section
            id="our-story"
            className="min-h-screen bg-white py-16 lg:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* 1. Header Section - Moved OUTSIDE the grid so it stays at the top on mobile */}
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-green mb-4 tracking-tight">
                        Our Story
                    </h2>
                    <div className="w-24 h-1 bg-wedding-green/20 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-500 italic font-serif">
                        Timing is everything — and ours has never followed a straight line.
                    </p>
                </div>

                {/* 2. Content Grid - Changed to 12 columns for better width control */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Image Column (Takes up 5 out of 12 columns - approx 40%) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24 mb-8 lg:mb-0">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src={coupleImage}
                                alt="Satya and Abdul"
                                className="w-full h-auto object-cover"
                                style={{ maxHeight: '85vh' }}
                            />
                        </div>
                    </div>

                    {/* Text Column (Takes up 7 out of 12 columns - approx 60% -> Wider text!) */}
                    <div className="lg:col-span-7">
                        <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-light">
                            <p>
                                For years, we lived in the same neighborhood, walking the same streets,
                                passing each other without knowing how close we already were. Two lives
                                running quietly in parallel, waiting for the right moment to meet.
                            </p>

                            <p>
                                That moment came in 2023, through something completely ordinary: a couch.
                                Satya sold it to a friend of Abdul’s, and through that small, practical
                                exchange, our paths finally crossed. What started as a simple meeting
                                quickly became something deeper. Conversation turned into connection,
                                and connection into certainty.
                            </p>

                            <p>
                                At the same time, Satya had plans to move to the USA. Flights were booked,
                                life was mapped out. But as she got to know Abdul, it became clear that
                                the future she was preparing for no longer felt like the right one.
                                Choosing Abdul meant choosing to stay. So the flights were cancelled —
                                and suddenly, Satya found herself in an almost empty studio apartment,
                                having already sold most of her furniture.
                            </p>

                            <p>
                                It felt like standing in the middle of uncertainty — but it was also the
                                beginning of building something real.
                            </p>

                            <p>
                                The moment Abdul knew he wanted to marry Satya came not long after,
                                during a trip meant to visit his mother in Turkey. Because of Abdul’s
                                previous refugee status, Turkey did not allow him to enter. What was
                                supposed to be a shared journey suddenly became a separation.
                            </p>

                            <p>
                                Satya arrived in Istanbul alone — without speaking Arabic or Turkish —
                                and still chose to continue the visit. She stayed with Abdul’s mother,
                                carrying not only courage, but love. From the Netherlands, Abdul reassured
                                his mother that Satya was a part of him — that even if he could not be
                                there physically, his presence was with her.
                            </p>

                            <p>
                                A few days later, his mother did something extraordinary. She arranged
                                for a sheikh to come and marry us religiously — across borders, across
                                screens, across circumstances. Abdul in the Netherlands. Satya in Istanbul.
                                Two hearts fully present, even when distance tried to intervene.
                            </p>

                            <p>
                                That moment sealed what we already knew: love doesn’t wait for perfect
                                conditions. It creates its own.
                            </p>

                            <p>
                                Fast forward to now — we live together, sharing our days, our routines,
                                our laughter, and our quiet moments. What began with a couch grew into a
                                choice, and that choice became a life.
                            </p>

                            <p>
                                Now, we want to celebrate — with you, together, and yes… legally 😂
                            </p>

                            <p className="font-medium text-gray-900 pt-4">
                                Join us as we celebrate our love, our journey, and the life we’re building
                                side by side. We can’t wait to share this moment with you. 🤍
                            </p>

                            {/* Simple Signature */}
                            <div className="pt-8 text-right">
                                <p className="text-3xl font-serif text-wedding-green italic">
                                    — Satya & Abdul
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
