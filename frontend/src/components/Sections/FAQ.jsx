import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: "Is the ceremony indoors or outdoors?",
            answer: "The ceremony will be held in the beautiful garden of Restaurant Masaya (weather permitting). In case of rain, we'll move to the elegant indoor conservatory."
        },
        {
            question: "What time should we arrive?",
            answer: "Please arrive 30 minutes before the ceremony begins. This will give you time to find parking and be seated comfortably."
        },
        {
            question: "Are children welcome?",
            answer: "While we love your little ones, we've decided to keep our wedding and reception an adults-only event. We appreciate you making arrangements ahead of time."
        },
        {
            question: "What is the dress code?",
            answer: "Semi-formal or cocktail attire. Gentlemen: suits or dress pants with jackets. Ladies: cocktail dresses or elegant separates."
        },
        {
            question: "What's the parking situation?",
            answer: "There is ample parking available at Restaurant Masaya. Valet parking will also be provided for your convenience."
        },
        {
            question: "Can I take photos during the ceremony?",
            answer: "We're having an 'unplugged' ceremony. Please refrain from taking photos during the ceremony—our professional photographer will capture everything! Feel free to take photos during the reception."
        },
        {
            question: "Will there be dietary options?",
            answer: "Yes! Please indicate any dietary restrictions on your RSVP form. We'll accommodate vegetarian, vegan, gluten-free, and other dietary needs."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-wedding-navy mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 font-light">
                        Everything you need to know.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 pb-6 last:border-0"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex items-center justify-between py-4 group"
                            >
                                <h3 className="text-xl md:text-2xl font-serif text-wedding-navy pr-8 group-hover:text-wedding-green transition-colors">
                                    {item.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-wedding-green flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-700 leading-relaxed pt-4 pb-2">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
