import Countdown from '../Layout/Countdown';
import backgroundImage from '../../assets/Hero.png';

const Hero = () => {
    const scrollToRSVP = () => {
        const rsvpSection = document.getElementById('rsvp');
        if (rsvpSection) {
            rsvpSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section
            id="hero"
            className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-stone-900"
            aria-labelledby="hero-heading"
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={backgroundImage}
                    alt="Satya and Abdul at sunset on the beach"
                    className="w-full h-full object-cover opacity-90"
                    loading="eager"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
            </div>
            <div className="relative z-20 text-center text-white px-6 sm:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center h-full w-full">

                <p className="uppercase tracking-widest text-xs sm:text-base mb-4 sm:mb-6 opacity-90 font-light">
                    We're Getting Married
                </p>

                {/* Names: Reduced size slightly on mobile to prevent weird wrapping */}
                <h1
                    id="hero-heading"
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-8 text-white leading-tight opacity-60"
                >
                    Satya{' '}
                    <span className="text-wedding-gold font-light italic">&amp;</span>{' '}
                    Abdul
                </h1>

                {/* Date & Location */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-xl font-bold mb-8 sm:mb-12 opacity-90">
                    <time dateTime="2026-08-08">August 9, 2026</time>
                    <span className="hidden sm:block w-2 h-2 bg-wedding-gold rounded-full" />
                    <span>Restaurant Masaya</span>
                </div>

                {/* Countdown */}
                <div className="mb-10 w-full max-w-3xl">
                    <Countdown />
                </div>

                <button
                    onClick={scrollToRSVP}
                    className="group relative px-8 py-4 bg-wedding-gold text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-wedding-gold/50"
                >
                    <span className="uppercase tracking-wider text-sm">RSVP Now</span>
                </button>
            </div>

            <button
                onClick={handleScrollDown}
                className="absolute bottom-12  -translate-x-1/2 z-30 animate-bounce focus:outline-none focus-visible:ring-4 focus-visible:ring-wedding-gold/50 rounded-full p-2 transition-opacity opacity-70 hover:opacity-100"
                aria-label="Scroll down to explore more"
            >
                <svg
                    className="w-8 h-8 text-white drop-shadow-md"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </button>
        </section>
    );
};

export default Hero;
