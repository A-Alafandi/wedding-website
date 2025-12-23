import Countdown from '../Layout/Countdown';
import backgroundImage from '../../assets/Hero.png';

const Hero = () => {
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-900"
            aria-labelledby="hero-heading"
        >
            {/* Background Image with Overlay */}
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

            {/* Main Content */}
            <div className="relative z-20 text-center text-white px-6 sm:px-8 max-w-5xl mx-auto pt-20 pb-32">
                <p className="uppercase tracking-widest text-sm sm:text-base mb-6 opacity-90 font-light">
                    We're Getting Married
                </p>

                <h1
                    id="hero-heading"
                    className="text-7xl text-white sm:text-8xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight"
                >
                    Satya{' '}
                    <span className="text-wedding-gold font-light italic co">&amp;</span>{' '}
                    Abdul
                </h1>

                <div className="flex items-center justify-center gap-4 text-lg sm:text-xl font-bold mb-12 opacity-90">
                    <time dateTime="2026-08-08">August 8, 2026</time>
                    <span className="w-2 h-2 bg-wedding-gold rounded-full" />
                    <span>Masaya Restauran</span>
                </div>

                <Countdown />
            </div>

            {/* Scroll Down Indicator */}
            <button
                onClick={handleScrollDown}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce focus:outline-none focus-visible:ring-4 focus-visible:ring-wedding-gold/50 rounded-full p-2 transition-opacity opacity-80 hover:opacity-100"
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
