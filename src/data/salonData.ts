import { BusinessInfo, ServiceItem, GalleryItem, TestimonialItem, WhyChooseUsItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Haus Of Aveda Paddington",
  subTitle: "Luxury Aveda Salon & Botanical Sanctuary",
  brandTagline: "The Art of Beautiful Hair",
  category: "Luxury Hair Salon & Botanical Sanctuary",
  heroHeadline: "THE ART OF BEAUTIFUL HAIR",
  heroSubheadline: "A luxury Aveda salon experience in the heart of Paddington.",
  address: {
    street: "184 Oxford St",
    suburb: "Paddington",
    state: "NSW",
    postcode: "2021",
    country: "Australia",
    fullFormatted: "184 Oxford St, Paddington NSW 2021, Australia",
  },
  phone: "+61 410 581 602",
  phoneRaw: "+61410581602",
  email: "relax@avedapaddington.com",
  website: "https://avedapaddington.com",
  websiteDisplay: "avedapaddington.com",
  googleRating: 4.8,
  reviewsCount: 346,
  openingHours: "Tue – Sat: 9:30 AM – 6:00 PM (Late Thu until 8:00 PM)",
  openingSchedule: [
    { day: "Tuesday", hours: "9:30 AM – 6:00 PM" },
    { day: "Wednesday", hours: "9:30 AM – 6:00 PM" },
    { day: "Thursday", hours: "9:30 AM – 8:00 PM (Evening Salon)" },
    { day: "Friday", hours: "9:30 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
    { day: "Sunday & Monday", hours: "Closed / By Appointment" },
  ],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Haus+Of+Aveda+Paddington+184+Oxford+St+Paddington+NSW+2021+Australia",
  bookingUrl: "https://avedapaddington.com",
};

export const EXPERIENCES = [
  {
    number: "01",
    title: "EXPERT STYLISTS",
    tagline: "Master Precision & Couture Artistry",
    description: "Our accredited senior stylists and colour specialists bring decades of global editorial experience, bespoke cutting geometry, and tailored French balayage to Oxford Street.",
  },
  {
    number: "02",
    title: "PREMIUM CARE",
    tagline: "100% Vegan Botanical Formulations",
    description: "Experience the transformative power of Aveda pure flower and plant essences. Cruelty-free, sustainable formulations that nurture hair fiber without compromise.",
  },
  {
    number: "03",
    title: "PERSONALISED EXPERIENCE",
    tagline: "Acoustic Consultation & Sensory Rituals",
    description: "Every appointment begins with an in-depth botanical consultation, balancing scalp analysis, and a complimentary Aveda stress-relieving neck and shoulder sensory massage.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "botanical-therapy",
    number: "01",
    title: "Botanical Hair & Scalp Therapy",
    category: "Signature Wellness & Restorative Rituals",
    tagline: "Cellular hydration and holistic scalp rejuvenation powered by pure plant actives.",
    description: "A transformative spa ritual combining deep botanical clarifying, nourishing quinoa protein mask infusions, and soothing acupressure scalp massage to restore balance and mirror-like shine.",
    duration: "45 – 60 Mins",
    features: [
      "Aveda balancing scalp analysis & sensory aroma selection",
      "Pramāsana™ purifying scalp exfoliation & detox ritual",
      "Nutriplenish™ deep moisture or Botanical Repair™ strengthening mask",
      "Warm aromatic towel wrap & tension-release massage"
    ],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    popular: true,
  },
  {
    id: "couture-colour",
    number: "02",
    title: "Couture Colour & Balayage",
    category: "Master Colour Artistry",
    tagline: "Customized multi-tonal dimensional colour crafted with 100% vegan Aveda Full Spectrum™.",
    description: "From lived-in sun-drenched Sydney balayage to seamless root shadows and global gloss transformations, our master colourists create luminous, long-lasting shades infused with organic protective oils.",
    duration: "90 – 180 Mins",
    features: [
      "Full Spectrum™ customizable vegan colour formulation",
      "French freehand balayage & precision babylights",
      "Organic jojoba, castor, and babassu protective oil infusion",
      "Custom gloss toner & pH neutralizing color seal"
    ],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
    popular: true,
  },
  {
    id: "precision-cut",
    number: "03",
    title: "Precision Haircut & Styling",
    category: "Architectural Haircut",
    tagline: "Bespoke scissor and razor cutting tailored to bone structure and personal cadence.",
    description: "An architectural haircut crafted to frame your features and complement your lifestyle. Includes personalized consultation, sensory wash with customized botanical treatment, and signature editorial blow dry.",
    duration: "60 Mins",
    features: [
      "Comprehensive face shape & natural fall consultation",
      "Aveda sensory head and shoulder stress-relief massage",
      "Precision wet & dry texturizing cutting techniques",
      "Bespoke blowout finish with plant-derived thermal protection"
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    popular: false,
  },
  {
    id: "botanical-glossing",
    number: "04",
    title: "Botanical Gloss & Tone Illumination",
    category: "High-Shine Treatment",
    tagline: "Instant diamond radiance and colour refreshment without structural compromise.",
    description: "Infuse your locks with mirror-like shine and tone enhancement. Formulated with 93% naturally derived plant ingredients that smooth the cuticle layer and lock in vibrant depth.",
    duration: "45 Mins",
    features: [
      "Translucent or tonal shine enhancing formula",
      "Kukui and sunflower oil conditioning blend",
      "Eliminates brassiness and enhances natural undertones",
      "Quick lunchtime renewal with long-lasting silkiness"
    ],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    popular: false,
  },
  {
    id: "luxury-blowdry",
    number: "05",
    title: "Luxury Blowout & Event Styling",
    category: "Editorial Styling",
    tagline: "Signature bouncy volume, relaxed Paddington waves, or elegant architectural updos.",
    description: "Whether preparing for a Sydney gala, an Oxford Street evening, or an editorial shoot, our stylists sculpt polished, weightless movement that commands effortless attention.",
    duration: "45 – 75 Mins",
    features: [
      "Custom thermal styling with pure plant styling elixirs",
      "Sculpted Hollywood waves, sleek glass finishes, or textured waves",
      "Long-lasting humidity-resistant hold without stiffness",
      "Special event and bridal styling options available"
    ],
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
    popular: false,
  },
  {
    id: "damage-remedy",
    number: "06",
    title: "Botanical Bond Repair Infusion",
    category: "Intensive Hair Repair",
    tagline: "Multi-level bond building restoring broken bonds from heat and chemical stress.",
    description: "Strengthens and repairs hair from the inside out using plant-powered bond-building molecules, macro-green rich sacha inchi and avocado oils, and plant-derived complex.",
    duration: "45 Mins",
    features: [
      "Instantly multiplies bonds across 3 key hair layers",
      "Prevents future breakage and seals split ends by up to 84%",
      "Leaves hair visibly healthier, softer, and dramatically shinier",
      "Ideal post-bleach or seasonal revival ritual"
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    popular: false,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sun-Drenched Paddington Balayage",
    category: "colour",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    caption: "Seamless dimensional honey-blonde balayage with high-gloss Aveda tone finish.",
  },
  {
    id: "gal-2",
    title: "Botanical Haircut Architecture",
    category: "couture",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait",
    caption: "Precision Parisian bob with soft internal texture and organic plant-based gloss.",
  },
  {
    id: "gal-3",
    title: "Sensory Scalp & Hair Rituals",
    category: "botanical",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
    caption: "Holistic head spa and pure flower essence treatment room at 184 Oxford St.",
  },
  {
    id: "gal-4",
    title: "Luminous Lived-In Brunette",
    category: "colour",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait",
    caption: "Multi-tonal mocha reflections using Full Spectrum™ vegan botanical colour.",
  },
  {
    id: "gal-5",
    title: "Editorial Event Waves",
    category: "styling",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait",
    caption: "Polished brushed-out Hollywood glam with weightless botanical hold.",
  },
  {
    id: "gal-6",
    title: "Oxford Street Studio Floor",
    category: "couture",
    imageUrl: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    caption: "Serene light-filled salon interiors designed for quiet luxury and rejuvenation.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    author: "Verified Client",
    location: "Paddington, Sydney",
    service: "Full Balayage & Botanical Treatment",
    rating: 5,
    date: "Google Review",
    quote: "Hands down the best salon experience on Oxford Street. The colourists took time to understand exactly what I wanted, and my balayage is utterly flawless. The signature Aveda scalp massage at the basin is pure heaven!",
    source: "Google Verified Review (4.8/5 Rating)",
  },
  {
    id: "rev-2",
    author: "Verified Client",
    location: "Eastern Suburbs, NSW",
    service: "Precision Cut & Colour Refresh",
    rating: 5,
    date: "Google Review",
    quote: "I've been coming to Haus Of Aveda Paddington for over a year now. The plant-based products make such a difference—my hair feels noticeably softer and healthier without the chemical smell of standard salons.",
    source: "Google Verified Review (4.8/5 Rating)",
  },
  {
    id: "rev-3",
    author: "Verified Client",
    location: "Sydney, Australia",
    service: "Botanical Hair & Scalp Therapy",
    rating: 5,
    date: "Google Review",
    quote: "Such a beautiful, calming sanctuary right in the heart of Paddington. Every detail from the herbal tea to the attentive stylists is thoughtful. 4.8 stars well deserved across all 346 reviews.",
    source: "Google Verified Review (4.8/5 Rating)",
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    number: "01",
    title: "100% Vegan Botanical Formulas",
    desc: "Aveda formulations powered by pure flower and plant essences, manufactured with 100% wind and solar energy, and certified cruelty-free.",
  },
  {
    number: "02",
    title: "Master Colour & Cut Specialists",
    desc: "Decades of combined master artistry specializing in lived-in Sydney balayage, dimensional foils, and precision scissor architecture.",
  },
  {
    number: "03",
    title: "Sensory Basin Rituals",
    desc: "Every appointment includes balancing aroma journeys, scalp exfoliation, and relaxing stress-relief massages at our serene wash lounge.",
  },
  {
    number: "04",
    title: "Heritage Oxford Street Sanctuary",
    desc: "A luminous, calming escape designed with sustainable timber, natural light, and tranquil botanical greenery in central Paddington.",
  },
];
