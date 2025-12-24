import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function RSVP() {
    const [name, setName] = useState("");
    const [attending, setAttending] = useState(true);
    const [guests, setGuests] = useState(0);
    const [dietary, setDietary] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", text: "" });

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ type: "", text: "" });

        if (!API_URL) {
            setStatus({
                type: "error",
                text: "Missing VITE_API_URL. Create frontend/.env and restart the frontend.",
            });
            return;
        }

        if (!name.trim() || name.trim().length < 2) {
            setStatus({ type: "error", text: "Please enter your name (min 2 characters)." });
            return;
        }

        const guestsNum = Number(guests);
        if (!Number.isFinite(guestsNum) || guestsNum < 0 || guestsNum > 10) {
            setStatus({ type: "error", text: "Guests must be a number between 0 and 10." });
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/rsvp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    attending,
                    guests: guestsNum,
                    dietary: dietary.trim(),
                    message: message.trim(),
                }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data?.message || "Something went wrong. Please try again.");
            }

            setStatus({ type: "success", text: "Thanks! Your RSVP has been saved ✅" });

            // Optional: clear form after success
            setName("");
            setAttending(true);
            setGuests(0);
            setDietary("");
            setMessage("");
        } catch (err) {
            setStatus({ type: "error", text: err.message || "Server error" });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="rsvp" style={{ padding: "2rem 1rem" }}>
            <div style={{ maxWidth: 640, margin: "0 auto" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>RSVP</h2>

                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.75rem" }}>
                    <label style={{ display: "grid", gap: 6 }}>
                        <span>Your name</span>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            required
                            minLength={2}
                            style={{ padding: "0.75rem", borderRadius: 10, border: "1px solid #ddd" }}
                        />
                    </label>

                    <label style={{ display: "grid", gap: 6 }}>
                        <span>Will you attend?</span>
                        <select
                            value={attending ? "yes" : "no"}
                            onChange={(e) => setAttending(e.target.value === "yes")}
                            style={{ padding: "0.75rem", borderRadius: 10, border: "1px solid #ddd" }}
                        >
                            <option value="yes">Yes, I’ll be there</option>
                            <option value="no">No, I can’t make it</option>
                        </select>
                    </label>

                    <label style={{ display: "grid", gap: 6 }}>
                        <span>Number of guests</span>
                        <input
                            type="number"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            min={0}
                            max={10}
                            style={{ padding: "0.75rem", borderRadius: 10, border: "1px solid #ddd" }}
                        />
                    </label>

                    <label style={{ display: "grid", gap: 6 }}>
                        <span>Dietary requirements</span>
                        <input
                            value={dietary}
                            onChange={(e) => setDietary(e.target.value)}
                            placeholder="e.g., vegetarian, allergies..."
                            style={{ padding: "0.75rem", borderRadius: 10, border: "1px solid #ddd" }}
                        />
                    </label>

                    <label style={{ display: "grid", gap: 6 }}>
                        <span>Message (optional)</span>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            placeholder="Anything you want to share…"
                            style={{ padding: "0.75rem", borderRadius: 10, border: "1px solid #ddd" }}
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: "0.9rem 1rem",
                            borderRadius: 12,
                            border: "none",
                            cursor: loading ? "not-allowed" : "pointer",
                            fontWeight: 700,
                        }}
                    >
                        {loading ? "Saving..." : "Submit RSVP"}
                    </button>

                    {status.text ? (
                        <div
                            style={{
                                padding: "0.75rem 1rem",
                                borderRadius: 12,
                                border: "1px solid #ddd",
                                background: status.type === "success" ? "#f0fff4" : "#fff5f5",
                            }}
                        >
                            {status.text}
                        </div>
                    ) : null}
                </form>
            </div>
        </section>
    );
}
