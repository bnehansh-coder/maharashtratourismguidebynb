export interface TopAttraction {
  name: string;
  description: string;
  badge?: string;
  image?: string;
}

export interface HowToReach {
  air: string;
  rail: string;
  road: string;
}

export interface SuggestedItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface LocalDish {
  name: string;
  description: string;
  vegetarian: boolean;
  mustTryLocation?: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  marathiName: string;
  tagline: string;
  category: 'Heritage' | 'Hill Station' | 'Beach' | 'Nature & Wildlife' | 'Spiritual' | 'City' | 'Adventure';
  region: 'Western Maharashtra' | 'Konkan' | 'Marathwada' | 'Vidarbha' | 'Khandesh' | 'Mumbai MMR';
  district: string;
  heroImage: string;
  imageCredit: string;
  gallery: { url: string; caption: string; credit: string }[];
  shortDescription: string;
  overview: string[];
  highlights: string[];
  topAttractions: TopAttraction[];
  thingsToDo: string[];
  bestTimeToVisit: {
    idealMonths: string;
    description: string;
    monsoonTip?: string;
    summerTip?: string;
    winterTip?: string;
  };
  estimatedDuration: string;
  budgetLevel: 'Budget' | 'Moderate' | 'Premium';
  howToReach: HowToReach;
  suggestedItinerary: SuggestedItineraryDay[];
  localFoodRecommendations: LocalDish[];
  nearbyDestinations: { name: string; slug: string; distance: string }[];
  travelTips: string[];
  coordinates: { lat: number; lng: number };
  popular: boolean;
  featuredOnHome: boolean;
}

export interface BlogSection {
  heading: string;
  content: string[];
  subsections?: {
    subheading: string;
    content: string[];
  }[];
  proTip?: string;
  image?: {
    url: string;
    caption: string;
    credit: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Forts & Heritage' | 'Hill Stations' | 'Beaches & Konkan' | 'Caves & History' | 'Hidden Gems' | 'Food & Culture' | 'Monsoon Escapes' | 'Wildlife' | 'Spiritual' | 'Itineraries';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  heroImage: string;
  imageCredit: string;
  quickFacts: {
    idealDuration: string;
    bestSeason: string;
    nearestHub: string;
    budget: string;
  };
  sections: BlogSection[];
  highlights: string[];
  suggestedItinerary?: SuggestedItineraryDay[];
  travelTips: string[];
  localFlavors: string[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  destinationSlug?: string;
  tags: string[];
  featured: boolean;
}

export interface ExperienceCategory {
  id: string;
  title: string;
  marathiTitle: string;
  description: string;
  count: string;
  image: string;
  imageCredit: string;
  slug: string;
  targetFilter: string;
}
