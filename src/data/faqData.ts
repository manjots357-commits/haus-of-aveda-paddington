export interface FaqItem {
  id: string;
  category: 'consultations' | 'durations' | 'products' | 'rituals' | 'policies';
  categoryLabel: string;
  question: string;
  answer: string;
  highlight?: string;
  badge?: string;
}

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Inquiries' },
  { id: 'consultations', label: 'Consultations & Prep' },
  { id: 'durations', label: 'Visit Durations & Hours' },
  { id: 'products', label: 'Aveda Science & Products' },
  { id: 'rituals', label: 'Sensory Rituals' },
  { id: 'policies', label: 'Policies & Booking' },
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'consultation-requirement',
    category: 'consultations',
    categoryLabel: 'Consultations & Prep',
    badge: 'Complimentary',
    question: 'Do I need to book a consultation before my first colour or balayage service?',
    answer: 'We strongly recommend a 15-minute diagnostic consultation for all new guests seeking dimensional balayage, full blonde transformations, or major colour corrections. During this acoustic session, our colourists evaluate your hair strand tensile strength, past chemical treatments, skin undertones, and maintenance preferences. We also formulate a transparent quote and perform allergy patch testing if required.',
    highlight: 'Includes strand elasticity assessment & patch test',
  },
  {
    id: 'typical-visit-duration',
    category: 'durations',
    categoryLabel: 'Visit Durations & Hours',
    badge: 'Timings',
    question: 'How long does a typical appointment take at Haus Of Aveda?',
    answer: 'Because every service is an unhurried sensory experience, duration varies based on the ritual:\n\n• Precision Haircut & Signature Blow-Dry: 60 to 75 minutes.\n• Botanical Hair & Scalp Therapy: 45 to 60 minutes.\n• Custom Balayage & Dimensional Colour: 3 to 4.5 hours (including formulation, gentle lifting, toner gloss, botanical mask infusion, and finish).\n• Global Colour Retouch & Glossing: 90 to 120 minutes.\n\nWe recommend allowing adequate buffer time to fully relax and enjoy our complimentary tea and wellness rituals.',
    highlight: 'Balayage rituals typically take 3 to 4.5 hours',
  },
  {
    id: 'aveda-product-recommendations',
    category: 'products',
    categoryLabel: 'Aveda Science & Products',
    badge: '100% Vegan Care',
    question: 'Which Aveda products will you recommend for maintaining my hair at home?',
    answer: 'Following your service, your stylist prescribes a bespoke regimen tailored specifically to your hair’s cuticle porosity and texture. Our most beloved botanical systems include:\n\n• Botanical Repair™: Plant-powered 3-layer bond-building complex that repairs hair from the inside out.\n• Color Control™: Infused with apricot seed oil and bio-fermented arginine to lock in pigment vibrancy for up to 8 weeks.\n• Nutriplenish™: Omega-5 rich organic pomegranate seed oil delivering 72 hours of nutrient-dense hydration.\n• Scalp Solutions™: Wintergreen-derived salicylic acid to gently exfoliate and balance microflora for optimal follicle vitality.\n\nAll formulas are 100% vegan, cruelty-free, and packaged in post-consumer recycled materials.',
    highlight: 'Bespoke botanical regimens prescribed by your colourist',
  },
  {
    id: 'appointment-prep',
    category: 'consultations',
    categoryLabel: 'Consultations & Prep',
    badge: 'Preparation',
    question: 'How should I prepare my hair before arriving for a colour or balayage service?',
    answer: 'We recommend arriving with dry hair that has been washed 24 to 48 hours prior. Your natural scalp oils act as an organic protective layer during lightening and pigment application. Please avoid heavy root concealers, mineral-based styling pastes, or excessive dry shampoo on the day of your visit. Feel free to bring 2 to 3 reference images of tones and styles you love (as well as anything you dislike) to guide our consultation.',
    highlight: 'Wash hair 24–48 hours before your session',
  },
  {
    id: 'sensitive-scalp-pregnancy',
    category: 'products',
    categoryLabel: 'Aveda Science & Products',
    badge: 'Plant Chemistry',
    question: 'Is Aveda Full Spectrum™ colour suitable for sensitive scalps and during pregnancy?',
    answer: 'Yes. Aveda Full Spectrum™ colour is up to 96% naturally derived from plants and non-petroleum minerals. It utilizes certified organic conditioning oils—including sunflower, castor, jojoba, and babassu—to protect the cuticle while depositing brilliant, fade-resistant color with a signature aroma of organic lavender. For expectant mothers and sensitive guests, we also offer ammonia-free gloss formulations and perform 48-hour patch testing upon request.',
    highlight: 'Up to 96% naturally derived with certified organic botanicals',
  },
  {
    id: 'complimentary-rituals',
    category: 'rituals',
    categoryLabel: 'Sensory Rituals',
    badge: 'Included',
    question: 'What complimentary sensory rituals are included with every visit?',
    answer: 'At Haus Of Aveda Paddington, we believe hair care is a restorative wellness ritual. Every guest receives:\n\n• A warm welcome cup of caffeine-free Aveda Comforting Herbal Tea (licorice root & peppermint).\n• A sensory aroma selection to choose your personal essential oil chakra blend.\n• A stress-relieving neck, shoulder, and acupressure scalp massage before washing.\n• A warm botanical-infused aroma towel at the wash sanctuary.\n• Expert styling guidance and maintenance advice to recreate salon results at home.',
    highlight: 'Aveda Comforting Tea & stress-relieving scalp massage with every visit',
  },
  {
    id: 'late-night-appointments',
    category: 'durations',
    categoryLabel: 'Visit Durations & Hours',
    badge: 'Late Night',
    question: 'Do you offer late-night or weekend salon appointments?',
    answer: 'Yes. We cater to Sydney’s busy professionals with dedicated late-night salon hours every Thursday from 9:30 AM until 8:00 PM. We are also open Saturdays from 9:00 AM to 5:00 PM. Because evening and weekend slots fill quickly, we recommend reserving your spot 1 to 2 weeks in advance.',
    highlight: 'Open late Thursdays until 8:00 PM & Saturdays from 9:00 AM',
  },
  {
    id: 'cancellation-deposit-policy',
    category: 'policies',
    categoryLabel: 'Policies & Booking',
    badge: 'Salon Etiquette',
    question: 'What is your booking deposit and cancellation policy?',
    answer: 'To secure your appointment and respect our stylists’ dedicated time, a 20% deposit is required for extensive colour and balayage services. We kindly request at least 48 hours’ notice for any cancellations or schedule changes. If you reschedule with at least 48 hours’ notice, your deposit seamlessly carries forward to your new booking.',
    highlight: '48 hours courtesy notice for rescheduling or cancellations',
  },
];
