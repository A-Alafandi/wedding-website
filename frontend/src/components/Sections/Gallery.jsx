import img1 from "../../assets/gallery/image1.jpeg"
import img2 from "../../assets/gallery/image2.jpeg"
import img3 from "../../assets/gallery/image3.jpeg"
import img4 from "../../assets/gallery/image4.jpeg"
import img5 from "../../assets/gallery/image5.jpeg"
import img6 from "../../assets/gallery/image6.jpeg"
import img7 from "../../assets/gallery/image7.jpeg"
import img8 from "../../assets/gallery/image8.jpeg"
import img9 from "../../assets/gallery/image9.jpeg"
import img10 from "../../assets/gallery/image10.jpeg"
import img11 from "../../assets/gallery/image11.jpeg"
import img12 from "../../assets/gallery/image12.jpeg"

const Gallery = () => {
    const galleryImages = [
        { id: 1, src: img1, alt: "Gallery image 1" },
        { id: 2, src: img2, alt: "Gallery image 2" },
        { id: 3, src: img3, alt: "Gallery image 3" },
        { id: 4, src: img4, alt: "Gallery image 4" },
        { id: 5, src: img5, alt: "Gallery image 5" },
        { id: 6, src: img6, alt: "Gallery image 6" },
        { id: 7, src: img7, alt: "Gallery image 7" },
        { id: 8, src: img8, alt: "Gallery image 8" },
        { id: 9, src: img9, alt: "Gallery image 9" },
        { id: 10, src: img10, alt: "Gallery image 10" },
        { id: 11, src: img11, alt: "Gallery image 11" },
        { id: 12, src: img12, alt: "Gallery image 12" }
    ];

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-green mb-4">
                        Photo Gallery
                    </h2>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        Capturing our favorite moments.
                    </p>
                </div>

                {/* Dynamic grid that handles all images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="rounded-3xl overflow-hidden shadow-2xl aspect-square"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
