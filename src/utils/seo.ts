/**
 * SEO metadata and Schema.org generator for Maharashtra Tourism Portal
 */

export interface PageSEO {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  primaryKeyword: string;
  secondaryKeywords: [string, string];
  searchIntent: 'Informational' | 'Commercial Investigation' | 'Transactional' | 'Navigational';
  mainQuestionAnswered: string;
  schema?: Record<string, any>;
}

export const SEO_DATA: Record<string, PageSEO> = {
  '/': {
    title: 'Maharashtra Tourism – Explore Places to Visit in Maharashtra',
    description: 'Explore Maharashtra tourism guide with historic Maratha forts, golden Konkan beaches, Sahyadri hill stations, UNESCO caves, and authentic local cuisine.',
    canonicalUrl: 'https://maharashtratourismguidebynbatra.vercel.app/',
    ogImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80',
    primaryKeyword: 'Maharashtra tourism',
    secondaryKeywords: ['places to visit in Maharashtra', 'Maharashtra travel guide'],
    searchIntent: 'Informational',
    mainQuestionAnswered: 'What are the best places to visit and travel experiences across Maharashtra?',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TouristDestination',
      name: 'Maharashtra',
      description: 'Western Indian state renowned for Sahyadri forts, Konkan beaches, UNESCO cave temples, and tiger reserves.',
      url: 'https://maharashtratourismguidebynbatra.vercel.app/',
      touristType: ['HeritageTourism', 'Ecotourism', 'BeachTourism', 'CulinaryTourism', 'AdventureTourism']
    }
  },
  '/destinations': {
    title: 'Places to Visit in Maharashtra – 16 Top Travel Destinations',
    description: 'Discover the best places to visit in Maharashtra: Mumbai, Pune, Mahabaleshwar, Lonavala, Alibaug, Ajanta Ellora, Tadoba tiger reserve, and hidden getaways.',
    canonicalUrl: 'https://maharashtratourismguidebynbatra.vercel.app/destinations',
    primaryKeyword: 'places to visit in Maharashtra',
    secondaryKeywords: ['Maharashtra tourist destinations', 'Maharashtra sightseeing places'],
    searchIntent: 'Commercial Investigation',
    mainQuestionAnswered: 'Which destinations in Maharashtra should I add to my travel bucket list?'
  },
  '/blogs': {
    title: 'Maharashtra Travel Guide & Tourism Blogs – Complete Guides',
    description: 'Read 12 in-depth Maharashtra tourism blogs covering Maratha hill forts, Lonavala caves, Konkan beaches, Tadoba safaris, food guides, and itineraries.',
    canonicalUrl: 'https://maharashtratourismguidebynbatra.vercel.app/blogs',
    primaryKeyword: 'Maharashtra travel guide',
    secondaryKeywords: ['Maharashtra tourism blogs', 'Maharashtra travel itineraries'],
    searchIntent: 'Informational',
    mainQuestionAnswered: 'Where can I find complete travel articles and itineraries for Maharashtra?'
  },
  '/heritage': {
    title: 'Heritage Places in Maharashtra – Maratha Forts & UNESCO Caves',
    description: 'Explore ancient heritage sites in Maharashtra: Chhatrapati Shivaji Maharaj forts, Kailasa temple at Ellora, Ajanta Buddhist frescoes, and monuments.',
    canonicalUrl: 'https://maharashtratourismguidebynbatra.vercel.app/heritage',
    primaryKeyword: 'heritage places in Maharashtra',
    secondaryKeywords: ['Maratha forts Maharashtra', 'UNESCO sites Maharashtra'],
    searchIntent: 'Informational',
    mainQuestionAnswered: 'What are the most famous historical forts and UNESCO monuments in Maharashtra?'
  },
  '/nature': {
    title: 'Best Hill Stations in Maharashtra & Wildlife Sanctuaries',
    description: 'Explore the best hill stations in Maharashtra and national parks: Mahabaleshwar, Matheran, Bhandardara, Tadoba tiger reserve, and Kaas Plateau.',
    canonicalUrl: 'https://maharashtratourismguidebynbatra.vercel.app/nature',
    primaryKeyword: 'best hill stations in Maharashtra',
    secondaryKeywords: ['Maharashtra wildlife sanctuaries', 'Sahyadri mountain getaways'],
    searchIntent: 'Informational',
    mainQuestionAnswered: 'Where can I find mountain retreats and wildlife safaris in Maharashtra?'
  },
  '/food-and-culture': {
    title: 'Famous Food of Maharashtra – Street Food, Thalis & Culture',
    description: 'Discover authentic Maharashtrian cuisine: Mumbai Vada Pav, Misal Pav, Pithla Bhakri, Malvani seafood, Kolhapuri rassa, Puran Poli, and Modak.',
    canonicalUrl: 'https://maharashtratourismguidebynbatra.vercel.app/food-and-culture',
    primaryKeyword: 'famous food of Maharashtra',
    secondaryKeywords: ['Maharashtrian cuisine', 'Maharashtra street food guide'],
    searchIntent: 'Informational',
    mainQuestionAnswered: 'What are the iconic traditional foods and culinary specialties of Maharashtra?'
  },
  '/travel-guide': {
    title: 'Maharashtra Itinerary & Travel Guide – 2, 3 & 5 Day Plans',
    description: 'Plan your trip with tested 2-day, 3-day, and 5-day Maharashtra itineraries. Practical guides on MSRTC buses, railways, season packing, and safety.',
    canonicalUrl: 'https://maharashtratourismguidebynbatra.vercel.app/travel-guide',
    primaryKeyword: 'Maharashtra itinerary',
    secondaryKeywords: ['Maharashtra trip planner', 'weekend trips from Mumbai Pune'],
    searchIntent: 'Commercial Investigation',
    mainQuestionAnswered: 'How should I plan a 2-day, 3-day, or 5-day tour across Maharashtra?'
  },
  '/contact': {
    title: 'Contact Maharashtra Tourism Guide – Helpdesk & Helplines',
    description: 'Reach out to our independent travel editorial desk. Access verified 24/7 tourist helplines: MTDC 1800-229-930, Police 112, Medical 108, and info desks.',
    canonicalUrl: 'https://maharashtratourismguidebynbatra.vercel.app/contact',
    primaryKeyword: 'Maharashtra tourism helpline',
    secondaryKeywords: ['MTDC tourist assistance', 'Maharashtra travel information desk'],
    searchIntent: 'Navigational',
    mainQuestionAnswered: 'How can I contact tourist assistance and emergency helplines in Maharashtra?'
  }
};

import { KEYWORD_MAPPING } from '../data/seoKeywords';

/**
 * Update document head metadata dynamically on client route transition
 */
export function applySEO(
  path: string,
  customTitle?: string,
  customDesc?: string,
  customImage?: string,
  schemaData?: Record<string, any>
) {
  if (typeof document === 'undefined') return;

  const cleanPath = path.split('?')[0].replace(/\/$/, '') || '/';
  const base = SEO_DATA[cleanPath] || SEO_DATA[path];
  const mapped = KEYWORD_MAPPING.find(
    (k) => k.targetUrl === cleanPath || k.targetUrl === path || k.targetUrl === (cleanPath === '/' ? '/' : cleanPath)
  );

  const finalTitle = customTitle || base?.title || mapped?.seoTitle || 'Maharashtra Tourism – Explore the Land of Wonders';
  const finalDesc = customDesc || base?.description || mapped?.metaDescription || 'Discover Maharashtra forts, beaches, hill stations, and caves with our comprehensive guide.';
  const finalUrl = `https://maharashtratourismguidebynbatra.vercel.app${cleanPath === '/' ? '' : cleanPath}`;
  const finalImage = customImage || base?.ogImage || 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80';

  // Title
  document.title = finalTitle;

  // Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', finalDesc);

  // Canonical Tag
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', finalUrl);

  // Open Graph
  const setMeta = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('og:title', finalTitle);
  setMeta('og:description', finalDesc);
  setMeta('og:url', finalUrl);
  setMeta('og:image', finalImage);
  setMeta('og:type', path.startsWith('/blogs/') ? 'article' : 'website');
  setMeta('og:site_name', 'Maharashtra Tourism Portal');

  // Twitter Cards
  const setTwitter = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setTwitter('twitter:card', 'summary_large_image');
  setTwitter('twitter:title', finalTitle);
  setTwitter('twitter:description', finalDesc);
  setTwitter('twitter:image', finalImage);

  // Dynamic JSON-LD structured data
  const existingScript = document.getElementById('dynamic-jsonld');
  if (existingScript) {
    existingScript.remove();
  }

  // Determine fallback schema if not provided
  let effectiveSchema = schemaData || base?.schema;
  if (!effectiveSchema && mapped) {
    if (cleanPath.startsWith('/destinations/')) {
      effectiveSchema = {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: mapped.targetH1,
        description: mapped.metaDescription,
        url: finalUrl,
        image: finalImage,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Maharashtra',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN'
        }
      };
    } else if (cleanPath.startsWith('/blogs/')) {
      effectiveSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: mapped.targetH1,
        description: mapped.metaDescription,
        url: finalUrl,
        image: finalImage,
        publisher: {
          '@type': 'Organization',
          name: 'Maharashtra Tourism Portal'
        }
      };
    } else {
      effectiveSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: mapped.seoTitle,
        description: mapped.metaDescription,
        url: finalUrl,
        mainEntity: {
          '@type': 'Question',
          name: mapped.mainQuestionAnswered
        }
      };
    }
  }

  if (effectiveSchema) {
    const script = document.createElement('script');
    script.id = 'dynamic-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(effectiveSchema);
    document.head.appendChild(script);
  }
}
