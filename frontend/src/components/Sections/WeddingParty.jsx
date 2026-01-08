import britt from '../../assets/bridesmaids/b.jpg';
import khadija from '../../assets/bridesmaids/k.jpg';
import josephine from '../../assets/bridesmaids/j.jpg';
import viola from '../../assets/bridesmaids/v.jpg';
import faten from '../../assets/bridesmaids/f.png';
import asmaa from '../../assets/bridesmaids/S.png';

import ahmad from '../../assets/Groomsman/a.jpg';
import ammar from '../../assets/Groomsman/Ammar.jpeg';
import wasim from '../../assets/Groomsman/w.png';

const WeddingParty = () => {
    const bridesmaids = [
        {
            name: 'Josephine Hoeberechts ',
            role: 'Maid of Honor',
            description: 'Satya’s favorite future nurse and the little sister she was always meant to have.',
            photo: josephine,
        },
        {
            name: 'Viola Aho',
            role: 'Bridesmaid',
            description: 'Satya’s longest-standing partner in crime who has been "fighting the patriarchy" by her side since their Leiden days.',
            photo: viola,
        },
        {
            name: 'Faten Mashhadani',
            role: 'Bridesmaid',
            description: 'A warm and lovely presence who brings a sense of grace and kindness to the group.',
            photo: faten,
        },
        {
            name: 'Asmaa iskandroni',
            role: 'Bridesmaid',
            description: 'A beautiful soul and a legendary cook, she is our friend who nourishes our hearts just as much as she nourishes everyone around us with her sweetness',
            photo: asmaa,
        },
        {
            name: 'Britt Scheggetman',
            role: 'Bridesmaid',
            description: 'A talented photographer and total Swiftie who brings the best energy and detective-level intuition.',
            photo: britt,
        },
        {
            name: 'Khadija Alkadri',
            role: 'Bridesmaid',
            description: 'The group’s secret weapon who is always there with the best advice and the most loyal heart.',
            photo: khadija,
        },
    ];

    const groomsmen = [
        {
            name: 'Ammar Etaki',
            role: 'Best Man',
            description: 'Longtime friend and travel companion. Always up for celebration.',
            status: 'Taken',
            photo: ammar,
        },
        {
            name: 'Ahmad Alafandi',
            role: 'Groomsman',
            description: "Abdul's brother and closest confidant. The one who knows all the stories.",
            status: 'Available',
            photo: ahmad,
        },
        {
            name: 'Zakarya AlHasan ',
            role: 'Groomsman',
            description: 'The calm in every storm. Grateful to have him by our side.',
            photo: '',
        },
        {
            name: 'Wasim Khouja',
            role: 'Groomsman',
            description: "The life of the party and Abdul's trusted wingman for years.",
            status: 'Taken',
            photo: wasim,
        },
        {
            name: 'Ilhan Ismail',
            role: 'Groomsman',
            description: 'Brother in spirit, always ready with wisdom and a smile.',
            photo: '',
        },
    ];

    const PersonCard = ({ person }) => {
        const hasPhoto = Boolean(person.photo);

        return (
            <div className="flex flex-col h-full">
                {/* Photo */}
                <div className="rounded-3xl overflow-hidden shadow-2xl mb-6 aspect-[4/5] w-full group bg-gray-100">
                    {hasPhoto ? (
                        <img
                            src={person.photo}
                            alt={person.name}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                            Photo coming soon
                        </div>
                    )}
                </div>

                {/* Fixed header area */}
                <div className="text-center h-[84px] flex flex-col justify-center">
                    <h4
                        title={person.name}
                        className="text-xl font-serif text-wedding-navy leading-tight
                     line-clamp-2 min-h-[3.2rem]"
                    >
                        {person.name}
                    </h4>

                    <p className="text-wedding-green font-medium uppercase tracking-wider text-sm mt-2">
                        {person.role}
                    </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-7 text-left max-w-[18rem] mx-auto mt-6 min-h-[140px]">
                    {person.description}
                </p>
            </div>
        );
    };


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
                        <div className="w-32 h-1 bg-wedding-gold mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-stretch">

                    {bridesmaids.map((person, index) => (
                            <PersonCard key={`${person.name}-${index}`} person={person} />
                        ))}
                    </div>
                </div>

                {/* For the Groom */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-serif text-wedding-gold mb-4">
                            For the Groom
                        </h3>
                        <div className="w-32 h-1 bg-wedding-gold mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-stretch">

                    {groomsmen.map((person, index) => (
                            <PersonCard key={`${person.name}-${index}`} person={person} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingParty;
