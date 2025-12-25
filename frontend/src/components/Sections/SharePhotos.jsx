import { useState } from "react";

export default function SharePhotos() {
    // ⬇️ PASTE YOUR GOOGLE PHOTOS LINK HERE ⬇️
    const UPLOAD_LINK = "https://photos.app.goo.gl/gUM6eged7RSCC2K8A";

    return (
        <section id="share-photos" className="py-20 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-4 text-center">

                {/* Camera Icon */}
                <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-stone-100">
                    <svg className="w-10 h-10 text-wedding-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>

                <h2 className="text-4xl font-serif text-wedding-navy mb-4">Capture the Moment</h2>
                <p className="text-gray-600 font-serif text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                    We would love to see our wedding through your eyes! <br />
                    Please share your favorite snaps and videos in our shared album.
                </p>

                <a
                    href={UPLOAD_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-wedding-gold text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-yellow-600 hover:scale-[1.02] transition-all duration-300"
                >
                    <span>Open Wedding Album</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
