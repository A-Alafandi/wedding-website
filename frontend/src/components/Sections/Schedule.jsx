import {
    Gem,
    GlassWater,
    Utensils,
    Music,
    CakeSlice,
    Sparkles
} from 'lucide-react';

const Schedule = () => {
    const events = [
        {
            icon: Gem,
            title: 'Ceremony',
            description: 'Exchange of vows in the garden.',
            time: 'TBA'
        },
        {
            icon: GlassWater,
            title: 'Cocktail Hour',
            description: 'Drinks and hors d’oeuvres on the terrace.',
            time: 'TBA'
        },
        {
            icon: Utensils,
            title: 'Reception Dinner',
            description: 'A delicious meal to celebrate.',
            time: 'TBA'
        },
        {
            icon: Music,
            title: 'First Dance',
            description: 'Join us on the dance floor.',
            time: 'TBA'
        },
        {
            icon: CakeSlice,
            title: 'Party Time',
            description: 'Dancing the night away!',
            time: 'TBA'
        },
        {
            icon: Sparkles,
            title: 'Send-off',
            description: 'Sparkler exit for the newlyweds.',
            time: 'TBA'
        }
    ];

    return (
        <section id="schedule" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-navy mb-4">
                        Schedule of Events
                    </h2>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        A timeline of our special day.
                    </p>
                </div>

                {/* Alternating Timeline */}
                <div className="relative">
                    {/* Central vertical line - now gold */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-wedding-gold/50 h-full hidden md:block"></div>

                    <div className="space-y-12 md:space-y-20">
                        {events.map((event, index) => {
                            const Icon = event.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={index} className="relative flex items-center justify-center">
                                    {/* Desktop: Alternating layout */}
                                    <div className="hidden md:flex items-center w-full">
                                        {/* Left side event */}
                                        {isLeft && (
                                            <div className="w-1/2 pr-12 text-right">
                                                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-wedding-green">
                                                    <h3 className="text-2xl font-serif text-wedding-navy mb-2">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-gray-600">{event.description}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Center icon & time */}
                                        <div className="w-1/2 flex flex-col items-center">
                                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-wedding-gold shadow-lg text-wedding-gold z-10">
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <p className="mt-4 text-wedding-gold font-medium uppercase tracking-wider">
                                                {event.time}
                                            </p>
                                        </div>

                                        {/* Right side event */}
                                        {!isLeft && (
                                            <div className="w-1/2 pl-12">
                                                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-wedding-green">
                                                    <h3 className="text-2xl font-serif text-wedding-navy mb-2">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-gray-600">{event.description}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile: Centered stacked layout */}
                                    <div className="md:hidden flex flex-col items-center text-center max-w-md">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-wedding-gold shadow-lg text-wedding-gold mb-4">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-wedding-green w-full">
                                            <h3 className="text-2xl font-serif text-wedding-navy mb-2">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">{event.description}</p>
                                            <p className="text-wedding-gold font-medium uppercase tracking-wider">
                                                {event.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
