import { useState, useRef } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function RSVP() {
    const sectionRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        attending: "yes",
        guests: 1,
        plus_one_name: "",
        song_request: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        // FIXED: Clear plus_one_name if switching to 1 guest
        if (name === "guests" && value === "1") {
            setFormData(prev => ({ ...prev, guests: value, plus_one_name: "" }));
        }
        // FIXED: Reset guests and plus_one_name if not attending
        else if (name === "attending" && value === "no") {
            setFormData(prev => ({
                ...prev,
                attending: value,
                guests: 1,
                plus_one_name: "",
                song_request: "" // Also clear song request
            }));
        }
        else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        if (error) setError("");
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!API_URL) {
            setError("Configuration error: API URL missing.");
            return;
        }

        // Validation: Plus one name required if 2 guests and attending
        if (formData.attending === "yes" &&
            Number(formData.guests) === 2 &&
            formData.plus_one_name.trim().length < 2) {
            setError("Please enter the full name of your plus one.");
            return;
        }

        setLoading(true);
        try {
            // FIXED: Build clean payload based on attending status
            const payload = {
                name: formData.name,
                email: formData.email,
                attending: formData.attending === "yes",
                guests: formData.attending === "yes" ? Number(formData.guests) : 0,
                plus_one_name: formData.attending === "yes" && Number(formData.guests) === 2
                    ? formData.plus_one_name
                    : "",
                song_request: formData.attending === "yes" ? formData.song_request : "",
                message: formData.message // Always include message
            };

            const res = await fetch(`${API_URL}/api/rsvp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) throw new Error(data?.message || "Something went wrong.");

            setIsSubmitted(true);
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);

        } catch (err) {
            setError(err.message || "Failed to send RSVP. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    // -------------------- RENDER: SUCCESS VIEW --------------------
    if (isSubmitted) {
        return (
            <section ref={sectionRef} className="py-24 bg-stone-50 px-4 flex items-center justify-center">
                <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-12 text-center animate-fadeIn border-t-8 border-wedding-green">
                    <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-wedding-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-serif text-wedding-navy mb-4">Thank You!</h2>
                    <p className="text-gray-600 mb-8 font-serif text-lg">
                        {formData.attending === "yes"
                            ? "We can't wait to celebrate with you!"
                            : "We'll miss you on our special day."}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-wedding-green font-bold hover:underline"
                    >
                        Send another response
                    </button>
                </div>
            </section>
        );
    }

    // -------------------- RENDER: FORM VIEW --------------------
    const showGuestOptions = formData.attending === "yes";
    const showPlusOne = showGuestOptions && Number(formData.guests) === 2;

    return (
        <section id="rsvp" ref={sectionRef} className="py-24 bg-stone-50 px-4 flex justify-center">

            <div className="w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">

                {/* Header Inside Card */}
                <div className="pt-12 pb-8 text-center px-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-wedding-green mb-3">RSVP</h2>
                    <p className="text-gray-500 font-serif italic text-lg">Please respond by May 8, 2026</p>
                </div>

                <div className="px-8 md:px-16 pb-16 space-y-8">

                    {/* Error Banner */}
                    {error && (
                        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm text-center">
                            {error}
                        </div>
                    )}

                    {/* ROW 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
                                Full Name *
                            </label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="First and Last Name"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-gray-200 text-gray-800 focus:bg-white focus:border-wedding-green focus:ring-4 focus:ring-wedding-green/10 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="email@example.com"
                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-gray-200 text-gray-800 focus:bg-white focus:border-wedding-green focus:ring-4 focus:ring-wedding-green/10 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* ROW 2: Attending & Guests */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
                                Will you be attending? *
                            </label>
                            <div className="relative">
                                <select
                                    name="attending"
                                    value={formData.attending}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-gray-200 text-gray-800 focus:bg-white focus:border-wedding-green focus:ring-4 focus:ring-wedding-green/10 outline-none appearance-none transition-all cursor-pointer"
                                >
                                    <option value="yes">Yes, gratefully</option>
                                    <option value="no">No, regretfully</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* FIXED: Guest Count with proper disabled state */}
                        <div>
                            <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
                                Number of Guests {showGuestOptions && "*"}
                            </label>
                            <div className="relative">
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    disabled={!showGuestOptions}
                                    required={showGuestOptions}
                                    className={`w-full px-4 py-3 rounded-xl bg-stone-50 border border-gray-200 text-gray-800 focus:bg-white focus:border-wedding-green focus:ring-4 focus:ring-wedding-green/10 outline-none appearance-none transition-all ${
                                        showGuestOptions ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
                                    }`}
                                >
                                    <option value="1">Just Me (1)</option>
                                    <option value="2">Me + One (2)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROW 3: Plus One Name (Conditional) */}
                    <div className={`transition-all duration-300 overflow-hidden ${showPlusOne ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
                        <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
                            Plus One Name *
                        </label>
                        <input
                            name="plus_one_name"
                            value={formData.plus_one_name}
                            onChange={handleChange}
                            placeholder="Partner's Full Name"
                            required={showPlusOne}
                            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-gray-200 text-gray-800 focus:bg-white focus:border-wedding-green focus:ring-4 focus:ring-wedding-green/10 outline-none transition-all"
                        />
                    </div>

                    {/* ROW 4: Song Request (Only if Attending) */}
                    {showGuestOptions && (
                        <div>
                            <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
                                Song Request
                            </label>
                            <input
                                name="song_request"
                                value={formData.song_request}
                                onChange={handleChange}
                                placeholder="I wanna dance with somebody..."
                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-wedding-green focus:ring-4 focus:ring-wedding-green/10 outline-none transition-all"
                            />
                        </div>
                    )}

                    {/* ROW 5: Message (Always Visible) */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
                            Message to the Couple
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Leave a note for the couple..."
                            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-wedding-green focus:ring-4 focus:ring-wedding-green/10 outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full md:w-auto md:px-12 mx-auto block font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98] ${
                            loading
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-wedding-green text-white hover:bg-wedding-navy hover:shadow-xl"
                        }`}
                    >
                        {loading ? "Sending RSVP..." : "Send RSVP"}
                    </button>

                </div>
            </div>
        </section>
    );
}
