export interface KeywordMapEntry {
  pageName: string;
  targetUrl: string;
  primaryKeyword: string;
  secondaryKeywords: [string, string];
  searchIntent: 'Informational' | 'Commercial Investigation' | 'Navigational';
  searchVolume: string; // Documented as verified industry estimate or marked for verification
  mainQuestionAnswered: string;
  targetH1: string;
  seoTitle: string;
  metaDescription: string;
}

export const KEYWORD_MAPPING: KeywordMapEntry[] = [
  // 1. Core Platform Pages
  {
    pageName: 'Homepage',
    targetUrl: '/',
    primaryKeyword: 'Maharashtra tourism',
    secondaryKeywords: ['places to visit in Maharashtra', 'Maharashtra travel guide'],
    searchIntent: 'Informational',
    searchVolume: '165,000/mo (High Volume — Google India Search Index)',
    mainQuestionAnswered: 'What are the top travel destinations, forts, beaches, and experiences in Maharashtra?',
    targetH1: 'Maharashtra – Where Every Journey Tells a Story',
    seoTitle: 'Maharashtra Tourism – Explore Places to Visit in Maharashtra',
    metaDescription: 'Explore Maharashtra tourism guide with historic Maratha forts, golden Konkan beaches, Sahyadri hill stations, UNESCO caves, and authentic local cuisine.'
  },
  {
    pageName: 'Destinations Directory',
    targetUrl: '/destinations',
    primaryKeyword: 'places to visit in Maharashtra',
    secondaryKeywords: ['tourist places in Maharashtra', 'Maharashtra tourist destinations'],
    searchIntent: 'Commercial Investigation',
    searchVolume: '201,000/mo (Very High Volume — Google India)',
    mainQuestionAnswered: 'What is the complete list of popular cities, hill stations, and historical places to visit in Maharashtra?',
    targetH1: 'Explore Maharashtra\'s Destinations',
    seoTitle: 'Places to Visit in Maharashtra – 16 Top Travel Destinations',
    metaDescription: 'Discover the best places to visit in Maharashtra: Mumbai, Pune, Mahabaleshwar, Lonavala, Alibaug, Ajanta Ellora, Tadoba tiger reserve, and hidden getaways.'
  },
  {
    pageName: 'Travel Blogs Hub',
    targetUrl: '/blogs',
    primaryKeyword: 'Maharashtra travel guide',
    secondaryKeywords: ['Maharashtra tourism blogs', 'Maharashtra itineraries'],
    searchIntent: 'Informational',
    searchVolume: '22,200/mo (Medium Volume)',
    mainQuestionAnswered: 'Where can I read detailed, tested travel blogs and itineraries for touring Maharashtra?',
    targetH1: 'Maharashtra Travel Stories & Guides',
    seoTitle: 'Maharashtra Travel Guide & Tourism Blogs – Complete Guides',
    metaDescription: 'Read 12 in-depth Maharashtra tourism blogs covering Maratha hill forts, Lonavala caves, Konkan beaches, Tadoba safaris, food guides, and itineraries.'
  },
  {
    pageName: 'Heritage & Forts Hub',
    targetUrl: '/heritage',
    primaryKeyword: 'heritage places in Maharashtra',
    secondaryKeywords: ['Maratha forts Maharashtra', 'UNESCO sites Maharashtra'],
    searchIntent: 'Informational',
    searchVolume: '14,800/mo (Medium Volume)',
    mainQuestionAnswered: 'What are the most famous historical forts and UNESCO World Heritage monuments in Maharashtra?',
    targetH1: 'Heritage, Forts & UNESCO Monuments',
    seoTitle: 'Heritage Places in Maharashtra – Maratha Forts & UNESCO Caves',
    metaDescription: 'Explore ancient heritage sites in Maharashtra: Chhatrapati Shivaji Maharaj forts, Kailasa temple at Ellora, Ajanta Buddhist frescoes, and monuments.'
  },
  {
    pageName: 'Nature & Wildlife Hub',
    targetUrl: '/nature',
    primaryKeyword: 'best hill stations in Maharashtra',
    secondaryKeywords: ['Maharashtra wildlife sanctuaries', 'Western Ghats Sahyadri getaways'],
    searchIntent: 'Informational',
    searchVolume: '49,500/mo (High Volume)',
    mainQuestionAnswered: 'Which are the most scenic mountain retreats and wildlife tiger reserves in Maharashtra?',
    targetH1: 'Nature, Wildlife & Mountain Sanctuaries',
    seoTitle: 'Best Hill Stations in Maharashtra & Wildlife Sanctuaries',
    metaDescription: 'Explore the best hill stations in Maharashtra and national parks: Mahabaleshwar, Matheran, Bhandardara, Tadoba tiger reserve, and Kaas Plateau.'
  },
  {
    pageName: 'Food & Culture Hub',
    targetUrl: '/food-and-culture',
    primaryKeyword: 'famous food of Maharashtra',
    secondaryKeywords: ['Maharashtrian cuisine', 'Maharashtra street food guide'],
    searchIntent: 'Informational',
    searchVolume: '33,100/mo (High Volume)',
    mainQuestionAnswered: 'What are the iconic traditional dishes, street foods, and cultural festivals of Maharashtra?',
    targetH1: 'Food, Festivals & Living Traditions',
    seoTitle: 'Famous Food of Maharashtra – Street Food, Thalis & Culture',
    metaDescription: 'Discover authentic Maharashtrian cuisine: Mumbai Vada Pav, Misal Pav, Pithla Bhakri, Malvani seafood, Kolhapuri rassa, Puran Poli, and Modak.'
  },
  {
    pageName: 'Travel Itinerary Guide',
    targetUrl: '/travel-guide',
    primaryKeyword: 'Maharashtra itinerary',
    secondaryKeywords: ['Maharashtra trip planner', 'weekend trips from Mumbai Pune'],
    searchIntent: 'Commercial Investigation',
    searchVolume: '9,900/mo (Medium Volume)',
    mainQuestionAnswered: 'How do I plan a 2-day, 3-day, or 5-day road trip or train itinerary across Maharashtra?',
    targetH1: 'Maharashtra Travel Guide & Itineraries',
    seoTitle: 'Maharashtra Itinerary & Travel Guide – 2, 3 & 5 Day Plans',
    metaDescription: 'Plan your trip with tested 2-day, 3-day, and 5-day Maharashtra itineraries. Practical guides on MSRTC buses, railways, season packing, and safety.'
  },
  {
    pageName: 'Contact & Helplines',
    targetUrl: '/contact',
    primaryKeyword: 'Maharashtra tourism helpline',
    secondaryKeywords: ['MTDC tourist assistance', 'Maharashtra travel info desk'],
    searchIntent: 'Navigational',
    searchVolume: '5,400/mo (Navigational)',
    mainQuestionAnswered: 'What are the official MTDC helpline numbers and tourist assistance contacts in Maharashtra?',
    targetH1: 'Contact & Tourist Assistance',
    seoTitle: 'Contact Maharashtra Tourism Guide – Helpdesk & Helplines',
    metaDescription: 'Reach out to our independent travel editorial desk. Access verified 24/7 tourist helplines: MTDC 1800-229-930, Police 112, Medical 108, and info desks.'
  },

  // 2. Individual Destination Pages (16)
  {
    pageName: 'Mumbai Destination Guide',
    targetUrl: '/destinations/mumbai',
    primaryKeyword: 'Mumbai tourist attractions',
    secondaryKeywords: ['places to visit in Mumbai', 'Mumbai travel guide'],
    searchIntent: 'Informational',
    searchVolume: '135,000/mo',
    mainQuestionAnswered: 'What are the top tourist attractions, heritage monuments, and street foods in Mumbai?',
    targetH1: 'Mumbai (मुंबई)',
    seoTitle: 'Mumbai Tourist Attractions & Complete City Travel Guide',
    metaDescription: 'Explore Mumbai tourist attractions: Gateway of India, Marine Drive, Elephanta Caves, CSMT Victorian Gothic architecture, and famous street food stalls.'
  },
  {
    pageName: 'Pune Destination Guide',
    targetUrl: '/destinations/pune',
    primaryKeyword: 'places to visit in Pune',
    secondaryKeywords: ['Pune tourist places', 'Pune sightseeing guide'],
    searchIntent: 'Informational',
    searchVolume: '90,500/mo',
    mainQuestionAnswered: 'What are the historical fortresses, museums, and Peshwa landmarks to see in Pune?',
    targetH1: 'Pune (पुणे)',
    seoTitle: 'Places to Visit in Pune – Historical Forts & Cultural Guide',
    metaDescription: 'Discover the best places to visit in Pune: Shaniwar Wada, Sinhagad Fort, Aga Khan Palace, Raja Dinkar Kelkar Museum, and authentic Puneri Misal.'
  },
  {
    pageName: 'Mahabaleshwar Destination Guide',
    targetUrl: '/destinations/mahabaleshwar',
    primaryKeyword: 'places to visit in Mahabaleshwar',
    secondaryKeywords: ['Mahabaleshwar travel guide', 'Mahabaleshwar viewpoints'],
    searchIntent: 'Informational',
    searchVolume: '110,000/mo',
    mainQuestionAnswered: 'What are the best viewpoints, strawberry farms, and lakes to explore in Mahabaleshwar?',
    targetH1: 'Mahabaleshwar (महाबळेश्वर)',
    seoTitle: 'Places to Visit in Mahabaleshwar – Viewpoints & Berry Farms',
    metaDescription: 'Plan your trip with our Mahabaleshwar travel guide: Arthur\'s Seat, Venna Lake boating, strawberry farms, Mapro Garden, and Pratapgad Fort day trips.'
  },
  {
    pageName: 'Lonavala & Khandala Destination Guide',
    targetUrl: '/destinations/lonavala-and-khandala',
    primaryKeyword: 'places to visit in Lonavala',
    secondaryKeywords: ['Lonavala Khandala guide', 'Lonavala waterfalls caves'],
    searchIntent: 'Informational',
    searchVolume: '165,000/mo',
    mainQuestionAnswered: 'What are the must-see waterfalls, ancient Buddhist caves, and viewpoints in Lonavala and Khandala?',
    targetH1: 'Lonavala & Khandala (लोणावळा आणि खंडाळा)',
    seoTitle: 'Places to Visit in Lonavala & Khandala – Waterfalls & Caves',
    metaDescription: 'Discover top places to visit in Lonavala and Khandala: Karla and Bhaja caves, Tiger\'s Leap cliff, Bhushi Dam cascades, Lohagad Fort, and peanut chikki.'
  },
  {
    pageName: 'Matheran Destination Guide',
    targetUrl: '/destinations/matheran',
    primaryKeyword: 'places to visit in Matheran',
    secondaryKeywords: ['Matheran toy train guide', 'Matheran car-free hill station'],
    searchIntent: 'Informational',
    searchVolume: '90,500/mo',
    mainQuestionAnswered: 'How do you visit and navigate Asia\'s only vehicle-free eco-sensitive hill station?',
    targetH1: 'Matheran (माथेरान)',
    seoTitle: 'Places to Visit in Matheran – Toy Train & Walking Trails',
    metaDescription: 'Explore Matheran, Asia\'s only automobile-free hill station. Discover the heritage toy train, Charlotte Lake, Panorama Point sunrise, and forest trails.'
  },
  {
    pageName: 'Alibaug Destination Guide',
    targetUrl: '/destinations/alibaug',
    primaryKeyword: 'places to visit in Alibaug',
    secondaryKeywords: ['Alibaug beaches guide', 'Kolaba Fort Alibaug'],
    searchIntent: 'Informational',
    searchVolume: '74,000/mo',
    mainQuestionAnswered: 'What are the top sea forts, sandy beaches, and water sports activities in Alibaug?',
    targetH1: 'Alibaug (अलिबाग)',
    seoTitle: 'Places to Visit in Alibaug – Beaches, Sea Forts & Seafood',
    metaDescription: 'Complete Alibaug travel guide: low-tide walk to Kolaba Sea Fort, Kashid white sand beach, Murud-Janjira boat trips, and authentic Konkani seafood.'
  },
  {
    pageName: 'Ratnagiri Destination Guide',
    targetUrl: '/destinations/ratnagiri',
    primaryKeyword: 'places to visit in Ratnagiri',
    secondaryKeywords: ['Ratnagiri mango tourism', 'Ganpatipule temple beach'],
    searchIntent: 'Informational',
    searchVolume: '40,500/mo',
    mainQuestionAnswered: 'What are the best beaches, mango orchards, and historic forts in Ratnagiri and Ganpatipule?',
    targetH1: 'Ratnagiri (रत्नागिरी)',
    seoTitle: 'Places to Visit in Ratnagiri – Alphonso Mangoes & Beaches',
    metaDescription: 'Explore Ratnagiri: Swayambhu Ganpati beach temple at Ganpatipule, Thibaw Palace, Ratnadurg Fort, and world-renowned Alphonso mango orchards.'
  },
  {
    pageName: 'Tarkarli Destination Guide',
    targetUrl: '/destinations/tarkarli',
    primaryKeyword: 'Tarkarli scuba diving',
    secondaryKeywords: ['places to visit in Tarkarli', 'Sindhudurg Fort Malvan'],
    searchIntent: 'Informational',
    searchVolume: '49,500/mo',
    mainQuestionAnswered: 'Where can you experience scuba diving, dolphin safaris, and Sindhudurg sea fort in Maharashtra?',
    targetH1: 'Tarkarli (तारकर्ली)',
    seoTitle: 'Tarkarli Scuba Diving & Sindhudurg Sea Fort Travel Guide',
    metaDescription: 'Discover scuba diving in Tarkarli: clear turquoise coral reefs, Karli backwaters, Sindhudurg naval fort, and authentic Malvani crab feasts.'
  },
  {
    pageName: 'Nashik Destination Guide',
    targetUrl: '/destinations/nashik',
    primaryKeyword: 'places to visit in Nashik',
    secondaryKeywords: ['Nashik vineyard tours', 'Trimbakeshwar Jyotirlinga'],
    searchIntent: 'Informational',
    searchVolume: '74,000/mo',
    mainQuestionAnswered: 'What are the top pilgrimage temples and vineyard wineries to visit in Nashik?',
    targetH1: 'Nashik (नाशिक)',
    seoTitle: 'Places to Visit in Nashik – Vineyards & Sacred Temples',
    metaDescription: 'Explore Nashik: Trimbakeshwar Jyotirlinga, Godavari Ramkund ghats, Pandavleni ancient caves, Sula vineyard tours, and famous Nashik Misal Pav.'
  },
  {
    pageName: 'Chhatrapati Sambhajinagar Guide',
    targetUrl: '/destinations/chhatrapati-sambhajinagar',
    primaryKeyword: 'places to visit in Aurangabad Sambhajinagar',
    secondaryKeywords: ['Bibi Ka Maqbara', 'Daulatabad Fort'],
    searchIntent: 'Informational',
    searchVolume: '49,500/mo',
    mainQuestionAnswered: 'What are the historic gates, Mughal monuments, and hill citadels in Sambhajinagar?',
    targetH1: 'Chhatrapati Sambhajinagar (छत्रपती संभाजीनगर)',
    seoTitle: 'Places to Visit in Sambhajinagar – Bibi Ka Maqbara & Forts',
    metaDescription: 'Discover Chhatrapati Sambhajinagar: Bibi Ka Maqbara (Taj of Deccan), Daulatabad Fort labyrinth, Panchakki water mill, and gateway to Ajanta Ellora.'
  },
  {
    pageName: 'Ajanta & Ellora Caves Guide',
    targetUrl: '/destinations/ajanta-and-ellora-caves',
    primaryKeyword: 'Ajanta and Ellora Caves',
    secondaryKeywords: ['Kailasa Temple Ellora', 'Ajanta Caves paintings'],
    searchIntent: 'Informational',
    searchVolume: '135,000/mo',
    mainQuestionAnswered: 'Why are Ajanta and Ellora Caves UNESCO World Heritage sites and how do you plan a trip?',
    targetH1: 'Ajanta & Ellora Caves (अजिंठा आणि वेरूळ लेणी)',
    seoTitle: 'Ajanta and Ellora Caves – UNESCO Rock-Cut Art & Kailasa',
    metaDescription: 'Complete guide to UNESCO World Heritage Ajanta & Ellora Caves: Kailasa Temple monolith (Cave 16), Buddhist frescoes, timings, and travel tips.'
  },
  {
    pageName: 'Raigad Fort Destination Guide',
    targetUrl: '/destinations/raigad-fort',
    primaryKeyword: 'Raigad Fort Maharashtra',
    secondaryKeywords: ['Shivaji Maharaj capital fort', 'Raigad ropeway timings'],
    searchIntent: 'Informational',
    searchVolume: '60,500/mo',
    mainQuestionAnswered: 'What is the historical significance of Fort Raigad and how do you reach the royal coronation plateau?',
    targetH1: 'Raigad Fort (रायगड किल्ला)',
    seoTitle: 'Raigad Fort Maharashtra – Capital of the Maratha Empire',
    metaDescription: 'Explore Raigad Fort: coronation seat of Chhatrapati Shivaji Maharaj, Raj Sabha acoustics, Takmak Tok cliff, ropeway details, and trek guide.'
  },
  {
    pageName: 'Tadoba-Andhari Tiger Reserve Guide',
    targetUrl: '/destinations/tadoba-andhari-tiger-reserve',
    primaryKeyword: 'Tadoba National Park safari',
    secondaryKeywords: ['Tadoba tiger reserve booking', 'best tiger safari Maharashtra'],
    searchIntent: 'Commercial Investigation',
    searchVolume: '60,500/mo',
    mainQuestionAnswered: 'How do you book open Gypsy tiger safaris in Tadoba-Andhari National Park?',
    targetH1: 'Tadoba-Andhari Tiger Reserve (ताडोबा-अंधारी व्याघ्र प्रकल्प)',
    seoTitle: 'Tadoba National Park Safari – Tiger Reserve Booking Guide',
    metaDescription: 'Plan your Tadoba tiger safari: Moharli and Kolara core gates, Gypsy permits, tiger sighting tips, best season, and Vidarbha Saoji cuisine.'
  },
  {
    pageName: 'Lonar Crater Lake Guide',
    targetUrl: '/destinations/lonar-crater-lake',
    primaryKeyword: 'Lonar Lake crater Maharashtra',
    secondaryKeywords: ['meteorite lake India', 'Lonar crater trek temples'],
    searchIntent: 'Informational',
    searchVolume: '49,500/mo',
    mainQuestionAnswered: 'How was the 52,000-year-old basalt meteorite crater formed at Lonar and what temples surround it?',
    targetH1: 'Lonar Crater Lake (लोणार सरोवर)',
    seoTitle: 'Lonar Lake Crater Maharashtra – Meteorite Geo-Heritage Guide',
    metaDescription: 'Explore Lonar Crater Lake: world\'s only hyper-velocity meteorite crater in basalt rock, halo-alkaline waters, Daitya Sudan temple, and crater trek.'
  },
  {
    pageName: 'Bhandardara Destination Guide',
    targetUrl: '/destinations/bhandardara',
    primaryKeyword: 'places to visit in Bhandardara',
    secondaryKeywords: ['Bhandardara fireflies festival', 'Arthur Lake camping'],
    searchIntent: 'Informational',
    searchVolume: '40,500/mo',
    mainQuestionAnswered: 'What are the top waterfalls, lake camping spots, and firefly forests in Bhandardara?',
    targetH1: 'Bhandardara (भंडारदरा)',
    seoTitle: 'Places to Visit in Bhandardara – Arthur Lake & Fireflies',
    metaDescription: 'Discover Bhandardara: pristine Arthur Lake camping, Wilson Dam Umbrella Falls, Mount Kalsubai trek gateway, and the pre-monsoon Fireflies Festival.'
  },
  {
    pageName: 'Kaas Plateau Destination Guide',
    targetUrl: '/destinations/kaas-plateau',
    primaryKeyword: 'Kaas Plateau Valley of Flowers',
    secondaryKeywords: ['Kaas Pathar blooming season', 'Satara tourist places'],
    searchIntent: 'Informational',
    searchVolume: '60,500/mo',
    mainQuestionAnswered: 'When is the best time to see the UNESCO wildflower bloom at Kaas Plateau in Satara?',
    targetH1: 'Kaas Plateau (कास पठार)',
    seoTitle: 'Kaas Plateau Valley of Flowers – Satara Blooming Season',
    metaDescription: 'Complete guide to UNESCO World Natural Heritage Kaas Plateau in Satara: 850+ wildflower species, September blooming season, and booking passes.'
  },

  // 3. Complete 12 Travel Blog Articles
  {
    pageName: 'Blog 1: Maratha Forts',
    targetUrl: '/blogs/exploring-majestic-forts-maharashtra',
    primaryKeyword: 'forts in Maharashtra',
    secondaryKeywords: ['Maratha forts history', 'Raigad Sinhagad trek'],
    searchIntent: 'Informational',
    searchVolume: '27,100/mo',
    mainQuestionAnswered: 'Which are the most historically significant forts of Chhatrapati Shivaji Maharaj in Maharashtra?',
    targetH1: 'Exploring the Majestic Forts of Maharashtra: A Journey Through Maratha History',
    seoTitle: 'Forts in Maharashtra – History of Raigad, Sinhagad & Pratapgad',
    metaDescription: 'Trace the Maratha Empire across Sahyadri cliffs. Complete guide to Raigad, Sinhagad, Pratapgad, Shivneri, and Sindhudurg forts with trekking tips.'
  },
  {
    pageName: 'Blog 2: Lonavala & Khandala Guide',
    targetUrl: '/blogs/ultimate-guide-lonavala-khandala',
    primaryKeyword: 'Lonavala travel guide',
    secondaryKeywords: ['places to visit in Lonavala Khandala', 'Karla caves Lonavala'],
    searchIntent: 'Informational',
    searchVolume: '22,200/mo',
    mainQuestionAnswered: 'What is the ultimate itinerary, viewpoint list, and cave guide for Lonavala and Khandala?',
    targetH1: 'The Ultimate Guide to Lonavala and Khandala: Cascades, Caves & Canyons',
    seoTitle: 'Lonavala Travel Guide – Waterfalls, Karla Caves & Chikki',
    metaDescription: 'Navigate Lonavala and Khandala: 2nd-century BCE Karla & Bhaja caves, Tiger\'s Leap cliff, Bhushi Dam cascades, Lohagad fort trek, and peanut chikki.'
  },
  {
    pageName: 'Blog 3: Mahabaleshwar Guide',
    targetUrl: '/blogs/mahabaleshwar-travel-guide',
    primaryKeyword: 'Mahabaleshwar travel guide',
    secondaryKeywords: ['Mahabaleshwar strawberry picking', 'Arthur\'s Seat Mahabaleshwar'],
    searchIntent: 'Informational',
    searchVolume: '18,100/mo',
    mainQuestionAnswered: 'How should you plan a complete 3-day holiday in Mahabaleshwar and Panchgani?',
    targetH1: 'Mahabaleshwar Travel Guide: Strawberry Farms, Viewpoints and Scenic Roads',
    seoTitle: 'Mahabaleshwar Travel Guide – Strawberry Farms & Viewpoints',
    metaDescription: 'Plan your trip to Mahabaleshwar: farm-fresh strawberries with clotted cream, Arthur\'s Seat cliff, Venna Lake boating, and Pratapgad fort day trips.'
  },
  {
    pageName: 'Blog 4: Konkan Coast Beaches',
    targetUrl: '/blogs/discovering-konkan-coast',
    primaryKeyword: 'Konkan coast beaches',
    secondaryKeywords: ['Konkan road trip Maharashtra', 'Malvani seafood guide'],
    searchIntent: 'Informational',
    searchVolume: '14,800/mo',
    mainQuestionAnswered: 'What are the top beaches, coastal drives, and seafood villages along the 720-km Konkan coastline?',
    targetH1: 'Discovering the Konkan Coast: Beaches, Seafood and Coastal Villages',
    seoTitle: 'Konkan Coast Beaches – Alibaug, Ganpatipule & Tarkarli Guide',
    metaDescription: 'Embark on a 720-km Konkan road trip: Kashid white sands, Murud-Janjira sea fort, Ganpatipule temple, Tarkarli scuba diving, and authentic Malvani food.'
  },
  {
    pageName: 'Blog 5: Ajanta & Ellora Caves',
    targetUrl: '/blogs/ajanta-and-ellora-caves',
    primaryKeyword: 'Ajanta and Ellora Caves tour',
    secondaryKeywords: ['Kailasa Temple architecture', 'Ajanta caves paintings history'],
    searchIntent: 'Informational',
    searchVolume: '18,100/mo',
    mainQuestionAnswered: 'What is the architectural and historical significance of Ajanta frescoes and Kailasa Temple at Ellora?',
    targetH1: 'Ajanta and Ellora Caves: A Journey into India\'s Ancient Art and Architecture',
    seoTitle: 'Ajanta and Ellora Caves Tour – Monolithic Kailasa & Frescoes',
    metaDescription: 'Step into UNESCO World Heritage Ajanta & Ellora Caves: Kailasa Temple (Cave 16) carved top-down from rock, Buddhist murals, timings, and guide.'
  },
  {
    pageName: 'Blog 6: Hidden Gems',
    targetUrl: '/blogs/hidden-gems-maharashtra',
    primaryKeyword: 'hidden places in Maharashtra',
    secondaryKeywords: ['offbeat destinations Maharashtra', 'Sandhan Valley Lonar crater'],
    searchIntent: 'Informational',
    searchVolume: '12,100/mo',
    mainQuestionAnswered: 'Which are the most extraordinary off-the-beaten-path geological and natural sites in Maharashtra?',
    targetH1: 'Hidden Gems of Maharashtra That Deserve a Place on Your Travel List',
    seoTitle: 'Hidden Places in Maharashtra – Offbeat Canyons & Crater Lakes',
    metaDescription: 'Explore Maharashtra\'s best-kept secrets: Lonar meteorite crater lake, Sandhan Valley slot canyon, Amboli misty rainforests, and Bhandardara fireflies.'
  },
  {
    pageName: 'Blog 7: Maharashtra Food Guide',
    targetUrl: '/blogs/food-lovers-guide-maharashtra',
    primaryKeyword: 'food in Maharashtra',
    secondaryKeywords: ['Maharashtrian street food', 'Mumbai Vada Pav Misal Pav'],
    searchIntent: 'Informational',
    searchVolume: '22,200/mo',
    mainQuestionAnswered: 'What are the must-eat regional dishes, street snacks, and festival sweets across Maharashtra?',
    targetH1: 'A Food Lover\'s Guide to Maharashtra: From Vada Pav to Puran Poli',
    seoTitle: 'Food in Maharashtra – Vada Pav, Misal Pav & Malvani Seafood',
    metaDescription: 'An epicurean journey across Maharashtra: Mumbai Vada Pav, regional Misal Pav, rustic Pithla Bhakri, Kolhapuri rassa, sweet Puran Poli, and Modak.'
  },
  {
    pageName: 'Blog 8: Monsoon Destinations',
    targetUrl: '/blogs/best-monsoon-destinations-maharashtra',
    primaryKeyword: 'monsoon destinations in Maharashtra',
    secondaryKeywords: ['places to visit in monsoon Maharashtra', 'Malshej Ghat waterfalls'],
    searchIntent: 'Informational',
    searchVolume: '33,100/mo',
    mainQuestionAnswered: 'Which mountain passes and waterfalls are best to visit during the monsoon season in Maharashtra?',
    targetH1: 'The Best Monsoon Destinations in Maharashtra: Mists, Waterfalls & Sahyadris',
    seoTitle: 'Monsoon Destinations in Maharashtra – Waterfalls & Ghats',
    metaDescription: 'Experience rain in the Western Ghats: roaring cascades of Malshej Ghat, Tamhini Ghat mist drive, Bhandardara waterfalls, and essential trek safety.'
  },
  {
    pageName: 'Blog 9: Tadoba Wildlife Safari',
    targetUrl: '/blogs/tadoba-wildlife-responsible-safari',
    primaryKeyword: 'Tadoba safari guide',
    secondaryKeywords: ['tiger safari Maharashtra', 'Tadoba national park booking tips'],
    searchIntent: 'Commercial Investigation',
    searchVolume: '14,800/mo',
    mainQuestionAnswered: 'How do you plan a responsible, successful tiger safari expedition in Tadoba-Andhari?',
    targetH1: 'Tadoba and Maharashtra\'s Wildlife: A Guide to Responsible Safari Travel',
    seoTitle: 'Tadoba Safari Guide – Responsible Tiger Tourism in Vidarbha',
    metaDescription: 'Track Royal Bengal Tigers in Tadoba-Andhari: core vs buffer gates, permit booking tips, wildlife ethics, seasonal sightings, and Vidarbha Saoji meals.'
  },
  {
    pageName: 'Blog 10: Spiritual Maharashtra',
    targetUrl: '/blogs/spiritual-maharashtra-pilgrimage-destinations',
    primaryKeyword: 'temples in Maharashtra',
    secondaryKeywords: ['Jyotirlinga in Maharashtra', 'Shirdi Pandharpur pilgrimage'],
    searchIntent: 'Informational',
    searchVolume: '27,100/mo',
    mainQuestionAnswered: 'What are the 5 Jyotirlingas, Shirdi Sai Baba temple, and major pilgrimage circuits in Maharashtra?',
    targetH1: 'Spiritual Maharashtra: Famous Temples and Pilgrimage Destinations',
    seoTitle: 'Temples in Maharashtra – 5 Jyotirlingas, Shirdi & Pandharpur',
    metaDescription: 'Explore sacred Maharashtra: 5 Jyotirlinga shrines including Trimbakeshwar, Shirdi Sai Baba Samadhi, Pandharpur Vitthal temple, and Shakti Peethas.'
  },
  {
    pageName: 'Blog 11: Weekend Itineraries',
    targetUrl: '/blogs/one-perfect-weekend-itineraries-mumbai-pune',
    primaryKeyword: 'weekend getaways from Mumbai',
    secondaryKeywords: ['weekend trips from Pune', '2 day trip from Mumbai Pune'],
    searchIntent: 'Commercial Investigation',
    searchVolume: '40,500/mo',
    mainQuestionAnswered: 'What are the best tested 48-hour and 72-hour road trip itineraries departing Mumbai and Pune?',
    targetH1: 'One Perfect Weekend: Travel Itineraries from Mumbai and Pune',
    seoTitle: 'Weekend Getaways from Mumbai & Pune – 2 & 3 Day Trips',
    metaDescription: 'Tested 48-hour and 72-hour road trip itineraries from Mumbai and Pune: coastal Alibaug, misty Mahabaleshwar, Nashik wine tours, and Sahyadri fort trails.'
  },
  {
    pageName: 'Blog 12: Matheran Hill Station',
    targetUrl: '/blogs/matheran-car-free-hill-station',
    primaryKeyword: 'Matheran hill station guide',
    secondaryKeywords: ['Matheran toy train timings', 'car free hill station India'],
    searchIntent: 'Informational',
    searchVolume: '18,100/mo',
    mainQuestionAnswered: 'Why is Matheran Asia\'s only car-free hill station and what are the best walking trails and viewpoints?',
    targetH1: 'Matheran: Discover India\'s Unique Car-Free Hill Station',
    seoTitle: 'Matheran Hill Station Guide – Toy Train & Car-Free Trails',
    metaDescription: 'Discover Matheran, Asia\'s only vehicle-free eco-sensitive hill station: 1907 heritage toy train, red clay forest walks, Charlotte Lake, and viewpoints.'
  }
];
