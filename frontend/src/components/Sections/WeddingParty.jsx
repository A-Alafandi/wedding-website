const WeddingParty = () => {
    const bridesmaids = [
        {
            name: "Emma Johnson",
            role: "Maid of Honor",
            description: "Satya's sister and lifelong best friend. Always there with love and laughter.",
            photo: "https://www.frenchweddingstyle.com/wp-content/uploads/2023/02/Darby-Mitchell-Photography-2-2.jpg"
        },
        {
            name: "Sophia Martinez",
            role: "Bridesmaid",
            description: "College roommate who turned into family. Brings joy to every moment.",
            photo: "https://www.theknot.com/tk-media/images/55f5bd7f-54a4-4d2a-9e0f-439a824dbc2c"
        },
        {
            name: "Olivia Chen",
            role: "Bridesmaid",
            description: "Adventure partner and voice of reason. Can't imagine this day without her.",
            photo: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3602511132549595587"
        },
        {
            name: "Isabella Garcia",
            role: "Bridesmaid",
            description: "The one who makes every gathering brighter with her energy and kindness.",
            photo: "https://i.pinimg.com/originals/3e/4f/4d/3e4f4d8e9b0f7a5d8f0e9a2b3c4d5e6f.jpg"
        },
        {
            name: "Ava Thompson",
            role: "Bridesmaid",
            description: "Satya's confidante through thick and thin. Her support means the world.",
            photo: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3602511132549595587"
        }
    ];

    const groomsmen = [
        {
            name: "Ahmad Alafandi",
            role: "Best Man",
            description: "Abdulrazak's brother and closest confidant. The one who knows all the stories.",
            photo: "https://www.friartux.com/on/demandware.static/-/Sites-FriarTux-Library/default/dw37f09937/images/blog/blog2339/18.jpg"
        },
        {
            name: "Ammar Etaki",
            role: "Groomsman",
            description: "Longtime friend and travel companion. Always up for celebration.",
            photo: "https://media-api.xogrp.com/images/02c554a2-9be5-42d0-a62a-506be2abb6c6"
        },
        {
            name: "zakarya Alhasan",
            role: "Groomsman",
            description: "The calm in every storm. Grateful to have him by our side.",
            photo: "https://apis.xogrp.com/media-api/images/d0a065aa-1938-11e5-be0a-22000aa61a3e"
        },
        {
            name: "Coen De Groot",
            role: "Groomsman",
            description: "The life of the party and Abdulrazak's trusted wingman for years.",
            photo: "https://www.gentlemansgazette.com/wp-content/uploads/2015/05/Navy-Suit-with-Light-Blue-Shirt-and-Burgundy-Tie.jpg"
        },
        {
            name: "",
            role: "Groomsman",
            description: "Brother in spirit, always ready with wisdom and a smile.",
            photo: "https://i.pinimg.com/originals/8b/8b/8b/8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b.jpg" // Sharp navy groom party portrait
        }
    ];

    return (
        <section id="wedding-party" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-navy mb-4">
                        Wedding Party
                    </h2>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        The amazing people standing by our side
                    </p>
                </div>

                {/* For the Bride */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-serif text-wedding-navy mb-4">
                            For the Bride
                        </h3>
                        <div className="w-32 h-1 bg-wedding-green mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {bridesmaids.map((person, index) => (
                            <div key={index} className="text-center">
                                <div className="rounded-3xl overflow-hidden shadow-2xl mb-6">
                                    <img
                                        src={person.photo}
                                        alt={person.name}
                                        className="w-full h-80 object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <h4 className="text-xl font-serif text-wedding-navy mb-1">
                                    {person.name}
                                </h4>
                                <p className="text-wedding-green font-medium uppercase tracking-wider text-sm mb-4">
                                    {person.role}
                                </p>
                                <p className="text-gray-600 leading-relaxed text-sm px-4">
                                    {person.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* For the Groom */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-serif text-wedding-navy mb-4">
                            For the Groom
                        </h3>
                        <div className="w-32 h-1 bg-wedding-gold mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {groomsmen.map((person, index) => (
                            <div key={index} className="text-center">
                                <div className="rounded-3xl overflow-hidden shadow-2xl mb-6">
                                    <img
                                        src={person.photo}
                                        alt={person.name}
                                        className="w-full h-80 object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <h4 className="text-xl font-serif text-wedding-navy mb-1">
                                    {person.name}
                                </h4>
                                <p className="text-wedding-gold font-medium uppercase tracking-wider text-sm mb-4">
                                    {person.role}
                                </p>
                                <p className="text-gray-600 leading-relaxed text-sm px-4">
                                    {person.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingParty;
