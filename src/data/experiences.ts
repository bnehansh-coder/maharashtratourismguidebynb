import { ExperienceCategory } from '../types';

export const EXPERIENCES: ExperienceCategory[] = [
  {
    id: 'forts-heritage',
    title: 'Forts & Maratha Heritage',
    marathiTitle: 'किल्ले आणि वारसा',
    description: 'Impregnable cliff-top fortresses, bastions, and sea-citadels conceived by Chhatrapati Shivaji Maharaj across the rugged Western Ghats.',
    count: '350+ Forts',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'Photo via Unsplash / Sahyadri Forts',
    slug: 'heritage',
    targetFilter: 'Heritage'
  },
  {
    id: 'hill-stations',
    title: 'Hill Stations & Mist',
    marathiTitle: 'थंड हवेची ठिकाणे',
    description: 'Escape to lush green canopies, cascading monsoonal waterfalls, strawberry plateaus, and serene valley viewpoints.',
    count: '15+ Mountain Retreats',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'Photo via Unsplash / Western Ghats',
    slug: 'nature',
    targetFilter: 'Hill Station'
  },
  {
    id: 'beaches-konkan',
    title: 'Beaches & Konkan Coast',
    marathiTitle: 'कोकण किनारपट्टी',
    description: '720 kilometers of unspoiled Arabian Sea coastline fringed by coconut groves, ancient sea forts, and Malvani culinary heritage.',
    count: '720 km Coastline',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'Photo via Unsplash / Konkan Coast',
    slug: 'destinations?cat=Beach',
    targetFilter: 'Beach'
  },
  {
    id: 'temples-pilgrimage',
    title: 'Temples & Spiritual Journeys',
    marathiTitle: 'तीर्थक्षेत्रे आणि मंदिरे',
    description: 'Home to 5 Jyotirlingas, the sacred Ashta Vinayakas, Pandharpur Vitthal temple, Shirdi, and rock-hewn holy shrines.',
    count: '5 Jyotirlingas & Ashta Vinayaka',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'Photo via Unsplash / Ancient Temples',
    slug: 'destinations?cat=Spiritual',
    targetFilter: 'Spiritual'
  },
  {
    id: 'wildlife-nature',
    title: 'Wildlife & Tiger Reserves',
    marathiTitle: 'वन्यजीव आणि अभयारण्ये',
    description: 'Track royal Bengal tigers in Tadoba and Pench, encounter leopards in Sanjay Gandhi National Park, and observe migratory flamingos.',
    count: '6 Tiger Reserves & 48 Sanctuaries',
    image: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'Photo via Unsplash / Tadoba Safari',
    slug: 'nature',
    targetFilter: 'Nature & Wildlife'
  },
  {
    id: 'food-culture',
    title: 'Food, Festivals & Culture',
    marathiTitle: 'खाद्यसंस्कृती आणि सण',
    description: 'From fiery Kolhapuri rassa and coastal Malvani fish curries to sweet Ukdiche Modak, Puran Poli, Lavani folk music, and Warli art.',
    count: 'Endless Flavors & Traditions',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'Photo via Unsplash / Indian Flavors',
    slug: 'food-and-culture',
    targetFilter: 'Food'
  },
  {
    id: 'adventure-trekking',
    title: 'Adventure & Sahyadri Treks',
    marathiTitle: 'साहस आणि ट्रेकिंग',
    description: 'Scale Mount Kalsubai (highest peak), descend into the colossal Sandhan Valley canyon, camp under starry skies, or dive at Tarkarli.',
    count: '100+ Marked Trek Trails',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'Photo via Unsplash / Sahyadri Trek',
    slug: 'travel-guide',
    targetFilter: 'Adventure'
  },
  {
    id: 'city-experiences',
    title: 'Vibrant City Experiences',
    marathiTitle: 'शहरी अनुभव',
    description: 'The pulsing energy of Mumbai, the intellectual and cultural heritage of Pune, and the storied vineyards of Nashik.',
    count: 'Iconic Metropolises',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    imageCredit: 'Photo via Unsplash / Gateway of India',
    slug: 'destinations?cat=City',
    targetFilter: 'City'
  }
];
