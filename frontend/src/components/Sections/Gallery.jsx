const Gallery = () => {
    const galleryImages = [
        {
            id: 1,
            src: "https://media-api.xogrp.com/images/1333fc71-7c90-4b36-97b6-3d01eb5fbbff~rs_768.h-cr_82.0.1377.971",
            alt: "Elegant wedding reception table with white roses and candles"
        },
        {
            id: 2,
            src: "https://i.etsystatic.com/22054836/r/il/7364ac/4854054642/il_340x270.4854054642_gr3e.jpg",
            alt: "Wedding rings in sage green velvet box"
        },
        {
            id: 3,
            src: "https://mariannesrentals.com/wp-content/uploads/2023/03/Aaron_Snow_Photography_Edmonds.ASP_0514-1024x683.jpg",
            alt: "Outdoor garden wedding ceremony with white floral arch"
        },
        {
            id: 4,
            src: "https://cdn0.hitched.co.uk/article/5327/3_2/960/jpg/137235-cake.jpeg",
            alt: "Elegant white wedding cake with fresh flowers"
        },
        {
            id: 5,
            src: "https://i.etsystatic.com/9102911/r/il/a21071/5986312658/il_fullxfull.5986312658_1n9f.jpg",
            alt: "Soft watercolor floral frame in sage green and light purple"
        },
        {
            id: 6,
            src: "https://heartlandmeadows.com/wp-content/uploads/116905823_3441703315848025_4134013764374759223_n-jpg.webp",
            alt: "Romantic couple embracing at golden hour in garden"
        }
    ];

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-navy mb-4">
                        Photo Gallery
                    </h2>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        Capturing our favorite moments.
                    </p>
                </div>

                {/* Top Row - 3 images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={galleryImages[0].src}
                            alt={galleryImages[0].alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={galleryImages[1].src}
                            alt={galleryImages[1].alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={galleryImages[2].src}
                            alt={galleryImages[2].alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Bottom Row - 3 images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={galleryImages[3].src}
                            alt={galleryImages[3].alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={galleryImages[4].src}
                            alt={galleryImages[4].alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={galleryImages[5].src}
                            alt={galleryImages[5].alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
