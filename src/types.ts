export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  duration: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'couture' | 'colour' | 'styling' | 'botanical';
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  quote: string;
  source: string;
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  desc: string;
}

export interface BusinessInfo {
  name: string;
  subTitle: string;
  brandTagline: string;
  category?: string;
  heroHeadline: string;
  heroSubheadline: string;
  address: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
    country: string;
    fullFormatted: string;
  };
  phone: string;
  phoneRaw: string;
  email: string;
  website: string;
  websiteDisplay: string;
  googleRating: number;
  reviewsCount: number;
  openingHours: string;
  openingSchedule: { day: string; hours: string }[];
  googleMapsUrl: string;
  bookingUrl: string;
}
