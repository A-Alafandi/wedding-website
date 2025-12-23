import { useEffect, useMemo, useState } from "react";

const Countdown = () => {
    // NOTE: This runs in the browser (Vite/React). "2026-08-08T15:00:00" is treated as local time.
    // If you want it to be explicit UTC, use "2026-08-08T15:00:00Z".
    const weddingDate = useMemo(() => new Date("2026-08-08T15:00:00"), []);

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = +weddingDate - +now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [weddingDate]);

    const timeUnits = [
        { value: timeLeft.days, label: "DAYS", pad: 2 },
        { value: timeLeft.hours, label: "HOURS", pad: 2 },
        { value: timeLeft.minutes, label: "MINUTES", pad: 2 },
        { value: timeLeft.seconds, label: "SECONDS", pad: 2 },
    ];

    return (
        <div
            className="
        mt-8 grid grid-cols-4 gap-3 sm:gap-4
        w-full max-w-md mx-auto
      "
            aria-label="Countdown to the wedding"
        >
            {timeUnits.map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                    {/* Box */}
                    <div
                        className="
              w-full aspect-square
              bg-white/10 backdrop-blur-md border border-white/20
              rounded-lg shadow-lg
              flex items-center justify-center
            "
                    >
            <span
                className="
                text-2xl sm:text-3xl font-heading font-bold text-white drop-shadow-md
                tabular-nums
                inline-block min-w-[2ch] text-center leading-none
              "
                style={{ fontVariantNumeric: "tabular-nums", fontFeatureSettings: '"tnum"' }}
            >
              {String(unit.value).padStart(unit.pad, "0")}
            </span>
                    </div>

                    {/* Label */}
                    <span className="text-white/80 text-[10px] sm:text-xs mt-2 tracking-widest font-body uppercase text-center">
            {unit.label}
          </span>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
