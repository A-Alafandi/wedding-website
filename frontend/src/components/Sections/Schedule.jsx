import {
    GlassWater,
    Gem,
    Cake,
    Camera,
    Utensils,
    Music,
    Car
} from 'lucide-react';

const Schedule = () => {
    const events = [
        {
            icon: GlassWater,
            title: 'Guest Arrival',
            description: 'Arrive and settle in before the ceremony begins.',
            time: '12:00'
        },
        {
            icon: Gem,
            title: 'Garden Ceremony',
            description: 'Exchange of vows in the garden.',
            time: '12:30'
        },
        {
            icon: Cake,
            title: 'Cake Cutting',
            description: 'Cutting the cake together.',
            time: '14:00'
        },
        {
            icon: Camera,
            title: 'Photo Moment',
            description: 'Group and family photos.',
            time: '14:30'
        },
        {
            icon: Utensils,
            title: 'Upstairs Dinner',
            description: 'A delicious meal to celebrate.',
            time: '15:45'
        },
        {
            icon: Music,
            title: 'First Dance & Party',
            description: 'Join us on the dance floor.',
            time: '18:00'
        },
        {
            icon: Car,
            title: 'Evening Concludes',
            description: 'Thank you for celebrating with us!',
            time: '22:00'
        }
    ];

    return (
        <section id="schedule" className="py-24 bg-wedding-cream">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-wedding-gold mb-3">
                        Our Wedding Day
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-wedding-navy mb-4">
                        Schedule of Events
                    </h2>
                    <div className="w-16 h-px bg-wedding-gold mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        A timeline of our special day.
                    </p>
                </div>

                {/* Alternating Timeline */}
                <div className="relative">
                    {/* Central vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-wedding-gold/60 to-transparent h-full hidden md:block"></div>

                    <div className="space-y-12 md:space-y-16">
                        {events.map((event, index) => {
                            const Icon = event.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={index} className="relative flex items-center justify-center">
                                    {/* Desktop: Alternating layout */}
                                    <div className="hidden md:flex items-center w-full">
                                        {/* Left side event */}
                                        {isLeft && (
                                            <div className="w-1/2 pr-14 text-right">
                                                <div className="inline-block bg-white rounded-2xl shadow-card border border-wedding-gold/15 p-7 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                                                    <p className="text-2xl font-bold tracking-[0.05em] text-wedding-gold mb-2">
                                                        {event.time}
                                                    </p>
                                                    <h3 className="text-2xl font-heading text-wedding-navy mb-2">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Center icon */}
                                        <div className="w-1/2 flex justify-center">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-wedding-gold shadow-soft ring-8 ring-wedding-cream text-wedding-green z-10">
                                                <Icon className="w-7 h-7" strokeWidth={1.75} />
                                            </div>
                                        </div>

                                        {/* Right side event */}
                                        {!isLeft && (
                                            <div className="w-1/2 pl-14">
                                                <div className="inline-block bg-white rounded-2xl shadow-card border border-wedding-gold/15 p-7 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                                                    <p className="text-2xl font-bold tracking-[0.05em] text-wedding-gold mb-2">
                                                        {event.time}
                                                    </p>
                                                    <h3 className="text-2xl font-heading text-wedding-navy mb-2">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile: Centered stacked layout */}
                                    <div className="md:hidden flex flex-col items-center text-center max-w-md">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-wedding-gold shadow-soft ring-8 ring-wedding-cream text-wedding-green mb-4">
                                            <Icon className="w-6 h-6" strokeWidth={1.75} />
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-card border border-wedding-gold/15 p-7 w-full">
                                            <p className="text-2xl font-bold tracking-[0.05em] text-wedding-gold mb-2">
                                                {event.time}
                                            </p>
                                            <h3 className="text-2xl font-heading text-wedding-navy mb-2">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">{event.description}</p>
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
