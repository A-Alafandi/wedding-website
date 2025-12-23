import { useState, useEffect } from 'react';

const Countdown = () => {
    const weddingDate = new Date('2026-08-08T15:00:00');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +weddingDate - +new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { value: timeLeft.days, label: 'DAYS' },
        { value: timeLeft.hours, label: 'HOURS' },
        { value: timeLeft.minutes, label: 'MINUTES' },
        { value: timeLeft.seconds, label: 'SECONDS' }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
            {timeUnits.map((unit, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                    {/* Glassmorphism Box Style */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-2xl md:text-3xl font-heading font-bold text-white drop-shadow-md">
                            {String(unit.value).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-white/80 text-xs md:text-sm mt-2 tracking-widest font-body uppercase">
                        {unit.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
