import coupleImage from '../../assets/img.png'; // Replace with your actual image path

const OurStory = () => {
    return (
        <section
            id="our-story"
            className="py-24 bg-white"
            aria-labelledby="our-story-heading"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={coupleImage}
                            alt="Satya and Abdulrazak on their wedding day, walking hand in hand in a beautiful garden"
                            className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="text-left space-y-8">
                        <h2
                            id="our-story-heading"
                            className="text-4xl md:text-5xl font-bold text-wedding-green"
                        >
                            Our Story
                        </h2>

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
                            <p>
                                It all started with a chance encounter that blossomed into a
                                beautiful friendship. From our first coffee date to countless
                                adventures together, we knew there was something special between
                                us.
                            </p>

                            <p>
                                Abdulrazak, affectionately known as "Abdulito" by his friends,
                                charmed Satya with his humor and kindness. Satya captivated
                                Abdulrazak with her radiant smile and adventurous spirit.
                                Together, we've built a life filled with laughter, love, and
                                shared dreams.
                            </p>

                            <p>
                                On a quiet evening under the stars, Abdulrazak asked the most
                                important question, and Satya said yes! Now, we are thrilled to
                                invite you to celebrate the beginning of our forever. We can't
                                wait to share this magical day with our favorite people in the
                                world.
                            </p>
                        </div>

                        {/* Signature */}
                        <p className="text-right text-xl md:text-2xl font-serif text-wedding-navy italic pt-8">
                            — Satya & Abdulrazak
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
