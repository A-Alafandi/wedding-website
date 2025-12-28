import britt from '../../assets/bridesmaids/b.jpg';
import khadija from '../../assets/bridesmaids/k.jpg';
import josephine from '../../assets/bridesmaids/j.jpg';
import vaiola from '../../assets/bridesmaids/v.jpg';
import faten from '../../assets/bridesmaids/f.jpg';

import ammar2 from '../../assets/Groomsman/ammar2.jpeg';
import ahmad from '../../assets/Groomsman/a.jpg';
import ahmad1 from '../../assets/Groomsman/a1.jpg';

const WeddingParty = () => {
    const bridesmaids = [
        {
            name: "Josephine",
            role: "Maid of Honor",
            description: "Satya’s favorite future nurse and the little sister she was always meant to have.",
            photo: josephine
        },
        {
            name: "Viola ",
            role: "Bridesmaid",
            description: "Satya’s longest-standing partner in crime who has been \"fighting the patriarchy\" by her side since their Leiden days.",
            photo: vaiola
        },
        {
            name: "Faten",
            role: "Bridesmaid",
            description: "A warm and lovely presence who brings a sense of grace and kindness to the group.",
            photo: faten
        },
        {
            name: "Britt",
            role: "Bridesmaid",
            description: "A talented photographer and total Swiftie who brings the best energy and detective-level intuition.",
            photo:britt
        },
        {
            name: "Khadija",
            role: "Bridesmaid",
            description: "The group’s secret weapon who is always there with the best advice and the most loyal heart.",
            photo: khadija
        },
    ];

    const groomsmen = [
        {
            name: "Ahmad Alafandi",
            role: "Best Man",
            description: "Abdulrazak's brother and closest confidant. The one who knows all the stories.",
            photo:ahmad
        },
        {
            name: "Ammar Etaki",
            role: "Groomsman",
            description: "Longtime friend and travel companion. Always up for celebration.",
            photo: ammar2
        },
        // {
        //     name: "zakarya Alhasan",
        //     role: "Groomsman",
        //     description: "The calm in every storm. Grateful to have him by our side.",
        //     photo: ahmad1
        // },
        // {
        //     name: "Coen De Groot",
        //     role: "Groomsman",
        //     description: "The life of the party and Abdulrazak's trusted wingman for years.",
        //     photo: "https://www.gentlemansgazette.com/wp-content/uploads/2015/05/Navy-Suit-with-Light-Blue-Shirt-and-Burgundy-Tie.jpg"
        // },
        // {
        //     name: "Omar Ali",
        //     role: "Groomsman",
        //     description: "Brother in spirit, always ready with wisdom and a smile.",
        //     photo: ""
        // }
    ];

    return (
        <section id="wedding-party" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-green mb-4">
                        Wedding Party
                    </h2>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        The amazing people standing by our side
                    </p>
                </div>

                {/* For the Bride */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-serif text-wedding-gold mb-4">
                            For the Bride
                        </h3>
                        <div className="w-32 h-1 bg-wedding-gold mx-auto rounded-full"></div>
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
                        <h3 className="text-3xl md:text-4xl font-serif text-wedding-gold mb-4">
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
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
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
